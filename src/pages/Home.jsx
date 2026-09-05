import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ClientsSection from '../components/sections/ClientsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ScrollReveal from '../components/ui/ScrollReveal';
import { contact } from '../data/siteData';

// CTA Banner Component
const CTABanner = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-950/60 to-cyan-900/20" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5" />
    <div className="absolute top-0 bottom-0 left-0 right-0 border-y border-[var(--border)]" />

    <div className="container-custom relative z-10">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to{' '}
            <span className="gradient-text">Transform</span>{' '}
            Your Business Online?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Get a free consultation and quote today. Our experts are ready to help you build your perfect digital presence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-10 py-4">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a href={`tel:${contact.phone}`} className="btn-outline text-base px-10 py-4">
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection limit={6} />
      <ClientsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default Home;
