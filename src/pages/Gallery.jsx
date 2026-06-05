// src/pages/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import FloatingParticles from '../components/FloatingParticles';

const CATEGORIES = ['All', 'Performances', 'Practice Sessions', 'Events', 'Workshops'];

// Gallery items using the uploaded images as placeholders
const GALLERY_ITEMS = [
  { id: 1, category: 'Performances', src: '/dancer-hero.jpg', alt: 'Kuchipudi Solo Performance', size: 'tall' },
  { id: 2, category: 'Performances', src: '/performance1.jpg', alt: 'Classical Stage Presentation', size: 'normal' },
  { id: 3, category: 'Practice Sessions', src: '/performance2.jpg', alt: 'Practice Rehearsal', size: 'normal' },
  { id: 4, category: 'Events', src: '/dancer2.jpg', alt: 'Annual Cultural Event', size: 'wide' },
  { id: 5, category: 'Workshops', src: '/dancer3.jpg', alt: 'Classical Dance Workshop', size: 'normal' },
  { id: 6, category: 'Performances', src: '/dancer4.jpg', alt: 'Arangetram Performance', size: 'tall' },
  { id: 7, category: 'Events', src: '/dancer-hero.jpg', alt: 'Festival Performance', size: 'normal' },
  { id: 8, category: 'Practice Sessions', src: '/performance1.jpg', alt: 'Training Session', size: 'normal' },
  { id: 9, category: 'Workshops', src: '/performance2.jpg', alt: 'Abhinaya Workshop', size: 'wide' },
  { id: 10, category: 'Performances', src: '/dancer2.jpg', alt: 'Grand Performance', size: 'normal' },
  { id: 11, category: 'Events', src: '/dancer3.jpg', alt: 'Cultural Festival', size: 'normal' },
  { id: 12, category: 'Performances', src: '/dancer4.jpg', alt: 'Stage Choreography', size: 'tall' },
];

// Gold gradient placeholder by category
const CAT_COLORS = {
  'Performances':       'linear-gradient(135deg, #1A1A1A 0%, #2D1A00 100%)',
  'Practice Sessions':  'linear-gradient(135deg, #1A1A1A 0%, #0D1A2D 100%)',
  'Events':             'linear-gradient(135deg, #2D1A00 0%, #1A1A1A 100%)',
  'Workshops':          'linear-gradient(135deg, #0D1A2D 0%, #1A1A1A 100%)',
};
const CAT_ICONS = {
  'Performances': '🎭',
  'Practice Sessions': '🪔',
  'Events': '⭐',
  'Workshops': '📿',
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '55vh',
        background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EFE6 50%, #FAF7F2 100%)',
        display: 'flex', alignItems: 'center',
        paddingTop: '110px', paddingBottom: '4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <FloatingParticles count={10} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}
          >✦ Visual Archive ✦</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.15, maxWidth: '700px', marginBottom: '1.5rem' }}
          >
            A Gallery of <em>Living Art</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }}
          />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'var(--secondary)', maxWidth: '580px' }}
          >
            Every photograph captures a moment of grace — a glimpse into the devotion, discipline, and divine beauty that defines Kuchipudi at Pravalika Kalakshetram.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '5rem 0 7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Category filters */}
          <div style={{
            display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
            justifyContent: 'center', marginBottom: '3rem',
          }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.5rem',
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: activeCategory === cat ? '1px solid var(--gold)' : '1px solid rgba(212,160,23,0.2)',
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #D4A017, #E8C547)'
                    : 'transparent',
                  color: activeCategory === cat ? '#fff' : 'var(--secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            className="masonry-grid"
            layout
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="masonry-item"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => openLightbox(i)}
                  style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', display: 'block' }}
                  whileHover="hover"
                >
                  <div style={{
                    background: CAT_COLORS[item.category] || '#1A1A1A',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        width: '100%',
                        height: item.size === 'tall' ? '380px' : item.size === 'wide' ? '220px' : '280px',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                      }}
                      onError={e => {
                        e.target.style.display = 'none';
                        const h = item.size === 'tall' ? '380px' : item.size === 'wide' ? '220px' : '280px';
                        e.target.parentElement.style.height = h;
                        e.target.parentElement.style.display = 'flex';
                        e.target.parentElement.style.alignItems = 'center';
                        e.target.parentElement.style.justifyContent = 'center';
                        e.target.parentElement.style.flexDirection = 'column';
                        e.target.parentElement.style.gap = '0.5rem';
                        e.target.parentElement.innerHTML += `
                          <div style="font-size:3rem">${CAT_ICONS[item.category] || '🎭'}</div>
                          <p style="font-family:var(--font-cinzel);color:#D4A017;font-size:0.6rem;letter-spacing:0.15em;text-align:center;">${item.category}</p>
                        `;
                      }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                    {/* Hover overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(212,160,23,0.4) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      display: 'flex', alignItems: 'flex-end',
                      padding: '1.25rem',
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                    >
                      <div>
                        <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                          {item.category}
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#fff', marginTop: '0.25rem' }}>{item.alt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.96)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                background: 'rgba(255,255,255,0.1)',
                border: 'none', cursor: 'pointer',
                color: '#fff', fontSize: '1.5rem',
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <FaTimes />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: 'absolute', left: '1rem', top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(212,160,23,0.2)',
                border: '1px solid rgba(212,160,23,0.4)',
                cursor: 'pointer', color: '#D4A017',
                width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: 'absolute', right: '1rem', top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(212,160,23,0.2)',
                border: '1px solid rgba(212,160,23,0.4)',
                cursor: 'pointer', color: '#D4A017',
                width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}
            >
              <FaChevronRight />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '900px', maxHeight: '80vh', position: 'relative' }}
            >
              <img
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
                style={{
                  maxWidth: '100%', maxHeight: '80vh',
                  objectFit: 'contain',
                  display: 'block',
                  border: '1px solid rgba(212,160,23,0.2)',
                }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.cssText = 'width:400px;height:400px;display:flex;align-items:center;justify-content:center;background:#1A1A1A;';
                  e.target.parentElement.innerHTML += `<div style="font-size:6rem;text-align:center;">🎭</div>`;
                }}
              />
              <div style={{
                position: 'absolute', bottom: '-3rem', left: 0, right: 0,
                textAlign: 'center',
              }}>
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', color: '#D4A017', letterSpacing: '0.15em' }}>
                  {filtered[lightboxIndex]?.category} — {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
