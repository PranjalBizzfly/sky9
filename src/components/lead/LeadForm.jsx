import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Sparkles, ChevronDown, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import contentRepository from '../../services/contentRepository';
import leadService from '../../services/leadService';
import countryCodes from '../../data/countryCodes';
import { checkEmailDomainSuggestion, validateEmail, validateLeadForm, validateName, validatePhoneWithCountry } from '../../utils/validation';
import FormValidationMessage from './FormValidationMessage';
import LeadSuccessMessage from './LeadSuccessMessage';
import LeadErrorMessage from './LeadErrorMessage';
import LeadLoadingState from './LeadLoadingState';

export default function LeadForm({
  defaultCourse = '',
  ctaSource = 'inline-form',
  title = 'Request Program Information',
  subtitle = 'Fill in your contact details below and our admissions team will contact you shortly.',
  compact = false,
  onSuccessCallback,
}) {
  const location = useLocation();
  const { theme } = useTheme();
  const allCourses = contentRepository.getAllCourses();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    course: defaultCourse || (allCourses[0]?.title || 'Digital Marketing Training'),
    preferredMode: 'Classroom Training (Pune Center)',
    message: '',
    website: '', // honeypot: real users never see or fill this field
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailSuggestion, setEmailSuggestion] = useState(null);

  const isNameValid = formData.name ? validateName(formData.name).isValid : false;
  const isEmailValid = formData.email ? validateEmail(formData.email) : false;
  const isPhoneValid = formData.phone ? validatePhoneWithCountry(formData.phone, formData.countryCode) : false;

  const handleNameKeyDown = (e) => {
    // Allow control keys (Backspace, Tab, Delete, Arrows, etc.)
    if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
      return;
    }
    // Allow clipboard shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z)
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    // Block numbers 0-9 immediately on keystroke
    if (/[0-9]/.test(e.key)) {
      e.preventDefault();
      setErrors((prev) => ({ ...prev, name: 'Numbers are not allowed in Full Name. Please enter alphabets only.' }));
      return;
    }
    // Allow only alphabets, spaces, apostrophes, and hyphens
    if (!/^[a-zA-Z\s.'-]$/.test(e.key)) {
      e.preventDefault();
      setErrors((prev) => ({ ...prev, name: 'Only alphabets (A-Z) and spaces are allowed in Full Name.' }));
    }
  };

  const handlePhoneKeyDown = (e) => {
    if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
      return;
    }
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    // Block non-digit keystrokes in phone number
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
      setErrors((prev) => ({ ...prev, phone: 'Phone number can only contain digits (0-9).' }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      // Disallow any numbers or special symbols from being entered/pasted into Full Name
      const sanitized = value.replace(/[^a-zA-Z\s.'-]/g, '');
      setFormData((prev) => ({ ...prev, name: sanitized }));
      if (value !== sanitized) {
        setErrors((prev) => ({ ...prev, name: 'Numbers are not allowed in Full Name. Please enter alphabets only.' }));
      } else if (errors.name) {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
      return;
    }

    if (name === 'phone') {
      let sanitizedDigits = value.replace(/[^\d]/g, '');
      // Auto-strip leading 91 or 0 if user pastes or types country code with Indian number
      if (formData.countryCode === '+91') {
        if (sanitizedDigits.length === 12 && sanitizedDigits.startsWith('91')) {
          sanitizedDigits = sanitizedDigits.slice(2);
        } else if (sanitizedDigits.length === 11 && sanitizedDigits.startsWith('0')) {
          sanitizedDigits = sanitizedDigits.slice(1);
        }
      }
      const maxLen = formData.countryCode === '+91' ? 10 : 15;
      const truncated = sanitizedDigits.slice(0, maxLen);
      setFormData((prev) => ({ ...prev, phone: truncated }));
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email') {
      const suggestion = checkEmailDomainSuggestion(value);
      setEmailSuggestion(suggestion);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleApplyEmailSuggestion = () => {
    if (emailSuggestion) {
      setFormData((prev) => ({ ...prev, email: emailSuggestion }));
      setEmailSuggestion(null);
      if (errors.email) {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot: real visitors never see or fill this field, so a filled
    // value means a bot. Pretend success without actually submitting.
    if (formData.website) {
      setIsSuccess(true);
      return;
    }

    // Pre-submission client-side validation check
    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    const context = leadService.getLeadContext(location.pathname, {
      course: formData.course,
      ctaSource,
    });

    const result = await leadService.submitLead(formData, context);
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      if (typeof onSuccessCallback === 'function') {
        onSuccessCallback(result.lead);
      }
    } else if (result.errors) {
      setErrors(result.errors);
    } else {
      setErrorMessage(result.message || 'Submission failed. Please try again.');
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
    setEmailSuggestion(null);
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      course: defaultCourse || (allCourses[0]?.title || 'Digital Marketing Training'),
      preferredMode: 'Classroom Training (Pune Center)',
      message: '',
      website: '',
    });
  };

  if (isSuccess) {
    return <LeadSuccessMessage onReset={handleReset} />;
  }

  const selectOptionStyle = {
    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
    color: theme === 'dark' ? '#f8fafc' : '#0f172a',
  };

  const selectedCountry = countryCodes.find((c) => c.dialCode === formData.countryCode) || countryCodes[0];
  const filteredCountries = countryCodes.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.dialCode.includes(countrySearch) ||
    c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      {title && (
        <h3 className={`${compact ? 'text-lg' : 'text-2xl'} font-bold text-slate-900 dark:text-white mb-2 font-heading`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">
          {subtitle}
        </p>
      )}

      {errorMessage && <div className="mb-4"><LeadErrorMessage message={errorMessage} /></div>}

      {isSubmitting ? (
        <LeadLoadingState />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot spam trap: hidden from sighted and screen-reader users,
              but visible to most basic form-filling bots */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
          />

          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onKeyDown={handleNameKeyDown}
                className={`w-full pl-3.5 pr-10 py-2.5 rounded-xl border ${
                  errors.name
                    ? 'border-rose-500 ring-1 ring-rose-500/20'
                    : isNameValid
                    ? 'border-emerald-500/70 dark:border-emerald-500/60 ring-1 ring-emerald-500/20'
                    : 'border-slate-200 dark:border-slate-700'
                } bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm`}
                placeholder="e.g. Rahul Sharma"
                autoComplete="name"
              />
              {isNameValid && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none animate-fadeIn" />
              )}
            </div>
            <FormValidationMessage message={errors.name} />
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email with Live Authentication & Suggestion */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-3.5 pr-10 py-2.5 rounded-xl border ${
                    errors.email
                      ? 'border-rose-500 ring-1 ring-rose-500/20'
                      : isEmailValid
                      ? 'border-emerald-500/70 dark:border-emerald-500/60 ring-1 ring-emerald-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  } bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition text-sm`}
                  placeholder="rahul@example.com"
                  autoComplete="email"
                />
                {isEmailValid && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none animate-fadeIn" />
                )}
              </div>

              {/* Email typo suggestion pill */}
              {emailSuggestion && (
                <div className="mt-1.5 p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-300 text-[11px]">
                    Did you mean <strong className="text-emerald-600 dark:text-emerald-400">{emailSuggestion}</strong>?
                  </span>
                  <button
                    type="button"
                    onClick={handleApplyEmailSuggestion}
                    className="ml-2 px-2 py-0.5 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-[10px] transition-colors"
                  >
                    Fix
                  </button>
                </div>
              )}

              <FormValidationMessage message={errors.email} />
            </div>

            {/* Phone Number with Integrated Country Code Selector & Input Section */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Phone Number *
              </label>
              <div
                className={`flex items-center rounded-xl border ${
                  errors.phone
                    ? 'border-rose-500 ring-1 ring-rose-500/20'
                    : isPhoneValid
                    ? 'border-emerald-500/70 dark:border-emerald-500/60 ring-1 ring-emerald-500/20'
                    : 'border-slate-200 dark:border-slate-700'
                } bg-slate-50 dark:bg-slate-900 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 relative transition`}
              >
                {/* Compact Country Code Dropdown Trigger */}
                <div className="relative shrink-0" ref={countryDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-1.5 py-2.5 px-3 rounded-l-xl border-r border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200/90 dark:hover:bg-slate-700/90 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors focus:outline-none"
                    aria-label="Select Country Code"
                    aria-expanded={isCountryDropdownOpen}
                  >
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    <span className="font-bold text-xs text-slate-700 dark:text-slate-300">{selectedCountry.dialCode}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isCountryDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1.5 w-64 max-h-60 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col animate-fadeIn">
                      <div className="p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-slate-400" />
                        <input
                          type="text"
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          placeholder="Search country or code..."
                          className="w-full px-2 py-1 text-xs rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="overflow-y-auto max-h-48 py-1 divide-y divide-slate-100 dark:divide-slate-800/40">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((c) => (
                            <button
                              key={`${c.code}-${c.dialCode}`}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, countryCode: c.dialCode }));
                                setIsCountryDropdownOpen(false);
                                setCountrySearch('');
                                if (errors.phone) {
                                  setErrors((prev) => ({ ...prev, phone: '' }));
                                }
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors ${
                                formData.countryCode === c.dialCode && selectedCountry.code === c.code
                                  ? 'bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold'
                                  : 'text-slate-700 dark:text-slate-200'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate pr-2">
                                <span className="text-base leading-none shrink-0">{c.flag}</span>
                                <span className="truncate">{c.name}</span>
                              </div>
                              <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] shrink-0 font-medium">
                                {c.dialCode}
                              </span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-4 text-center text-xs text-slate-400">
                            No countries found
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Visible Phone Input Section */}
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
                  className="flex-1 w-full min-w-0 pl-3.5 pr-2 py-2.5 bg-transparent text-slate-900 dark:text-white text-sm focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-r-xl"
                  placeholder={formData.countryCode === '+91' ? '98765 43210' : 'Enter mobile number'}
                  autoComplete="tel"
                />
                {isPhoneValid && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 pointer-events-none shrink-0 animate-fadeIn" />
                )}
              </div>
              <FormValidationMessage message={errors.phone} />
            </div>
          </div>

          {/* Program of Interest (Dark Mode Fixed Select) */}
          <div>
            <label htmlFor="course" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Program of Interest *
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              style={{
                colorScheme: theme === 'dark' ? 'dark' : 'light',
                ...selectOptionStyle,
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
            >
              {allCourses.map((c) => (
                <option
                  key={c.slug}
                  value={c.title}
                  style={selectOptionStyle}
                  className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-2"
                >
                  {c.title}
                </option>
              ))}
            </select>
            <FormValidationMessage message={errors.course} />
          </div>

          {/* Preferred Training Mode (Dark Mode Fixed Select) */}
          <div>
            <label htmlFor="preferredMode" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Preferred Training Mode
            </label>
            <select
              id="preferredMode"
              name="preferredMode"
              value={formData.preferredMode}
              onChange={handleChange}
              style={{
                colorScheme: theme === 'dark' ? 'dark' : 'light',
                ...selectOptionStyle,
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm cursor-pointer"
            >
              <option
                value="Classroom Training (Pune Center)"
                style={selectOptionStyle}
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-2"
              >
                Classroom Training (Pune Center)
              </option>
              <option
                value="Live Interactive Online (Pan-India)"
                style={selectOptionStyle}
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-2"
              >
                Live Interactive Online (Pan-India)
              </option>
              <option
                value="Weekend Professional Batch"
                style={selectOptionStyle}
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-2"
              >
                Weekend Professional Batch
              </option>
            </select>
          </div>

          {!compact && (
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Specific Message or Enquiry (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                placeholder="Ask about batch start dates, fee installments, or internship options..."
              />
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl transition duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-sm cursor-pointer disabled:opacity-70 group"
          >
            <span>Submit Admissions Enquiry</span>
            <motion.span
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.span>
          </motion.button>
        </form>
      )}
    </div>
  );
}
