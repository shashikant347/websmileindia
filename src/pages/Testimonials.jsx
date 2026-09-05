import PageHero from '../components/ui/PageHero';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Testimonials = () => (
  <>
    <PageHero
      title="Client"
      highlight="Testimonials"
      subtitle="Real stories from real clients who've experienced our commitment to excellence."
      breadcrumb="Testimonials"
    />
    <TestimonialsSection sectionClassName="section-padding-tight" />
  </>
);

export default Testimonials;