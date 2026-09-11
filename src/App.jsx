import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Clients from './pages/Clients';
import Testimonials from './pages/Testimonials';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import BankDetails from './pages/BankDetails';
import PayOnline from './pages/PayOnline';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import Sitemap from './pages/Sitemap';
import CaseStudies from './pages/CaseStudies';
import NotFound from './pages/NotFound';
import CaseStudyDetail from './pages/CaseStudyDetail';
import './App.css'

// Service Pages
import {
  WebDesign, WebDevelopment, DigitalMarketing, AppDevelopment,
  SoftwareDevelopment, GraphicDesigning, DomainHosting, SupportMaintenance
} from './pages/services/ServicePages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Layout>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

          {/* Service Pages */}
          <Route path="/services/website-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/services/domain-hosting" element={<DomainHosting />} />
          <Route path="/services/support-maintenance" element={<SupportMaintenance />} />

          {/* Resource Pages */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/pay-online" element={<PayOnline />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
