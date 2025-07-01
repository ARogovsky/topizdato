import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import GoogleAdsProvider from './components/GoogleAdsProvider';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ForTeamsPage from './pages/ForTeamsPage';
import ForBusinessPage from './pages/ForBusinessPage';
import ForEducationPage from './pages/ForEducationPage';
import CreateTeamPage from './pages/CreateTeamPage';
import FindProjectsPage from './pages/FindProjectsPage';
import PublishProjectPage from './pages/PublishProjectPage';
import FindTeamPage from './pages/FindTeamPage';
import PricingPage from './pages/PricingPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import OfertaPage from './pages/OfertaPage';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <GoogleAdsProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/for-teams" element={<ForTeamsPage />} />
        <Route path="/for-business" element={<ForBusinessPage />} />
        <Route path="/for-education" element={<ForEducationPage />} />
        <Route path="/create-team" element={<CreateTeamPage />} />
        <Route path="/find-projects" element={<FindProjectsPage />} />
        <Route path="/publish-project" element={<PublishProjectPage />} />
        <Route path="/find-team" element={<FindTeamPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/terms" element={<PrivacyPolicyPage />} />
        <Route path="/oferta" element={<OfertaPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieConsent />
    </GoogleAdsProvider>
  );
}

export default App;