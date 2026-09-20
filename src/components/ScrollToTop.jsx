import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent the browser from automatically restoring the scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Temporarily disable smooth scrolling
    const originalHtmlBehavior = document.documentElement.style.scrollBehavior;
    const originalBodyBehavior = document.body.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';

    // Force scroll to top on all possible scrolling containers
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const rootEl = document.getElementById('root');
    if (rootEl) {
      rootEl.scrollTop = 0;
    }

    // Restore smooth scrolling after a short delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalHtmlBehavior;
      document.body.style.scrollBehavior = originalBodyBehavior;
    }, 50);
  }, [pathname]);

  return null;
}
