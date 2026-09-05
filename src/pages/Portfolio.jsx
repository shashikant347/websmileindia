import PageHero from '../components/ui/PageHero';
import PortfolioSection from '../components/sections/PortfolioSection';
import { portfolio } from '../data/siteData';

const Portfolio = () => (
  <>
    <PageHero
      title="Our"
      highlight="Portfolio"
      subtitle="Explore our work — cutting-edge websites and applications built for businesses across India."
      breadcrumb="Portfolio"
    />
    <PortfolioSection limit={portfolio.length} sectionClassName="section-padding-tight" />
  </>
);

export default Portfolio;