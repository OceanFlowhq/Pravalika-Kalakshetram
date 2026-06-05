// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SITE, NAV_LINKS } from '../data/siteData';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 50%, #1A1A1A 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative top border */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #D4A017, #E8C547, #D4A017, transparent)',
      }} />

      {/* Background ornament */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '5rem 2rem 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.5rem', width: '100%' }}>
              <img src="src/assets/logo.png" alt="Pravalika Kuchipudi Kalakshetram Logo" style={{ height: '130px', width: '320px', objectFit: 'contain', objectPosition: 'left center', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '1.5rem',
            }}>
              Preserving the sacred art of Kuchipudi — where ancient tradition meets the living grace of classical expression.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaFacebookF />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
                  width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(212,160,23,0.3)',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(212,160,23,0.2)';
                    e.currentTarget.style.color = '#D4A017';
                    e.currentTarget.style.borderColor = '#D4A017';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    e.currentTarget.style.borderColor = 'rgba(212,160,23,0.3)';
                  }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4A017',
              marginBottom: '1.5rem',
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span style={{ width: '20px', height: '1px', background: '#D4A017', display: 'inline-block' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4A017',
              marginBottom: '1.5rem',
            }}>Programs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Beginner Program', 'Intermediate Program', 'Advanced Program', 'Arangetram Preparation'].map((c) => (
                <li key={c}>
                  <Link to="/courses" style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    <span style={{ width: '20px', height: '1px', background: '#D4A017', display: 'inline-block' }} />
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#D4A017',
              marginBottom: '1.5rem',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href={`tel:${SITE.phone}`} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                textDecoration: 'none', color: 'rgba(255,255,255,0.55)',
                fontSize: '0.85rem', transition: 'color 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                <FaPhone style={{ marginTop: '3px', color: '#D4A017', flexShrink: 0 }} />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                textDecoration: 'none', color: 'rgba(255,255,255,0.55)',
                fontSize: '0.85rem', transition: 'color 0.3s ease',
                wordBreak: 'break-all',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#D4A017'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                <FaEnvelope style={{ marginTop: '3px', color: '#D4A017', flexShrink: 0 }} />
                {SITE.email}
              </a>
              <div style={{
                display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.85rem', lineHeight: 1.7,
              }}>
                <FaMapMarkerAlt style={{ marginTop: '3px', color: '#D4A017', flexShrink: 0 }} />
                <span>
                  Flat No 68, Genious Elite,<br />
                  Raidurg, Gachibowli,<br />
                  Telangana — 500032
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(212,160,23,0.15)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.35)',
          }}>
            {SITE.copyright}
          </p>
          <p style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: 'rgba(212,160,23,0.5)',
          }}>
            WHERE TRADITION MEETS EXPRESSION
          </p>
        </div>
      </div>
    </footer>
  );
}
