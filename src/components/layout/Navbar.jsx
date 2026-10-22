import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLead } from '../../context/LeadContext';
import { headerNavigation } from '../../data/headerNavigationData';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openLoginModal } = useLead();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const drawerContentRef = useRef(null);
  const wasMobileMenuOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded({});
  }, [location.pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes dropdowns
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Move focus into the drawer on open, and back to the trigger on close
  useEffect(() => {
    if (mobileMenuOpen) {
      wasMobileMenuOpenRef.current = true;
      const id = requestAnimationFrame(() => closeButtonRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
    if (wasMobileMenuOpenRef.current) {
      wasMobileMenuOpenRef.current = false;
      menuButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  // Trap Tab focus inside the drawer while it is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleTrapTab = (e) => {
      if (e.key !== 'Tab' || !drawerContentRef.current) return;
      const focusables = drawerContentRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleTrapTab);
    return () => document.removeEventListener('keydown', handleTrapTab);
  }, [mobileMenuOpen]);

  const logoSrc = theme === 'light' ? '/sky9-logo-light.svg' : '/sky9-logo.svg';

  const toggleMobileCategory = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
          isScrolled
            ? 'h-16 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5'
          : 'h-20 bg-transparent border-b border-transparent'
      }`}
    >
      <div ref={navRef} className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo - Far Left */}
        <Link to="/" className="flex items-center shrink-0 pr-4 group">
          <img
            src={logoSrc}
            alt="Sky9 India"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation - Clean Horizontal Layout */}
        <nav className="hidden xl:flex self-stretch items-center gap-3.5 2xl:gap-6 whitespace-nowrap" aria-label="Main Navigation">
          {headerNavigation.filter((item) => item.path !== '/contact-us').map((item, idx) => {
            const isCurrentActive = item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.matchPath || item.path);

            if (item.type === 'link') {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`relative text-[13px] 2xl:text-sm font-medium transition-colors py-2 whitespace-nowrap ${
                    isCurrentActive
                      ? 'text-emerald-500 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400'
                  }`}
                >
                  <span>{item.label}</span>
                  {isCurrentActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            }

            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className={item.type === 'megamenu' ? 'static self-stretch flex items-center' : 'relative'}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                  onFocus={() => setActiveDropdown(item.label)}
                  aria-expanded={isOpen}
                  className={`relative flex items-center gap-1 text-[13px] 2xl:text-sm font-medium transition-colors py-2 whitespace-nowrap ${
                    isOpen || isCurrentActive
                      ? 'text-emerald-500 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-500' : 'text-slate-400'}`} />
                  {isCurrentActive && (
                    <motion.div
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Dropdown Type 1: Mega Menu for Courses */}
                <AnimatePresence>
                  {isOpen && item.type === 'megamenu' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[min(1040px,calc(100vw-2rem))] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden p-6 grid grid-cols-4 gap-6 whitespace-normal text-slate-900 dark:text-white"
                    >
                      {item.columns?.map((col) => {
                        const ColIcon = col.icon;
                        return (
                          <div key={col.title} className="min-w-0 space-y-3">
                            <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                              <div className="w-8 h-8 shrink-0 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                <ColIcon className="w-4 h-4" />
                              </div>
                              <Link
                                to={col.mainPath}
                                onClick={() => setActiveDropdown(null)}
                                className="font-bold text-sm leading-snug hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                              >
                                {col.title}
                              </Link>
                            </div>
                            <ul className="space-y-1.5">
                              {/* The column heading already links to the course page, so skip its duplicate entry. */}
                              {col.items.filter((subItem) => !subItem.isMain).map((subItem) => (
                                <li key={subItem.path}>
                                  <Link
                                    to={subItem.path}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`block text-xs leading-snug break-words transition-colors py-1 ${
                                      subItem.isMain
                                        ? 'font-bold text-emerald-600 dark:text-emerald-400 hover:underline'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400'
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dropdown Type 2: Standard Single-Column Dropdown */}
                <AnimatePresence>
                  {isOpen && item.type === 'dropdown' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className={`absolute top-full ${
                        idx >= 4 ? 'right-0' : 'left-0'
                      } w-[385px] max-w-[90vw] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden mt-1 p-3 space-y-1`}
                    >
                      {item.items?.map((subItem) => {
                        const SubIcon = subItem.icon;
                        return (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors group"
                          >
                            {SubIcon && (
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                                <SubIcon className="w-4 h-4" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold dark:text-white text-slate-900 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                                {subItem.label}
                              </p>
                              {subItem.desc && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                  {subItem.desc}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle | Contact | Log In | Enroll Now */}
        <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3.5 shrink-0 pl-3">
          {/* Animated Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border dark:border-slate-800 border-slate-200/80 shrink-0"
            aria-label="Toggle Dark/Light Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <Link
            to="/contact-us"
            className="text-[13px] 2xl:text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors px-1.5 py-1 whitespace-nowrap"
          >
            Contact Us
          </Link>

          <button
            type="button"
            onClick={openLoginModal}
            className="px-4 2xl:px-5 py-2 rounded-full border border-slate-300/90 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-[13px] 2xl:text-sm transition hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Log In
          </button>

          <Link
            to="/contact-us"
            className="btn-shimmer group inline-flex items-center gap-2 px-4 2xl:px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-[13px] 2xl:text-sm rounded-full transition shadow-sm hover:shadow-md hover:shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <span>Enroll Now</span>
            <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.button>
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-slate-700 dark:text-slate-200"
            aria-label="Open Mobile Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>

    {/* Mobile Drawer Overlay, Rendered as sibling outside motion.header for reliable full-screen fixed positioning */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] xl:hidden" aria-modal="true" role="dialog">
          {/* Dimmed & Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Solid Slide-in Drawer */}
          <motion.div
            ref={drawerContentRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#080d1a] shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800 h-full overflow-hidden"
          >
            {/* Header inside drawer */}
            <div className="p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0 bg-white dark:bg-[#080d1a]">
              <img
                src={logoSrc}
                alt="Sky9 India"
                className="h-8 w-auto object-contain rounded-md"
              />
              <button
                ref={closeButtonRef}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close Mobile Navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Accordion Menu List */}
            <div className="flex-1 overflow-y-auto py-5 px-4 space-y-2 bg-white dark:bg-[#080d1a]">
              {headerNavigation.map((item) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 px-3 rounded-xl font-bold dark:text-white text-slate-900 hover:text-emerald-500 dark:hover:text-emerald-400 border-b border-slate-100 dark:border-slate-800/50"
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isExpanded = !!mobileExpanded[item.label];

                return (
                  <div key={item.label} className="border-b border-slate-100 dark:border-slate-800/50 pb-2">
                    <button
                      onClick={() => toggleMobileCategory(item.label)}
                      aria-expanded={isExpanded}
                      className="flex items-center justify-between w-full py-2.5 px-3 text-left font-bold dark:text-white text-slate-900"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-emerald-500' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden space-y-2 mt-1 pl-4 border-l-2 border-emerald-500/30"
                        >
                          {/* Mega menu mobile layout */}
                          {item.type === 'megamenu' &&
                            item.columns?.map((col) => (
                              <div key={col.title} className="py-2 space-y-1">
                                <Link
                                  to={col.mainPath}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block font-bold text-xs text-emerald-500 uppercase tracking-wider mb-1"
                                >
                                  {col.title} →
                                </Link>
                                {col.items.map((sub) => (
                                  <Link
                                    key={sub.path}
                                    to={sub.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1 text-xs dark:text-slate-300 text-slate-600 hover:text-emerald-500"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}

                          {/* Standard dropdown mobile layout */}
                          {item.type === 'dropdown' &&
                            item.items?.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2 py-2 text-xs font-medium dark:text-slate-300 text-slate-600 hover:text-emerald-500"
                              >
                                {sub.icon && <sub.icon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5 shrink-0 bg-white dark:bg-[#080d1a]">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLoginModal();
                }}
                className="flex items-center justify-center w-full py-2.5 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-500 font-semibold rounded-xl text-sm transition cursor-pointer"
              >
                Log In
              </button>
              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-shimmer flex items-center justify-center w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition shadow-md shadow-emerald-500/20"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
}

