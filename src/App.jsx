import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import SuccessStoryDetail from './components/SuccessStories/SuccessStoryDetail';
import MarketingSolutionsPage from './pages/MarketingSolutionsPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ContactPage from './pages/ContactPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BioPage from './pages/BioPage';
import ScrollToTop from './components/ScrollToTop';

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically synchronize direct path URLs (e.g. /skyphoria/bio or /bio) to HashRouter route
    const currentPath = window.location.pathname;
    if (currentPath.includes('/bio') && location.pathname !== '/bio') {
      navigate('/bio', { replace: true });
    }
  }, [location.pathname, navigate]);

  const isStandaloneBioPage = location.pathname.includes('/bio') || window.location.pathname.includes('/bio');

  return (
    <>
      <ScrollToTop />
      {!isStandaloneBioPage && <Header />}
      <div className="app-content" style={{ paddingTop: isStandaloneBioPage ? '0px' : '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/skyphoria/bio" element={<Navigate to="/bio" replace />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/success-story/:id" element={<SuccessStoryDetail/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<MarketingSolutionsPage />} />
          <Route path="/marketing-solutions" element={<Navigate to="/services" replace />} />
          <Route path="/about-us" element={<AboutPage />} />

          {/* ── Unified service page ── */}
          <Route path="/services/:slug" element={<ServicePage />} />

          {/* ── Redirects: old URLs → new /services/:slug URLs ── */}
          <Route path="/seo" element={<Navigate to="/services/seo" replace />} />
          <Route path="/SocialMediaMarket" element={<Navigate to="/services/social-media-marketing" replace />} />
          <Route path="/web-development" element={<Navigate to="/services/web-development" replace />} />
          <Route path="/content-creation" element={<Navigate to="/services/content-creation" replace />} />
          <Route path="/performanceMarket" element={<Navigate to="/services/performance-marketing" replace />} />
          <Route path="/prandlink" element={<Navigate to="/services/pr-and-link-building" replace />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {!isStandaloneBioPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

