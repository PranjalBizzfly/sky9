import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ChevronDown, Search, CheckCircle2 } from 'lucide-react';
import countryCodes from '../../data/countryCodes';
import leadService from '../../services/leadService';
import { validateName, validateEmail, validatePhoneWithCountry } from '../../utils/validation';
import { downloadCourseDetailsPDF } from '../../utils/generateCourseDetailsPDF';
import FormValidationMessage from './FormValidationMessage';

const initialFormData = { name: '', email: '', countryCode: '+91', phone: '' };

export default function DownloadDetailsModal({ isOpen, onClose, ctaSource = 'download-details' }) {
  const location = useLocation();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  if (!isOpen) return null;

  const isNameValid = formData.name ? validateName(formData.name).isValid : false;
  const isEmailValid = formData.email ? validateEmail(formData.email) : false;
  const isPhoneValid = formData.phone ? validatePhoneWithCountry(formData.phone, formData.countryCode) : false;
  const selectedCountry = countryCodes.find((c) => c.dialCode === formData.countryCode) || countryCodes[0];
  const filteredCountries = countryCodes.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.dialCode.includes(countrySearch) ||
    c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormData(initialFormData);
      setErrors({});
      setIsSuccess(false);
    }, 200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const sanitized = value.replace(/[^a-zA-Z\s.'-]/g, '');
      setFormData((prev) => ({ ...prev, name: sanitized }));
    } else if (name === 'phone') {
      const maxLen = formData.countryCode === '+91' ? 10 : 15;
      setFormData((prev) => ({ ...prev, phone: value.replace(/[^\d]/g, '').slice(0, maxLen) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameCheck = validateName(formData.name);
    const nextErrors = {};
    if (!nameCheck.isValid) nextErrors.name = nameCheck.error;
    if (!validateEmail(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!validatePhoneWithCountry(formData.phone, formData.countryCode)) nextErrors.phone = 'Please enter a valid mobile number.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    const context = leadService.getLeadContext(location.pathname, { ctaSource, pageType: 'general' });
    const result = await leadService.submitLead(
      { ...formData, course: 'Sky9 India Course Details Download' },
      context
    );
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      downloadCourseDetailsPDF();
    } else if (result.errors) {
      setErrors(result.errors);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <div className="absolute inset-0" onClick={handleClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="py-4 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">Your Download Has Started!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Thanks, {formData.name.split(' ')[0]}. The full Sky9 India course details PDF is downloading now. Our admissions team may also follow up by email or WhatsApp.
              </p>
              <div className="flex items-center justify-center gap-3 pt-1">
                <button
                  onClick={() => downloadCourseDetailsPDF()}
                  className="px-4 py-2 rounded-xl border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download again</span>
                </button>
                <button
                  onClick={handleClose}
                  className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-1">Download Course Details</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5">
                Tell us where to reach you and your PDF download will start straight away.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="dl-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="dl-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    autoComplete="name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.name ? 'border-rose-500 ring-1 ring-rose-500/20' : isNameValid ? 'border-emerald-500/70 ring-1 ring-emerald-500/20' : 'border-slate-200 dark:border-slate-700'
                    } bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition`}
                  />
                  <FormValidationMessage message={errors.name} />
                </div>

                <div>
                  <label htmlFor="dl-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Mobile Number *
                  </label>
                  <div
                    className={`flex items-center rounded-xl border ${
                      errors.phone ? 'border-rose-500 ring-1 ring-rose-500/20' : isPhoneValid ? 'border-emerald-500/70 ring-1 ring-emerald-500/20' : 'border-slate-200 dark:border-slate-700'
                    } bg-slate-50 dark:bg-slate-800 focus-within:ring-2 focus-within:ring-emerald-500 relative transition`}
                  >
                    <div className="relative shrink-0" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen((prev) => !prev)}
                        className="flex items-center gap-1.5 py-2.5 px-3 rounded-l-xl border-r border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-700/60 hover:bg-slate-200/90 dark:hover:bg-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors"
                        aria-label="Select Country Code"
                      >
                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                        <span className="font-bold text-xs">{selectedCountry.dialCode}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute left-0 top-full mt-1.5 w-64 max-h-60 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col">
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
                            {filteredCountries.map((c) => (
                              <button
                                key={`${c.code}-${c.dialCode}`}
                                type="button"
                                onClick={() => {
                                  setFormData((prev) => ({ ...prev, countryCode: c.dialCode }));
                                  setIsCountryDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                                className="w-full flex items-center justify-between px-3 py-2 text-xs text-left hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors text-slate-700 dark:text-slate-200"
                              >
                                <div className="flex items-center gap-2 truncate pr-2">
                                  <span className="text-base leading-none shrink-0">{c.flag}</span>
                                  <span className="truncate">{c.name}</span>
                                </div>
                                <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px] shrink-0">{c.dialCode}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      id="dl-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={formData.countryCode === '+91' ? 'Enter your 10 digit mobile number' : 'Enter mobile number'}
                      autoComplete="tel"
                      className="flex-1 w-full min-w-0 pl-3.5 pr-2 py-2.5 bg-transparent text-slate-900 dark:text-white text-sm focus:outline-none placeholder:text-slate-400 rounded-r-xl"
                    />
                  </div>
                  <FormValidationMessage message={errors.phone} />
                </div>

                <div>
                  <label htmlFor="dl-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="dl-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rahul@example.com"
                    autoComplete="email"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.email ? 'border-rose-500 ring-1 ring-rose-500/20' : isEmailValid ? 'border-emerald-500/70 ring-1 ring-emerald-500/20' : 'border-slate-200 dark:border-slate-700'
                    } bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition`}
                  />
                  <FormValidationMessage message={errors.email} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-xl transition shadow-lg shadow-emerald-500/25 text-sm disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Please wait...' : 'Download Course Details'}</span>
                  {!isSubmitting && <Download className="w-4 h-4" />}
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
