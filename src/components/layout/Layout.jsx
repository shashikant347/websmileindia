import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
// Background3D now renders only inside HeroSection (so it shows on the
// Home page's hero and nowhere else) instead of globally here.

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
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
      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;