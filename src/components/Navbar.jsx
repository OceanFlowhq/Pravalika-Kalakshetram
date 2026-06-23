// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useScrolled } from '../hooks/useScrolled';
import { NAV_LINKS } from '../data/siteData';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          background: 'rgba(248, 240, 223, 0.96)',
          backdropFilter: 'blur(16px) saturate(200%)',
          WebkitBackdropFilter: 'blur(16px) saturate(200%)',
          borderBottom: '1px solid rgba(212,160,23,0.2)',
          boxShadow: '0 2px 24px rgba(212,160,23,0.08)',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '68px' : '80px',
          transition: 'height 0.4s ease',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: 'auto', marginLeft: '20px', flexShrink: 0, height: '100%', padding: '0.4rem 0' }}>
            <img src={logoImg} alt="Pravalika Kuchipudi Kalakshetram Logo" className="nav-logo" style={{ width: 'auto', objectFit: 'contain', display: 'block', mixBlendMode: 'multiply', transform: 'scale(2.6)', transformOrigin: 'left center' }} />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isActive ? 'var(--gold)' : 'var(--dark)',
                  position: 'relative',
                  paddingBottom: '2px',
                  transition: 'color 0.3s ease',
                })}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span style={{
                      position: 'absolute',
                      bottom: 0, left: 0,
                      height: '1px',
                      background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                      width: isActive ? '100%' : '0%',
                      transition: 'width 0.3s ease',
                    }} />
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-luxury" style={{ padding: '0.6rem 1.5rem', fontSize: '0.65rem' }}>
              <span>Get In Touch</span>
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            style={{
              display: 'none',
              background: 'rgba(212,160,23,0.08)',
              border: '1px solid rgba(212,160,23,0.25)',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'var(--gold)',
              fontSize: '1.6rem',
              padding: '0.45rem',
              marginLeft: '1rem',
              transition: 'all 0.3s ease',
            }}
            className="show-mobile hamburger-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: '80%',
              maxWidth: '360px',
              background: 'rgba(248, 240, 223, 0.98)',
              backdropFilter: 'blur(24px)',
              zIndex: 1001,
              padding: '6rem 2.5rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.1)',
            }}
          >
            <button
              onClick={toggleMenu}
              style={{
                position: 'absolute',
                top: '1.5rem', right: '1.5rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--dark)',
              }}
            >
              <HiX />
            </button>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--secondary)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>Navigation</p>
              <div style={{
                width: '40px', height: '1px',
                background: 'linear-gradient(135deg, #D4A017, #E8C547)',
              }} />
            </div>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    display: 'block',
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                    color: isActive ? 'var(--gold)' : 'var(--dark)',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(212,160,23,0.1)',
                    transition: 'color 0.3s ease',
                  })}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: '2rem' }}
            >
              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(212,160,23,0.1), rgba(212,160,23,0.4))' }} />
                <span style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(212,160,23,0.6)', textTransform: 'uppercase' }}>Connect</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, rgba(212,160,23,0.1), rgba(212,160,23,0.4))' }} />
              </div>

              {/* Primary CTA */}
              <Link
                to="/contact"
                className="btn-luxury"
                style={{
                  width: '100%', justifyContent: 'center',
                  padding: '1rem 1.5rem',
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  borderRadius: '2px',
                  boxShadow: '0 4px 20px rgba(212,160,23,0.25)',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>GET IN TOUCH</span>
              </Link>

              {/* Tagline */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontStyle: 'italic',
                color: 'rgba(107,107,107,0.7)',
                textAlign: 'center',
                marginTop: '0.75rem',
                letterSpacing: '0.02em',
              }}>
                Where Tradition Meets Expression
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.4)',
              zIndex: 1000,
              backdropFilter: 'blur(4px)',
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        .nav-logo { max-height: 56px; }
        .hamburger-btn:active { transform: scale(0.95); }
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; align-items: center; justify-content: center; }
          .nav-logo { max-height: 44px; }
        }
      `}</style>
    </>
  );
}
