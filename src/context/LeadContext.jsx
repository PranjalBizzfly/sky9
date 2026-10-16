import React, { createContext, useContext, useState } from 'react';

const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [modalContext, setModalContext] = useState({
    title: 'Enquire About Sky9 Programs',
    subtitle: 'Speak with our admissions counselors to pick batch timings and training mode.',
    course: '',
    topic: '',
    pageType: 'general',
    ctaSource: 'global-cta',
  });

  const openLeadModal = (config = {}) => {
    setModalContext((prev) => ({
      ...prev,
      ...config,
      title: config.title || 'Request Program Information',
      subtitle: config.subtitle || 'Our Pune admissions team (+91 7 319 419 519) will contact you shortly.',
      course: config.course || prev.course || '',
      ctaSource: config.ctaSource || 'enquire-button',
    }));
    setIsModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  return (
    <LeadContext.Provider
      value={{
        isModalOpen,
        modalContext,
        openLeadModal,
        closeLeadModal,
        isLoginOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  const context = useContext(LeadContext);
  if (!context) {
    return {
      isModalOpen: false,
      modalContext: {},
      openLeadModal: () => {},
      closeLeadModal: () => {},
      isLoginOpen: false,
      openLoginModal: () => {},
      closeLoginModal: () => {},
    };
  }
  return context;
}
