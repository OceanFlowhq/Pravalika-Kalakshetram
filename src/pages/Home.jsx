// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaYoutube, FaArrowRight, FaAward, FaTheaterMasks, FaBook, FaHeart } from 'react-icons/fa';
import { WHY_CHOOSE, FEATURED_VIDEOS, SITE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';
import {
  MandalaSVG, TempleSVG, LotusSVG, BellSVG, PeacockFeatherSVG,
  DancerSilhouetteSVG, CornerOrnamentSVG, OrnamentalDivider, HeritagePatternBg,
} from '../components/HeritageDecor';

// ─── Section Transition Divider ───────────────────────────────────────────────
function GoldSectionDivider({ light = false }) {
  return (
    <div style={{ position: 'relative', height: '48px', overflow: 'hidden', flexShrink: 0 }}>
      <OrnamentalDivider light={light} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '2rem', right: '2rem' }} />
    </div>
  );
}

// ─── Hero Section — Fullscreen Video ─────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="hero-video-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '560px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        autoPlay muted loop playsInline preload="metadata"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          display: 'block', pointerEvents: 'none', zIndex: 0,
        }}
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.1) 58%, transparent 75%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 18%, transparent 38%)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 22%)', zIndex: 2, pointerEvents: 'none' }} />

      <div
        className="hero-video-content"
        style={{
          position: 'absolute', bottom: '6.5rem', left: 0, zIndex: 3,
          textAlign: 'left', padding: '0 clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '520px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '0.06em', marginBottom: '0' }}
        >
          <span style={{ display: 'block', fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)', color: '#FFFFFF', textShadow: '0 2px 18px rgba(0,0,0,0.8)' }}>PRAVALIKA</span>
          <span style={{ display: 'block', fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)', background: 'linear-gradient(135deg, #D4A017 0%, #F0D060 50%, #B8860B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 2px 10px rgba(212,160,23,0.55))' }}>KUCHIPUDI</span>
          <span style={{ display: 'block', fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)', color: '#FFFFFF', textShadow: '0 2px 18px rgba(0,0,0,0.8)' }}>KALAKSHETRAM</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '55px', height: '1.5px', background: 'linear-gradient(90deg, #D4A017, #E8C547, transparent)', margin: '1rem 0', transformOrigin: 'left' }}
        />
        <motion.p
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(0.82rem, 1.4vw, 1rem)', color: 'rgba(255,255,255,0.78)', letterSpacing: '0.05em', textShadow: '0 1px 8px rgba(0,0,0,0.7)', marginBottom: '1.8rem' }}
        >
          Where Tradition Meets Expression
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}
        >
          <Link to="/contact" className="btn-luxury"><span>Get In Touch</span><FaArrowRight size={10} /></Link>
          <a href="#performances" className="btn-outline hero-video-btn-outline">
            <FaYoutube size={14} /><span>Watch Performances</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.6 }}
        style={{ position: 'absolute', bottom: '1.8rem', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}
      >
        <div className="hero-video-scroll-mouse"><div className="hero-video-scroll-wheel" /></div>
      </motion.div>

      <style>{`
        .hero-video-section { background: #000; }
        .hero-video-btn-outline { border-color: rgba(255,255,255,0.4) !important; color: rgba(255,255,255,0.85) !important; }
        .hero-video-btn-outline:hover { border-color: #D4A017 !important; color: #D4A017 !important; }
        .hero-video-scroll-mouse { width: 22px; height: 34px; border: 1.5px solid rgba(255,255,255,0.4); border-radius: 12px; display: flex; justify-content: center; padding-top: 5px; }
        .hero-video-scroll-wheel { width: 3px; height: 7px; background: rgba(212,160,23,0.85); border-radius: 2px; animation: hero-wheel-scroll 1.8s ease-in-out infinite; }
        @keyframes hero-wheel-scroll { 0% { opacity: 1; transform: translateY(0); } 60% { opacity: 0; transform: translateY(10px); } 61% { opacity: 0; transform: translateY(0); } 100% { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .hero-video-section { height: 100svh; min-height: 500px; }
          .hero-video-content { left: 0 !important; right: 0 !important; max-width: 100% !important; padding: 0 1.25rem !important; text-align: center !important; align-items: center !important; bottom: 5.5rem !important; }
          .hero-video-content h1 span { font-size: clamp(1.4rem, 7vw, 2rem) !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const icons = {
  certificate: <FaAward size={28} />,
  stage: <FaTheaterMasks size={28} />,
  scroll: <FaBook size={28} />,
  heart: <FaHeart size={28} />,
};

const PILLARS = [
  {
    icon: <FaAward size={22} />,
    title: 'Classical Training',
    sub: 'Rooted in authentic tradition',
  },
  {
    icon: <FaBook size={22} />,
    title: 'Theory & Practice',
    sub: 'Balance of knowledge & art',
  },
  {
    icon: <FaTheaterMasks size={22} />,
    title: 'Stage Preparation',
    sub: 'Performing with confidence',
  },
  {
    icon: <FaHeart size={22} />,
    title: 'Cultural Learning',
    sub: 'Heritage through movement',
  },
];

function WhyChooseUs() {
  return (
    <section className="heritage-papyrus" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Heritage pattern overlay */}
      <HeritagePatternBg color="#D4A017" opacity={0.04} />

      {/* Left side — temple silhouette */}
      <div style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
        <TempleSVG width={180} height={240} opacity={0.07} />
      </div>

      {/* Right side — pravalika photo background */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '48%', height: '100%',
        backgroundImage: 'url(/pravalika-why-choose-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center right',
        opacity: 0.18, pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '55%', height: '100%',
        background: 'linear-gradient(to right, #F2E5C5 60%, transparent)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Corner ornaments */}
      <CornerOrnamentSVG size={90} opacity={0.15} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
      <CornerOrnamentSVG size={90} opacity={0.15} flip style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

      {/* Hanging bells — top */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '3rem', zIndex: 0, pointerEvents: 'none' }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '1px', height: `${32 + i * 12}px`, background: 'rgba(212,160,23,0.25)' }} />
            <BellSVG width={18} height={28} opacity={0.18} className={`bell-swing-${i+1}`} />
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <LotusSVG size={28} opacity={0.6} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Our Distinction</p>
            <LotusSVG size={28} opacity={0.6} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Why Choose Pravalika Kalakshetram
          </h2>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(135deg, transparent, #D4A017, #E8C547, #D4A017, transparent)', margin: '0 auto 1.5rem' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We are not just a dance school — we are a living institution dedicated to preserving and elevating classical Kuchipudi.
          </p>
        </div>

        {/* ── Pillars Strip ─────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
          gap: '0',
          marginBottom: '4rem',
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212,160,23,0.18)',
          boxShadow: '0 8px 40px rgba(212,160,23,0.08)',
        }}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '2rem 1.25rem',
                textAlign: 'center',
                borderRight: i < PILLARS.length - 1 ? '1px solid rgba(212,160,23,0.15)' : 'none',
                position: 'relative',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
              }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '2px', background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }} />
              {/* Icon circle */}
              <div style={{
                width: '46px', height: '46px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(212,160,23,0.12), rgba(212,160,23,0.04))',
                border: '1px solid rgba(212,160,23,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#D4A017', flexShrink: 0,
              }}>
                {p.icon}
              </div>
              {/* Title */}
              <p style={{
                fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', fontWeight: 700,
                color: 'var(--dark)', lineHeight: 1.2, margin: 0,
              }}>{p.title}</p>
              <div style={{ width: '24px', height: '1px', background: 'rgba(212,160,23,0.4)' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--secondary)', letterSpacing: '0.02em', margin: 0 }}>{p.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Feature Cards ──────────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: '1rem' }}>
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={i}
              className="heritage-card heritage-card-corners"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'default', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)' }}
            >
              {/* Top ornamental line */}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '45%', height: '3px', background: 'linear-gradient(90deg, transparent, #D4A017, #E8C547, #D4A017, transparent)' }} />

              {/* Lotus watermark behind icon */}
              <div style={{ position: 'absolute', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
                <LotusSVG size={70} opacity={0.06} />
              </div>

              {/* Icon */}
              <div className="heritage-icon-circle">
                {icons[item.icon]}
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '0.04em', lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <OrnamentalDivider style={{ margin: '0 auto 1rem', maxWidth: '120px' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--secondary)', margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border pattern */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.3) 30%, rgba(212,160,23,0.5) 50%, rgba(212,160,23,0.3) 70%, transparent)' }} />
    </section>
  );
}

// ─── Spirit of Kuchipudi (dark) ───────────────────────────────────────────────
function SpiritSection() {
  return (
    <section className="heritage-section-dark" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <HeritagePatternBg color="#D4A017" opacity={0.025} />

      {/* Pravalika background portrait */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', backgroundImage: 'url(/pravalika-heritage-home.png)', backgroundSize: 'cover', backgroundPosition: 'center right', opacity: 0.17, pointerEvents: 'none', zIndex: 0 }} />

      {/* Large background mandala */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}>
        <MandalaSVG size={520} opacity={0.08} className="mandala-spin" />
      </div>
      {/* Secondary mandala top-left */}
      <div style={{ position: 'absolute', top: '-80px', left: '-80px', pointerEvents: 'none', zIndex: 0 }}>
        <MandalaSVG size={280} opacity={0.06} className="mandala-spin-reverse" />
      </div>

      {/* Dancer silhouettes on sides */}
      <div style={{ position: 'absolute', left: '2rem', bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
        <DancerSilhouetteSVG width={90} height={160} opacity={0.1} />
      </div>

      {/* Floating particles */}
      <FloatingParticles count={12} color="rgba(212,160,23," />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(212,160,23,0.5)' }} />
            <LotusSVG size={24} color="#D4A017" opacity={0.8} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.35em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>The Spirit of Kuchipudi</p>
            <LotusSVG size={24} color="#D4A017" opacity={0.8} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(212,160,23,0.5)' }} />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '2rem' }}
        >
          A Living Tradition
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', margin: '0 auto 2rem' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.7)' }}
        >
          Kuchipudi is more than a dance form — it is a living tradition that carries centuries of storytelling, devotion, rhythm, and artistic expression. At Pravalika Kuchipudi Kalakshetram, the focus is on nurturing appreciation for this beautiful classical art while preserving its cultural essence for future generations.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Academy Highlights ───────────────────────────────────────────────────────
function AcademyHighlights() {
  return (
    <section className="heritage-papyrus" style={{ padding: '7rem 0', overflow: 'hidden', position: 'relative' }}>
      <HeritagePatternBg color="#D4A017" opacity={0.03} />

      {/* Peacock feather accents */}
      <div style={{ position: 'absolute', right: '-10px', top: '10%', pointerEvents: 'none', zIndex: 0 }}>
        <PeacockFeatherSVG width={50} height={180} opacity={0.13} />
      </div>
      <div style={{ position: 'absolute', right: '50px', top: '5%', pointerEvents: 'none', zIndex: 0 }}>
        <PeacockFeatherSVG width={40} height={150} opacity={0.09} />
      </div>

      {/* Mandala background */}
      <div style={{ position: 'absolute', right: '-100px', bottom: '-100px', pointerEvents: 'none', zIndex: 0 }}>
        <MandalaSVG size={400} opacity={0.05} className="mandala-spin-reverse" />
      </div>
      <div style={{ position: 'absolute', left: '-60px', top: '-60px', pointerEvents: 'none', zIndex: 0 }}>
        <MandalaSVG size={240} opacity={0.05} className="mandala-spin" />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Left content */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <LotusSVG size={22} opacity={0.7} />
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Academy Highlights</p>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
              A Sanctuary of Classical Excellence
            </h2>
            <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--secondary)', marginBottom: '2rem' }}>
              Pravalika Kuchipudi Kalakshetram is more than a dance academy — it is a cultural institution where the ancient wisdom of Kuchipudi is passed down with devotion, precision, and love. Under the luminous guidance of Guru Pravalika Kuppili, every student discovers not just a dance form, but a lifelong relationship with India's classical heritage.
            </p>
            {[
              'Authentic lineage-based classical tradition',
              'Holistic artistic and cultural education',
              'Regular stage performances and national exposure',
              'Community of passionate classical dance artists',
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <span style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6rem', flexShrink: 0, marginTop: '2px', boxShadow: '0 2px 8px rgba(212,160,23,0.3)' }}>✓</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: 1.6 }}>{point}</p>
              </div>
            ))}
          </motion.div>

          {/* Right — photo collage with heritage frames */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', height: '540px' }}
          >
            {/* Decorative mandala behind photos */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }}>
              <MandalaSVG size={380} opacity={0.07} className="mandala-spin" />
            </div>
            <div className="heritage-frame" style={{ position: 'absolute', top: 0, left: '5%', width: '60%', height: '65%', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.12)', zIndex: 1 }}>
              <img src="/performance1.jpg" alt="Kuchipudi performance stage" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='linear-gradient(135deg,#D4A017,#E8C547)'; e.target.parentElement.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem">🎭</div>`; }} />
            </div>
            <div className="heritage-frame" style={{ position: 'absolute', bottom: 0, right: '0%', width: '55%', height: '55%', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.12)', border: '4px solid #fff', zIndex: 1 }}>
              <img src="/performance2.jpg" alt="Classical dance workshop" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => { e.target.style.display='none'; e.target.parentElement.style.background='linear-gradient(135deg,#1A1A1A,#2D2D2D)'; e.target.parentElement.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem">🪔</div>`; }} />
            </div>
            {/* Corner dancer silhouette */}
            <div style={{ position: 'absolute', bottom: '10px', left: '0', pointerEvents: 'none', zIndex: 2, opacity: 0.15 }}>
              <DancerSilhouetteSVG width={70} height={120} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Performances Section ─────────────────────────────────────────────────────
function FeaturedPerformances() {
  return (
    <section id="performances" className="heritage-papyrus" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <HeritagePatternBg color="#D4A017" opacity={0.03} />

      {/* Side temple silhouettes */}
      <div style={{ position: 'absolute', left: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.08 }}>
        <TempleSVG width={200} height={260} />
      </div>
      <div style={{ position: 'absolute', right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.06, transform: 'scaleX(-1)' }}>
        <TempleSVG width={160} height={200} />
      </div>

      {/* Corner ornaments */}
      <CornerOrnamentSVG size={80} opacity={0.12} style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg)' }} />
      <CornerOrnamentSVG size={80} opacity={0.12} flip style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg) scaleX(-1)' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <LotusSVG size={26} opacity={0.6} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Featured Performances</p>
            <LotusSVG size={26} opacity={0.6} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.2 }}>Watch Our Artistry</h2>
          <div style={{ width: '70px', height: '2px', background: 'linear-gradient(135deg, transparent, #D4A017, #E8C547, #D4A017, transparent)', margin: '0 auto 1.5rem' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Explore our curated collection of Kuchipudi performances, workshops, and arangetrams.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '3rem' }}
        >
          {FEATURED_VIDEOS.map((video, i) => (
            <SwiperSlide key={i}>
              <motion.a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank" rel="noreferrer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div className="heritage-card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', background: '#0D0D0D', overflow: 'hidden' }}>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82, transition: 'all 0.4s ease' }}
                      onMouseEnter={e => { e.target.style.opacity='1'; e.target.style.transform='scale(1.05)'; }}
                      onMouseLeave={e => { e.target.style.opacity='0.82'; e.target.style.transform='scale(1)'; }}
                    />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                      <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(212,160,23,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(212,160,23,0.5)' }}>▶</div>
                    </div>
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'rgba(212,160,23,0.9)', padding: '0.2rem 0.6rem' }}>
                      <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.55rem', color: '#fff', letterSpacing: '0.1em' }}>LIVE</p>
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.25rem', lineHeight: 1.4 }}>{video.title}</h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--secondary)' }}>{video.views}</p>
                  </div>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="heritage-section-dark" style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <HeritagePatternBg color="#D4A017" opacity={0.025} />
      <FloatingParticles count={15} color="rgba(212,160,23," />

      {/* Large center mandala */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}>
        <MandalaSVG size={500} opacity={0.07} className="mandala-spin" />
      </div>

      {/* Dancer silhouettes on sides */}
      <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
        <DancerSilhouetteSVG width={80} height={140} opacity={0.12} />
      </div>
      <div style={{ position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%) scaleX(-1)', pointerEvents: 'none', zIndex: 0 }}>
        <DancerSilhouetteSVG width={80} height={140} opacity={0.12} />
      </div>

      {/* Corner ornaments */}
      <CornerOrnamentSVG size={90} opacity={0.15} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
      <CornerOrnamentSVG size={90} opacity={0.15} flip style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', background: 'rgba(212,160,23,0.5)' }} />
            <LotusSVG size={22} color="#D4A017" opacity={0.8} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Begin Your Journey</p>
            <LotusSVG size={22} color="#D4A017" opacity={0.8} />
            <div style={{ width: '40px', height: '1px', background: 'rgba(212,160,23,0.5)' }} />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1.5rem' }}
        >
          Begin Your Kuchipudi Journey Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem' }}
        >
          Join Pravalika Kuchipudi Kalakshetram and become part of a tradition that has inspired generations. Limited seats available.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/contact" className="btn-luxury">
            <span>Connect With Us</span><FaArrowRight size={10} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <AcademyHighlights />
      <SpiritSection />
      <FeaturedPerformances />
      <CTABanner />
    </>
  );
}
