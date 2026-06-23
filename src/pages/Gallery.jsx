// src/pages/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FloatingParticles from '../components/FloatingParticles';
import {
  MandalaSVG, LotusSVG, CornerOrnamentSVG, OrnamentalDivider,
  HeritagePatternBg, DancerSilhouetteSVG, TempleSVG, PeacockFeatherSVG,
} from '../components/HeritageDecor';

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

  const openLightbox = (index) => { setLightboxIndex(index); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightboxIndex(null); document.body.style.overflow = ''; };
  const prev = () => setLightboxIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  const next = () => setLightboxIndex((i) => (i + 1) % GALLERY_ITEMS.length);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '55vh',
        display: 'flex', alignItems: 'center',
        paddingTop: '110px', paddingBottom: '4rem',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 55%, #1C1408 100%)',
      }}>
        <HeritagePatternBg color="#D4A017" opacity={0.03} />
        <FloatingParticles count={10} color="rgba(212,160,23," />

        {/* Large mandala — center right, spinning */}
        <div style={{ position: 'absolute', top: '50%', right: '-80px', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={480} opacity={0.12} className="mandala-spin" />
        </div>
        {/* Secondary mandala top-left */}
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={260} opacity={0.07} className="mandala-spin-reverse" />
        </div>

        {/* Clustered peacock feathers — right side */}
        <div style={{ position: 'absolute', right: '6%', top: '5%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={55} height={200} opacity={0.22} />
        </div>
        <div style={{ position: 'absolute', right: '12%', top: '10%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={42} height={160} opacity={0.16} />
        </div>
        <div style={{ position: 'absolute', right: '2%', top: '20%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={36} height={130} opacity={0.12} />
        </div>

        {/* Temple silhouettes on sides */}
        <div style={{ position: 'absolute', left: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.07 }}>
          <TempleSVG width={180} height={240} />
        </div>

        {/* Corner ornaments */}
        <CornerOrnamentSVG size={82} opacity={0.2} style={{ position: 'absolute', top: '80px', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={82} opacity={0.2} flip style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

        {/* Gold horizontal rule above content */}
        <div style={{ position: 'absolute', top: '80px', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.2) 40%, rgba(212,160,23,0.2) 60%, transparent)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <LotusSVG size={22} color="#D4A017" opacity={0.8} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>✦ Visual Archive ✦</p>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, maxWidth: '700px', marginBottom: '1.5rem' }}
          >
            A Gallery of <em style={{
              background: 'linear-gradient(135deg, #D4A017, #E8C547, #B8860B)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic',
            }}>Living Art</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', maxWidth: '540px' }}
          >
            Every photograph captures a moment of grace — a glimpse into the devotion, discipline, and divine beauty that defines Kuchipudi at Pravalika Kalakshetram.
          </motion.p>
        </div>

        {/* Bottom gold strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.4) 30%, rgba(212,160,23,0.6) 50%, rgba(212,160,23,0.4) 70%, transparent)' }} />
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────────────────── */}
      <section className="heritage-papyrus" style={{ padding: '5rem 0 7rem', position: 'relative', overflow: 'hidden' }}>
        <HeritagePatternBg color="#D4A017" opacity={0.03} />

        {/* Corner ornaments for the gallery section */}
        <CornerOrnamentSVG size={90} opacity={0.1} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={90} opacity={0.1} flip style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={90} opacity={0.1} style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg)' }} />
        <CornerOrnamentSVG size={90} opacity={0.1} flip style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg) scaleX(-1)' }} />

        {/* Side temple silhouettes */}
        <div style={{ position: 'absolute', left: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.05 }}>
          <TempleSVG width={160} height={210} />
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.04, transform: 'scaleX(-1)' }}>
          <TempleSVG width={140} height={180} />
        </div>

        {/* Large background mandala — very faint */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={700} opacity={0.025} className="mandala-spin" />
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          {/* Gallery eyebrow */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <OrnamentalDivider style={{ maxWidth: '500px', margin: '0 auto' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', margin: '1rem 0' }}>
              <LotusSVG size={20} opacity={0.6} />
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>
                {GALLERY_ITEMS.length} Curated Photographs
              </p>
              <LotusSVG size={20} opacity={0.6} />
            </div>
            <OrnamentalDivider style={{ maxWidth: '500px', margin: '0 auto' }} />
          </div>

          {/* Masonry CSS */}
          <style>{`
            .luxury-masonry { column-count: 3; column-gap: 1.25rem; width: 100%; }
            .luxury-masonry-item { break-inside: avoid; margin-bottom: 1.25rem; position: relative; overflow: hidden; display: block; }
            @media (max-width: 1024px) { .luxury-masonry { column-count: 2; column-gap: 1rem; } .luxury-masonry-item { margin-bottom: 1rem; } }
            @media (max-width: 640px) { .luxury-masonry { column-count: 1; } }
          `}</style>

          <motion.div className="luxury-masonry" layout>
            <AnimatePresence>
              {GALLERY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="luxury-masonry-item"
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => openLightbox(i)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Heritage framing borders on each image */}
                  <div style={{
                    position: 'relative',
                    background: '#1A1A1A',
                    overflow: 'hidden',
                    border: '1px solid rgba(212,160,23,0.12)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.45)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,160,23,0.12)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {/* Gold corner accents */}
                    <div style={{ position: 'absolute', top: '6px', left: '6px', width: '14px', height: '14px', borderTop: '1.5px solid rgba(212,160,23,0.5)', borderLeft: '1.5px solid rgba(212,160,23,0.5)', zIndex: 2, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', top: '6px', right: '6px', width: '14px', height: '14px', borderTop: '1.5px solid rgba(212,160,23,0.5)', borderRight: '1.5px solid rgba(212,160,23,0.5)', zIndex: 2, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '6px', left: '6px', width: '14px', height: '14px', borderBottom: '1.5px solid rgba(212,160,23,0.5)', borderLeft: '1.5px solid rgba(212,160,23,0.5)', zIndex: 2, pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '14px', height: '14px', borderBottom: '1.5px solid rgba(212,160,23,0.5)', borderRight: '1.5px solid rgba(212,160,23,0.5)', zIndex: 2, pointerEvents: 'none' }} />

                    <img
                      src={item.src} alt={item.alt}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                      onError={e => { e.target.style.display = 'none'; }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />

                    {/* Hover overlay with label */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,26,26,0.65) 0%, transparent 55%)', opacity: 0, transition: 'opacity 0.4s ease', display: 'flex', alignItems: 'flex-end', padding: '1.2rem' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0'}
                    >
                      <div>
                        <div style={{ width: '20px', height: '1px', background: 'rgba(212,160,23,0.7)', marginBottom: '0.4rem' }} />
                        <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em' }}>{item.alt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.97)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
            onClick={closeLightbox}
          >
            {/* Mandala background in lightbox */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
              <MandalaSVG size={500} opacity={0.04} className="mandala-spin" />
            </div>

            <button onClick={closeLightbox} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.3)', cursor: 'pointer', color: '#D4A017', fontSize: '1.2rem', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaTimes />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.35)', cursor: 'pointer', color: '#D4A017', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
              <FaChevronLeft />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.35)', cursor: 'pointer', color: '#D4A017', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
              <FaChevronRight />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '900px', maxHeight: '80vh', position: 'relative' }}
            >
              {/* Gold corner accents on lightbox */}
              <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '20px', height: '20px', borderTop: '2px solid rgba(212,160,23,0.6)', borderLeft: '2px solid rgba(212,160,23,0.6)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '20px', height: '20px', borderTop: '2px solid rgba(212,160,23,0.6)', borderRight: '2px solid rgba(212,160,23,0.6)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '20px', height: '20px', borderBottom: '2px solid rgba(212,160,23,0.6)', borderLeft: '2px solid rgba(212,160,23,0.6)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '20px', height: '20px', borderBottom: '2px solid rgba(212,160,23,0.6)', borderRight: '2px solid rgba(212,160,23,0.6)', pointerEvents: 'none' }} />

              <img
                src={GALLERY_ITEMS[lightboxIndex]?.src} alt={GALLERY_ITEMS[lightboxIndex]?.alt}
                style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', display: 'block', border: '1px solid rgba(212,160,23,0.2)', boxShadow: '0 10px 60px rgba(0,0,0,0.6)' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div style={{ position: 'absolute', bottom: '-3rem', left: 0, right: 0, textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>
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
