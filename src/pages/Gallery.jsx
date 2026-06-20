// src/pages/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import FloatingParticles from '../components/FloatingParticles';

// Import all 17 images from assets
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpeg';
import img16 from '../assets/img16.jpeg';
import img17 from '../assets/img17.jpeg';

// Gallery items using the newly uploaded images
const GALLERY_ITEMS = [
  { id: 1, src: img1, alt: 'Kuchipudi Solo Performance' },
  { id: 2, src: img2, alt: 'Classical Stage Presentation' },
  { id: 3, src: img3, alt: 'Practice Rehearsal' },
  { id: 4, src: img4, alt: 'Annual Cultural Event' },
  { id: 5, src: img5, alt: 'Classical Dance Workshop' },
  { id: 6, src: img6, alt: 'Arangetram Performance' },
  { id: 7, src: img7, alt: 'Festival Performance' },
  { id: 8, src: img8, alt: 'Practice Session' },
  { id: 9, src: img9, alt: 'Abhinaya Workshop' },
  { id: 10, src: img10, alt: 'Grand Performance' },
  { id: 11, src: img11, alt: 'Cultural Festival' },
  { id: 12, src: img12, alt: 'Stage Choreography' },
  { id: 13, src: img13, alt: 'Technical Practice' },
  { id: 14, src: img14, alt: 'Masterclass' },
  { id: 15, src: img15, alt: 'Annual Meet' },
  { id: 16, src: img16, alt: 'Solo Act' },
  { id: 17, src: img17, alt: 'Classical Rendition' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };
  const prev = () => setLightboxIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const next = () => setLightboxIndex((i) => (i + 1) % GALLERY_ITEMS.length);

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
          
          {/* Custom Masonry CSS */}
          <style>{`
            .luxury-masonry {
              column-count: 3;
              column-gap: 1.5rem;
              width: 100%;
            }
            .luxury-masonry-item {
              break-inside: avoid;
              margin-bottom: 1.5rem;
              position: relative;
              overflow: hidden;
              display: block;
              border-radius: 2px;
            }
            @media (max-width: 1024px) {
              .luxury-masonry { column-count: 2; column-gap: 1rem; }
              .luxury-masonry-item { margin-bottom: 1rem; }
            }
            @media (max-width: 640px) {
              .luxury-masonry { column-count: 1; column-gap: 1rem; }
              .luxury-masonry-item { margin-bottom: 1rem; }
            }
          `}</style>

          {/* Masonry grid */}
          <motion.div
            className="luxury-masonry"
            layout
          >
            <AnimatePresence>
              {GALLERY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="luxury-masonry-item"
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
                    background: '#1A1A1A',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                      onError={e => {
                        e.target.style.display = 'none';
                      }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                    {/* Hover overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(26,26,26,0.5) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      display: 'flex', alignItems: 'flex-end',
                      padding: '1.5rem',
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                    >
                      <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#fff', letterSpacing: '0.05em' }}>{item.alt}</p>
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
                src={GALLERY_ITEMS[lightboxIndex]?.src}
                alt={GALLERY_ITEMS[lightboxIndex]?.alt}
                style={{
                  maxWidth: '100%', maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block',
                  border: '1px solid rgba(212,160,23,0.15)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                }}
                onError={e => {
                  e.target.style.display = 'none';
                }}
              />
              <div style={{
                position: 'absolute', bottom: '-2.5rem', left: 0, right: 0,
                textAlign: 'center',
              }}>
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
