import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import FloatingScrollArrows from '../common/FloatingScrollArrows';
import { LeadProvider } from '../../context/LeadContext';
import LeadModal from '../lead/LeadModal';
import LoginModal from '../auth/LoginModal';
import StickyCTA from '../lead/StickyCTA';
import ScrollProgressBar from '../common/animations/ScrollProgressBar';
import CookieConsentBanner from '../common/CookieConsentBanner';

const ABOUT_PATH = '/about/about-overview';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [dismissed, setDismissed] = useState(false);

  // Re-show every time the About Us page is entered (nav click or reload)
  useEffect(() => {
    if (pathname === ABOUT_PATH) setDismissed(false);
  }, [pathname]);

  // Only shown on the About Us page, not site-wide
  const cookieBannerVisible = pathname === ABOUT_PATH && !dismissed;

  return (
    <LeadProvider>
      <ScrollToTop />
      <ScrollProgressBar />
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1 w-full pt-20">
          {children}
        </main>
        <Footer />
        {/* Reserves space so the fixed, full-width cookie banner below never
            overlaps (and swallows clicks on) the footer's last row of links */}
        {cookieBannerVisible && <div className="h-36 sm:h-20" aria-hidden="true" />}
        <FloatingScrollArrows />
        <StickyCTA />
        <LeadModal />
        <LoginModal />
        <CookieConsentBanner isVisible={cookieBannerVisible} onChoice={() => setDismissed(true)} />
      </div>
    </LeadProvider>
  );
};

export default Layout;
