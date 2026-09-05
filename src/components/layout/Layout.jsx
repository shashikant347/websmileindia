import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
// import ParticleBackground from '../ui/ParticleBackground';
import Background3D from '../ui/Background3D';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('websmile-theme');
    return savedTheme || 'dark';
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('websmile-theme', theme);
  }, [theme]);

  // Lock scroll while the preloader is visible
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] relative">
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {/* <ParticleBackground /> */}
      {theme === 'dark' && <Background3D />}
      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;