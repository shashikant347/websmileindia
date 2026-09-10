import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { navLinks } from '../../data/siteData';

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileOpenSection(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleDropdown = useCallback((label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  }, []);

  const toggleMobileSection = useCallback((label) => {
    setMobileOpenSection((prev) => (prev === label ? null : label));
  }, []);

  const isPathActive = (path) => location.pathname === path;

  return (
    <div ref={navRef} className={`sticky top-0 z-50 navbar-flat ${scrolled ? 'navbar-flat-scrolled' : ''}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Web Smile India home">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(145deg, var(--accent-teal), var(--accent-purple))' }}
            >
              <img src="/logo.png" alt="Web Smile India" className="w-8 h-8 object-contain" />
            </div>
            <span className="text-lg font-black tracking-tight whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
              Web <span className="gradient-text-blue-cyan">Smile</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const isDropdownOpen = activeDropdown === link.label;
              const isLinkActive = link.path ? isPathActive(link.path) : false;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.children && setActiveDropdown(null)}
                >
                  {link.children ? (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.label)}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      className={`nav-link-flat flex items-center gap-1 ${isDropdownOpen ? 'nav-link-flat-active' : ''}`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <NavLink to={link.path} className={`nav-link-flat ${isLinkActive ? 'nav-link-flat-active' : ''}`}>
                      {link.label}
                    </NavLink>
                  )}

                  {link.children && isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-4 z-50">
                      <div role="menu" className="nav-dropdown-flat py-2 rounded-2xl animate-in fade-in duration-200">
                        {link.children.map((child, idx) => {
                          const childActive = isPathActive(child.path);
                          return (
                            <NavLink
  key={child.label}
  to={child.path}
  role="menuitem"
  className={`nav-dropdown-item ${childActive ? 'nav-dropdown-item-active' : ''}`}
>
  <span
    className="nav-dropdown-dot"
    style={{ background: idx % 2 === 0 ? 'var(--accent-teal-soft)' : 'var(--accent-marigold-soft)' }}
  />
  {child.label}
</NavLink>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA + Toggle + Mobile Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={onToggleTheme}
              className="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/contact" className="hidden md:inline-flex nav-cta-gradient">
              Get Started
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center neu-track"
              style={{ color: 'var(--nav-muted)' }}
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mb-4 nav-dropdown-flat rounded-2xl max-h-[75vh] overflow-y-auto">
            <div className="p-3 space-y-1">
              {navLinks.map((link) => {
                const isSectionOpen = mobileOpenSection === link.label;
                const isLinkActive = link.path ? isPathActive(link.path) : false;

                return (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(link.label)}
                          aria-expanded={isSectionOpen}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-xl transition-colors"
                          style={{ color: 'var(--nav-text)' }}
                        >
                          {link.label}
                          <ChevronDown size={16} className={`transition-transform duration-200 ${isSectionOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isSectionOpen && (
                          <div className="pl-2 border-l ml-4 mt-1 space-y-0.5" style={{ borderColor: 'var(--border)' }}>
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.path}
                                className="block px-4 py-2.5 text-sm rounded-lg transition-colors"
                                style={{ color: 'var(--nav-muted)' }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
  to={link.path}
  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
    isLinkActive ? 'text-[var(--accent-marigold)] bg-[var(--accent-cyan)]/10' : ''
  }`}
  style={{ color: isLinkActive ? undefined : 'var(--nav-text)' }}
>
  {link.label}
</NavLink>
                    )}
                  </div>
                );
              })}
              <div className="pt-3 px-1">
                <Link to="/contact" className="nav-cta-gradient w-full justify-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;