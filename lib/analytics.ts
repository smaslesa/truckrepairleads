// Unified Analytics Library
// Tracks events to both Vercel Analytics and Google Analytics
// Handles UTM parameters and source attribution

import { track as vercelTrack } from '@vercel/analytics';

// Types
export interface TrackingData {
  [key: string]: string | number | boolean | null | undefined;
}

export interface SourceAttribution {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  referrer?: string | null;
  landing_page?: string | null;
  first_touch?: string | null;
  timestamp?: string | null;
}

// UTM Parameter extraction and storage
export const captureSourceAttribution = (): SourceAttribution => {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  const referrer = document.referrer;
  const landingPage = window.location.pathname;

  const attribution: SourceAttribution = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
    referrer: referrer || null,
    landing_page: landingPage,
    timestamp: new Date().toISOString(),
  };

  // Determine traffic source if no UTM parameters
  if (!attribution.utm_source) {
    if (referrer) {
      if (referrer.includes('google.com')) {
        attribution.utm_source = 'google_organic';
        attribution.utm_medium = 'organic';
      } else if (referrer.includes('bing.com')) {
        attribution.utm_source = 'bing_organic';
        attribution.utm_medium = 'organic';
      } else if (referrer.includes('facebook.com')) {
        attribution.utm_source = 'facebook';
        attribution.utm_medium = 'social';
      } else if (referrer.includes('linkedin.com')) {
        attribution.utm_source = 'linkedin';
        attribution.utm_medium = 'social';
      } else {
        attribution.utm_source = 'referral';
        attribution.utm_medium = 'referral';
      }
    } else {
      attribution.utm_source = 'direct';
      attribution.utm_medium = 'none';
    }
  }

  // Store in sessionStorage for attribution across pages
  try {
    const existing = sessionStorage.getItem('attribution');
    if (!existing) {
      // First touch attribution
      sessionStorage.setItem('attribution', JSON.stringify(attribution));
      sessionStorage.setItem('first_touch', JSON.stringify(attribution));
    }
    // Always update last touch
    sessionStorage.setItem('last_touch', JSON.stringify(attribution));
  } catch (e) {
    console.warn('Could not save attribution to sessionStorage', e);
  }

  return attribution;
};

// Get stored attribution
export const getAttribution = (): SourceAttribution => {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem('last_touch');
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.warn('Could not retrieve attribution from sessionStorage', e);
    return {};
  }
};

// Get first touch attribution
export const getFirstTouchAttribution = (): SourceAttribution => {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem('first_touch');
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.warn('Could not retrieve first touch attribution', e);
    return {};
  }
};

// Track event to both Vercel Analytics and Google Analytics
export const track = (
  eventName: string,
  data?: TrackingData,
  includeAttribution = true
): void => {
  if (typeof window === 'undefined') return;

  // Get attribution data
  const attribution = includeAttribution ? getAttribution() : {};

  // Merge event data with attribution
  const eventData = {
    ...data,
    ...attribution,
  };

  // Track to Vercel Analytics
  try {
    vercelTrack(eventName, eventData);
  } catch (e) {
    console.warn('Vercel Analytics tracking failed', e);
  }

  // Track to Google Analytics
  if (window.gtag) {
    try {
      window.gtag('event', eventName, {
        ...eventData,
        event_category: data?.category || 'engagement',
        event_label: data?.label || eventName,
      });
    } catch (e) {
      console.warn('Google Analytics tracking failed', e);
    }
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event Tracked:', eventName, eventData);
  }
};

// Specific tracking functions for common events
export const trackPageView = (page: string, title?: string): void => {
  track('page_view', {
    page_path: page,
    page_title: title || document.title,
  });
};

export const trackCTAClick = (
  buttonText: string,
  location: string,
  variant?: string
): void => {
  track('cta_clicked', {
    button_text: buttonText,
    location,
    variant: variant || 'primary',
    category: 'conversion',
  });
};

export const trackPhoneClick = (location: string): void => {
  track('phone_clicked', {
    location,
    phone_number: '702-900-0265',
    category: 'conversion',
  });

  // Note: Google Ads phone conversion is configured globally in layout.tsx
  // This automatically replaces phone numbers with Google forwarding numbers
  // and tracks actual call completions (not just clicks)
};

export const trackFormSubmission = (
  formType: string,
  formLocation: string,
  success: boolean = true
): void => {
  const firstTouch = getFirstTouchAttribution();

  track('form_submitted', {
    form_type: formType,
    form_location: formLocation,
    success,
    category: 'conversion',
    // Include first touch for better attribution
    first_touch_source: firstTouch.utm_source,
    first_touch_medium: firstTouch.utm_medium,
    first_touch_campaign: firstTouch.utm_campaign,
  });

  // Track Google Ads conversion on success
  if (success && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17488562277/TfX-CJSG2o0bEOWQmZNB',
    });
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: formType,
    });
  }
};

export const trackModalOpen = (modalType: string, trigger: string): void => {
  track('modal_opened', {
    modal_type: modalType,
    trigger,
    category: 'engagement',
  });
};

export const trackModalClose = (modalType: string, timeOpen?: number): void => {
  track('modal_closed', {
    modal_type: modalType,
    time_open_seconds: timeOpen ? Math.round(timeOpen / 1000) : null,
    category: 'engagement',
  });
};

export const trackToolUsage = (
  toolName: string,
  action: string,
  success: boolean = true
): void => {
  track('tool_used', {
    tool_name: toolName,
    action,
    success,
    category: 'engagement',
  });
};

export const trackNavigation = (
  destination: string,
  navigationMethod: string
): void => {
  track('navigation', {
    destination,
    method: navigationMethod,
    category: 'navigation',
  });
};

export const trackVideoInteraction = (
  action: 'play' | 'pause' | 'complete',
  videoName?: string,
  progress?: number
): void => {
  track('video_interaction', {
    action,
    video_name: videoName,
    progress_percent: progress,
    category: 'engagement',
  });
};

export const trackScrollDepth = (depth: number, page: string): void => {
  track('scroll_depth', {
    depth_percent: depth,
    page,
    category: 'engagement',
  });
};

export const trackResourceDownload = (
  resourceType: string,
  resourceName: string
): void => {
  track('resource_download', {
    resource_type: resourceType,
    resource_name: resourceName,
    category: 'engagement',
  });
};

export const trackOutboundLink = (url: string, linkText?: string): void => {
  track('outbound_link_click', {
    destination_url: url,
    link_text: linkText,
    category: 'engagement',
  });
};

export const trackDemoPageView = (templateType: string): void => {
  track('demo_page_view', {
    template_type: templateType,
    category: 'engagement',
  });
};

export const trackSearch = (searchTerm: string, resultsCount?: number): void => {
  track('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    category: 'engagement',
  });
};

// Initialize attribution tracking on page load
export const initializeTracking = (): void => {
  if (typeof window === 'undefined') return;

  // Capture attribution on page load
  captureSourceAttribution();

  // Track initial page view
  trackPageView(window.location.pathname, document.title);

  // Track scroll depth at 25%, 50%, 75%, 100%
  const scrollDepths = [25, 50, 75, 100];
  const trackedDepths = new Set<number>();

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach((depth) => {
      if (scrollPercent >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);
        trackScrollDepth(depth, window.location.pathname);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Track time on page
  const startTime = Date.now();
  const trackTimeOnPage = () => {
    const timeOnPage = Date.now() - startTime;
    track('time_on_page', {
      page: window.location.pathname,
      duration_seconds: Math.round(timeOnPage / 1000),
      category: 'engagement',
    });
  };

  // Track before user leaves
  window.addEventListener('beforeunload', trackTimeOnPage);
};

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
