/**
 * Sky9 India, Centralized Lead Service Layer (Phase 11)
 * 
 * Handles context resolution, lead validation, submission management,
 * local persistence, and event hooks for future CRM & Analytics integration.
 */

import { validateLeadForm } from '../utils/validation';

class LeadService {
  constructor() {
    this.leads = this.loadLeadsFromStorage();
    this.listeners = [];
    this.analyticsHooks = [];
  }

  // Load persistent local lead history for preview & inspection
  loadLeadsFromStorage() {
    try {
      const stored = localStorage.getItem('sky9_lead_history');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // Save lead to local storage safely
  saveLeadToStorage(lead) {
    try {
      const updated = [lead, ...this.leads].slice(0, 50);
      this.leads = updated;
      localStorage.setItem('sky9_lead_history', JSON.stringify(updated));
    } catch (e) {
      console.warn('[LeadService] LocalStorage save failed:', e);
    }
  }

  // Extract structured page & CTA context automatically from pathname
  getLeadContext(pathname = '/', extra = {}) {
    const parts = pathname.replace(/^\/+|\/+$/g, '').split('/');
    let pageType = 'general';
    let course = extra.course || '';
    let topic = extra.topic || '';
    let audience = extra.audience || '';
    let category = extra.category || '';

    if (parts[0] === 'courses') {
      pageType = 'course';
      if (parts[1]) course = parts[1];
      if (parts[2]) topic = parts[2];
    } else if (parts[0] === 'career') {
      pageType = 'career';
      if (parts[1]) course = parts[1];
    } else if (parts[0] === 'internship') {
      pageType = 'internship';
      if (parts[1]) course = parts[1];
    } else if (parts[0] === 'certification') {
      pageType = 'certification';
      if (parts[1]) course = parts[1];
    } else if (parts[0] === 'resources') {
      pageType = 'resource';
    } else if (parts[0] === 'locations') {
      pageType = 'location';
    } else if (parts[0] && parts[0].startsWith('for-')) {
      pageType = 'audience';
      audience = parts[0];
    }

    return {
      pathname,
      pageType: extra.pageType || pageType,
      course: extra.course || course,
      topic: extra.topic || topic,
      category: extra.category || category,
      audience: extra.audience || audience,
      ctaSource: extra.ctaSource || 'page-cta',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      timestamp: new Date().toISOString(),
    };
  }

  // Construct structured Lead Data Object
  createLeadModel(formData = {}, contextData = {}) {
    return {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: (formData.name || '').trim(),
      email: (formData.email || '').trim().toLowerCase(),
      countryCode: formData.countryCode || '+91',
      phone: (formData.phone || '').trim(),
      fullPhone: `${formData.countryCode || '+91'} ${(formData.phone || '').trim()}`,
      course: formData.course || 'Digital Marketing Training',
      preferredMode: formData.preferredMode || 'Classroom / Online',
      message: (formData.message || '').trim(),
      context: {
        pageType: contextData.pageType || 'general',
        course: contextData.course || '',
        topic: contextData.topic || '',
        category: contextData.category || '',
        audience: contextData.audience || '',
        ctaSource: contextData.ctaSource || 'direct',
        pathname: contextData.pathname || '/',
      },
      status: 'new', // new, contacted, qualified, converted
      createdAt: new Date().toISOString(),
    };
  }

  // Validate & Submit Lead
  async submitLead(formData = {}, contextData = {}) {
    // 1. Validation
    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors,
        message: 'Please resolve the highlighted form errors before submitting.',
      };
    }

    // 2. Build Lead Record
    const lead = this.createLeadModel(formData, contextData);

    // 3. Simulate Asynchronous Network Request
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 4. Save to Local Persistence
    this.saveLeadToStorage(lead);

    // 5. Trigger Analytics & Event Listeners
    this.triggerAnalyticsEvent('lead_submitted', lead);
    this.notifyListeners(lead);

    return {
      success: true,
      lead,
      message: 'Thank you! Your enquiry has been received. Our admissions team (+91 7 319 419 519) will contact you shortly.',
    };
  }

  // Event Subscription Hook (for analytics or CRM sync ready)
  subscribe(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    }
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notifyListeners(lead) {
    this.listeners.forEach((fn) => {
      try {
        fn(lead);
      } catch (e) {
        console.error('[LeadService] Listener error:', e);
      }
    });
  }

  // Analytics Hook Abstraction
  triggerAnalyticsEvent(eventName, payload) {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
    // Dev-only: the payload carries the visitor's name, email and phone.
    if (import.meta.env.DEV) console.log(`[LeadAnalytics] Event: ${eventName}`, payload);
  }

  // Get lead submission history
  getLeadHistory() {
    return this.leads;
  }
}

export const leadService = new LeadService();
export default leadService;
