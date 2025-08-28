import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();

  useEffect(() => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      trackPageView(document.title, window.location.href);
    }
  }, [location]);
};