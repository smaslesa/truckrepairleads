// Google Analytics and Google Ads tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Google Ads Conversion Tracking
export const trackConversion = (conversionId: string = 'AW-17488562277/TfX-CJSG2o0bEOWQmZNB') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': conversionId
    });
    console.log('Google Ads conversion tracked:', conversionId);
  }
}

// Track phone call clicks
export const trackPhoneCall = () => {
  trackConversion(); // Uses default phone call lead conversion ID
}

// Track form submissions/leads
export const trackLeadSubmission = (source?: string) => {
  trackConversion(); // Uses default phone call lead conversion ID
  
  // Also track as custom event for analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: source || 'form_submission',
      value: 1
    });
  }
}

// Track custom events
export const trackEvent = (action: string, category: string = 'engagement', label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
}
