/**
 * Sky9 India, Form Validation & Email Authentication Utilities
 * 
 * Provides field-level validation for lead capture forms, email format authentication,
 * domain typo detection, and international phone validation.
 */

// Email regex pattern (RFC 5322 compliant simplified)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Common domain typo correction dictionary
const COMMON_DOMAIN_TYPOS = {
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gmial.com': 'gmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'hotmial.com': 'hotmail.com',
  'hotmaill.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outloo.com': 'outlook.com',
  'iclod.com': 'icloud.com',
  'rediffmai.com': 'rediffmail.com',
};

export function checkEmailDomainSuggestion(email = '') {
  if (!email || typeof email !== 'string') return null;
  const trimmed = email.trim().toLowerCase();
  const atIndex = trimmed.lastIndexOf('@');
  if (atIndex === -1) return null;

  const domain = trimmed.slice(atIndex + 1);
  const user = trimmed.slice(0, atIndex);

  if (COMMON_DOMAIN_TYPOS[domain]) {
    return `${user}@${COMMON_DOMAIN_TYPOS[domain]}`;
  }
  return null;
}

export function validateEmail(email = '') {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (!EMAIL_REGEX.test(trimmed)) return false;

  // Ensure domain has valid TLD length >= 2
  const parts = trimmed.split('@');
  if (parts.length !== 2) return false;
  const domainParts = parts[1].split('.');
  if (domainParts.length < 2) return false;
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) return false;

  return true;
}

export function validatePhoneWithCountry(phone = '', countryCode = '+91') {
  if (!phone || typeof phone !== 'string') return false;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

  // Must only contain digits
  if (!/^\d+$/.test(cleanPhone)) return false;

  if (countryCode === '+91') {
    // Standard Indian mobile number is exactly 10 digits and starts with 6-9
    return /^[6-9]\d{9}$/.test(cleanPhone);
  }

  // General International numbers are between 6 and 15 digits
  return cleanPhone.length >= 6 && cleanPhone.length <= 15;
}

export function validatePhone(phone = '') {
  return validatePhoneWithCountry(phone, '+91');
}

export function validateName(name = '') {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Full name is required.' };
  }
  const trimmed = name.trim();
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Full name is required.' };
  }
  if (/\d/.test(trimmed)) {
    return { isValid: false, error: 'Full name cannot contain numbers. Please enter alphabetical letters only.' };
  }
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
    return { isValid: false, error: 'Full name can only contain letters, spaces, and hyphens.' };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Full name must be at least 2 characters.' };
  }
  if (trimmed.length > 60) {
    return { isValid: false, error: 'Full name cannot exceed 60 characters.' };
  }
  return { isValid: true, error: null };
}

export function validateRequired(value = '') {
  if (value === null || value === undefined) return false;
  return String(value).trim().length > 0;
}

export function validateLeadForm(formData = {}) {
  const errors = {};
  const countryCode = formData.countryCode || '+91';

  // Strict Name Validation
  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
  }

  // Strict Email Validation
  if (!validateRequired(formData.email)) {
    errors.email = 'Email address is required.';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  // Strict Phone Validation
  if (!validateRequired(formData.phone)) {
    errors.phone = 'Phone number is required.';
  } else {
    const cleanPhone = String(formData.phone).replace(/[\s\-\(\)]/g, '');
    if (!/^\d+$/.test(cleanPhone)) {
      errors.phone = 'Phone number can only contain numeric digits (0-9).';
    } else if (countryCode === '+91') {
      if (cleanPhone.length !== 10) {
        errors.phone = `Please enter exactly 10 digits (currently ${cleanPhone.length} digits).`;
      } else if (!/^[6-9]/.test(cleanPhone)) {
        errors.phone = 'Indian mobile number must start with 6, 7, 8, or 9.';
      }
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      errors.phone = 'International phone number must be between 6 and 15 digits.';
    }
  }

  if (!validateRequired(formData.course)) {
    errors.course = 'Please select a program of interest.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
