// src/pages/Home.jsx
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaQuoteLeft, FaYoutube, FaArrowRight, FaAward, FaTheaterMasks, FaBook, FaHeart } from 'react-icons/fa';
import { WHY_CHOOSE, COUNTERS, TESTIMONIALS, FEATURED_VIDEOS, SITE } from '../data/siteData';
import { useCounter } from '../hooks/useCounter';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';

import heroVideoSrc from '../assets/dance1.mp4';

// ─── Hero storytelling steps ─────────────────────────────────────────────────
const STORY_STEPS = [
  { text: 'Discover the elegance of authentic Kuchipudi.', note: 'Classical artistry from its ancient roots.' },
  { text: 'Master traditional mudras, rhythm and expression.', note: 'Every gesture tells a timeless story.' },
  { text: 'Train for performances, workshops and stage presentations.', note: 'From classroom to the grand stage.' },
  { text: 'Preserving India\'s classical dance heritage for future generations.', note: 'A living tradition in every step.' },
];

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const outerRef = useRef(null);
  const progressRef = useRef(null);
  const storyTextsRef = useRef([]);    // array of story text DOM nodes
  const storyDotsRef = useRef([]);     // array of step dot DOM nodes
  const storyLabelRef = useRef(null);  // "01 / 04" counter label

  // Video scrubbing refs
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef(null);

  // ── Pure window scroll → Text scrub & Video Time ────────────────────────────────
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (window.innerWidth <= 768) return; // Disable scroll animation on mobile

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = outerRef.current;
          if (!el) {
            ticking = false;
            return;
          }
          const total = el.offsetHeight - window.innerHeight;
          const scrolled = Math.max(0, window.scrollY - el.offsetTop);
          
          // Map 0 -> 1 over the first 85% of scroll, hold for the last 15%
          const scrollRatio = Math.max(0, Math.min(1, scrolled / total));
          const animationProgress = Math.min(1, scrollRatio / 0.85);

          // Update progress bar
          if (progressRef.current) {
            progressRef.current.style.width = `${animationProgress * 100}%`;
          }

          // Update video target time
          const video = videoRef.current;
          if (video && video.duration && isFinite(video.duration)) {
             targetTimeRef.current = animationProgress * video.duration;
          }

          const numSteps = STORY_STEPS.length;
          
          // ── Storytelling panel: update step text + dots ──
          const stepIndexRaw = animationProgress * (numSteps - 1);
          const stepIndex = Math.min(numSteps - 1, Math.round(stepIndexRaw));

          storyTextsRef.current.forEach((textEl, i) => {
            if (!textEl) return;
            // Smooth vertical parallax and fade for text
            const diff = stepIndexRaw - i; // distance from center (0 = perfectly active)
            const opacity = Math.max(0, 1 - Math.abs(diff) * 1.5);
            const translateY = diff * 20; // moves up when scrolled past, down when coming up
            
            textEl.style.opacity = opacity;
            textEl.style.transform = `translateY(${translateY}px)`;
            textEl.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
          });

          // Animate step dots
          storyDotsRef.current.forEach((dot, i) => {
            if (!dot) return;
            if (i === stepIndex) {
              dot.style.background = 'linear-gradient(135deg, #D4A017, #E8C547)';
              dot.style.transform = 'scale(1.55)';
              dot.style.boxShadow = '0 0 8px rgba(212,160,23,0.55)';
            } else if (i < stepIndex) {
              dot.style.background = 'rgba(212,160,23,0.45)';
              dot.style.transform = 'scale(1)';
              dot.style.boxShadow = 'none';
            } else {
              dot.style.background = 'rgba(212,160,23,0.14)';
              dot.style.transform = 'scale(1)';
              dot.style.boxShadow = 'none';
            }
          });

          // Update counter label
          if (storyLabelRef.current) {
            storyLabelRef.current.textContent =
              `${String(stepIndex + 1).padStart(2, '0')} / ${String(numSteps).padStart(2, '0')}`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync immediately
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── RAF loop: seamlessly lerp video to targetTime ──
  useEffect(() => {
    const tick = () => {
      if (window.innerWidth <= 768) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        // Ultra-smooth lerp ratio (0.08). If diff is very small, we snap to avoid micro-stutter
        if (Math.abs(diff) > 0.005) {
          currentTimeRef.current += diff * 0.08;
          video.currentTime = currentTimeRef.current;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // Guarantee static poster state until user scrolls
  const handleVideoReady = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      currentTimeRef.current = 0;
    }
  };

  return (
    // ── 360vh outer provides scroll runway (4 story steps + end buffer) ─────
    <div ref={outerRef} className="hero-outer-container" style={{ position: 'relative' }}>

      {/* ── Sticky viewport: pinned at 100vh while user scrolls ── */}
      <div className="hero-sticky-container" style={{ position: 'sticky', top: 0, overflow: 'hidden' }}>
        <section
          className="hero-section"
          style={{
            background: 'linear-gradient(135deg, #FAF7F2 0%, #F5EFE6 40%, #FAF7F2 100%)',
            display: 'grid',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient warm glow */}
          <div style={{
            position: 'absolute', top: '25%', left: '-5%',
            width: '700px', height: '700px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <FloatingParticles count={14} />

          {/* ══════════ LEFT 40% — Text Column ══════════ */}
          <div className="hero-text-col hero-text-inner">
            <h1 className="hero-h1">
              <span style={{ color: 'var(--dark)' }}>PRAVALIKA</span>
              <span style={{
                background: 'linear-gradient(135deg, #D4A017 0%, #E8C547 50%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>KUCHIPUDI</span>
              <span style={{ color: 'var(--dark)' }}>KALAKSHETRAM</span>
            </h1>

            <p className="hero-tagline">Where Tradition Meets Expression</p>

            <div className="hero-gold-rule" />

            <p className="hero-body">
              Learn authentic Kuchipudi through expert guidance, traditional values,
              artistic discipline, and a deep connection to India's classical heritage.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="btn-luxury">
                <span>Join Classes</span>
                <FaArrowRight size={10} />
              </Link>
              <a href="#performances" className="btn-outline">
                <FaYoutube size={14} />
                <span>Watch Performances</span>
              </a>
            </div>

            {/* ─── Scroll-driven storytelling panel ─────────────────── */}
            <div className="hero-story-panel">

              {/* Thin gold separator */}
              <div className="hero-story-sep" />

              {/* Step dots + counter */}
              <div className="hero-story-nav">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {STORY_STEPS.map((_, i) => (
                    <div
                      key={i}
                      ref={el => { storyDotsRef.current[i] = el; }}
                      className="hero-story-dot"
                      style={{
                        background: i === 0 ? 'linear-gradient(135deg, #D4A017, #E8C547)' : 'rgba(212,160,23,0.14)',
                        transform: i === 0 ? 'scale(1.55)' : 'scale(1)',
                        boxShadow: i === 0 ? '0 0 8px rgba(212,160,23,0.55)' : 'none',
                      }}
                    />
                  ))}
                </div>
                <span ref={storyLabelRef} className="hero-story-label">
                  01 / 04
                </span>
              </div>

              <div className="hero-story-text-area">
                {STORY_STEPS.map((step, i) => (
                  <div
                    key={i}
                    ref={el => { storyTextsRef.current[i] = el; }}
                    className="hero-story-block"
                    style={{
                      opacity: i === 0 ? 1 : 0,
                      transform: i === 0 ? 'translateY(0px)' : 'translateY(20px)',
                    }}
                  >
                    <p className="hero-story-main">{step.text}</p>
                    <p className="hero-story-note">{step.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════ RIGHT 60% — Scroll Scrubbing Video ══════════ */}
          <div className="hero-video-col" style={{ position: 'relative', overflow: 'hidden' }}>
            
            {/* Static Hero Image for Mobile */}
            <img
              src="/dancer-hero.jpg"
              alt="Kuchipudi Dancer"
              className="hero-mobile-img"
            />

            {/* Standard MP4 Video */}
            <video
              className="hero-desktop-video"
              ref={videoRef}
              src={heroVideoSrc}
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={handleVideoReady}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 12%',
                display: 'block',
                pointerEvents: 'none',
              }}
            />

            {/* Cinematic edge fades */}
            <div className="hero-fade-overlay" style={{
              position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to right, #FAF7F2 0%, rgba(250,247,242,0.6) 14%, rgba(250,247,242,0.1) 36%, transparent 52%)',
            }} />
            <div className="hero-fade-overlay" style={{
              position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to bottom, rgba(250,247,242,0.9) 0%, rgba(250,247,242,0.25) 8%, transparent 24%)',
            }} />
            <div className="hero-fade-overlay" style={{
              position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to top, rgba(250,247,242,0.72) 0%, transparent 28%)',
            }} />
            <div className="hero-fade-overlay" style={{
              position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to left, rgba(250,247,242,0.28) 0%, transparent 26%)',
            }} />
            <div className="hero-fade-overlay" style={{
              position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
              background: 'radial-gradient(ellipse at 58% 42%, rgba(212,160,23,0.08) 0%, transparent 62%)',
            }} />

            {/* Gold scrub progress bar */}
            <div className="hero-mobile-hide" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '2px', background: 'rgba(212,160,23,0.12)', zIndex: 10,
            }}>
              <div
                ref={progressRef}
                style={{
                  height: '100%', width: '0%',
                  background: 'linear-gradient(90deg, #D4A017, #E8C547)',
                  boxShadow: '0 0 14px rgba(212,160,23,0.55)',
                }}
              />
            </div>

            {/* "Scroll to reveal" hint */}
            <div className="hero-scroll-hint-right">
              <p style={{
                fontFamily: 'var(--font-cinzel)', fontSize: '0.5rem',
                letterSpacing: '0.32em', color: 'var(--secondary)', textTransform: 'uppercase',
              }}>Scroll to reveal</p>
              <div className="hero-scroll-line" />
            </div>
          </div>
          
          {/* Scroll cue — text column side */}
          <div className="hero-scroll-cue">
            <p style={{
              fontFamily: 'var(--font-cinzel)', fontSize: '0.5rem',
              letterSpacing: '0.32em', color: 'var(--secondary)', textTransform: 'uppercase',
            }}>Scroll</p>
            <div className="hero-scroll-line" />
          </div>

        <style>{`
          /* ── Containers ── */
          .hero-outer-container { height: 360vh; margin-bottom: 8rem; }
          .hero-sticky-container { height: 100vh; }
          .hero-section { height: 100vh; }
          .hero-mobile-img { display: none; }
          .hero-desktop-video { display: block; }

          /* ── Grid ── */
          .hero-section { grid-template-columns: 48fr 52fr; }
          @media (max-width: 1100px) { .hero-section { grid-template-columns: 50fr 50fr; } }
          @media (max-width: 768px) {
            .hero-outer-container { height: auto !important; margin-bottom: 0 !important; display: flex; flex-direction: column; }
            .hero-sticky-container { position: relative !important; height: auto !important; overflow: visible !important; }
            .hero-section { display: block !important; height: auto !important; min-height: 100svh; }
            
            .hero-video-col { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; z-index: 1 !important; }
            .hero-mobile-img { 
              display: block !important; 
              position: absolute; inset: 0; width: 100%; height: 100%; 
              object-fit: cover; 
              object-position: center 15%; 
              opacity: 0.85;
            }
            .hero-desktop-video { display: none !important; }
            .hero-fade-overlay { display: none !important; }
            .hero-mobile-hide { display: none !important; }
            .hero-scroll-hint-right, .hero-scroll-cue { display: none !important; }

            .hero-text-inner {
              justify-content: flex-end !important;
              padding-top: 140px !important; padding-bottom: 2.5rem !important;
              padding-left: 1rem !important; padding-right: 1rem !important;
              text-align: center;
              background: linear-gradient(to top, rgba(250,247,242,1) 0%, rgba(250,247,242,0.92) 40%, rgba(250,247,242,0) 100%);
            }
            .hero-h1 span { font-size: clamp(1.4rem, 8vw, 1.8rem) !important; }
            .hero-eyebrow { justify-content: center !important; margin-bottom: 0.5rem !important; }
            .hero-gold-rule { margin-left: auto; margin-right: auto; margin-bottom: 0.5rem !important; }
            .hero-body { display: none; }
            
            .hero-story-panel { 
              margin-left: auto; margin-right: auto; margin-top: 2rem !important; 
            }
            .hero-story-nav { display: none !important; }
            .hero-story-text-area { 
              min-height: auto !important; 
              display: flex; flex-direction: column; gap: 1.25rem; 
            }
            .hero-story-block { 
              position: static !important; 
              opacity: 1 !important; 
              transform: none !important; 
            }
          }

          /* ── Text column ── */
          .hero-text-inner {
            display: flex; flex-direction: column; justify-content: center;
            height: 100%;
            padding-top: clamp(130px, 15vh, 180px); padding-bottom: 40px;
            padding-left: clamp(1.5rem, 5vw, 5.5rem); padding-right: 2rem;
            position: relative; z-index: 2;
          }

          /* ── Eyebrow ── */
          .hero-eyebrow {
            font-family: var(--font-cinzel); font-size: 0.65rem; font-weight: 600;
            letter-spacing: 0.32em; text-transform: uppercase;
            color: var(--gold); margin-bottom: 1.25rem;
            display: flex; align-items: center; gap: 0.75rem;
          }
          .hero-eyebrow-line { width: 28px; height: 1px; background: var(--gold); display: inline-block; flex-shrink: 0; }

          /* ── H1 ── */
          .hero-h1 {
            font-family: var(--font-cinzel); font-weight: 900;
            line-height: 1.02; margin-bottom: 1rem; letter-spacing: 0.02em;
          }
          .hero-h1 span { display: block; font-size: clamp(2rem, 3.8vw, 4.2rem); }

          /* ── Tagline ── */
          .hero-tagline {
            font-family: var(--font-heading); font-style: italic;
            font-size: clamp(0.9rem, 1.6vw, 1.15rem);
            color: var(--secondary); margin-bottom: 0.6rem;
          }

          /* ── Gold rule ── */
          .hero-gold-rule { width: 52px; height: 1.5px; background: linear-gradient(90deg, #D4A017, #E8C547); margin-bottom: 1rem; }

          /* ── Body ── */
          .hero-body {
            font-family: var(--font-body); font-size: clamp(0.85rem, 1.1vw, 0.97rem);
            line-height: 1.9; color: var(--secondary); max-width: 440px; margin-bottom: 1.5rem;
          }

          /* ── Storytelling panel ── */
          .hero-story-panel {
            margin-top: 1.2rem;
            max-width: 440px;
          }
          .hero-story-sep {
            width: 100%; height: 1px;
            background: linear-gradient(90deg, rgba(212,160,23,0.35), transparent);
            margin-bottom: 0.85rem;
          }
          .hero-story-nav {
            display: flex; align-items: center;
            justify-content: space-between;
            margin-bottom: 0.85rem;
          }
          .hero-story-dot {
            width: 6px; height: 6px; border-radius: 50%;
            transition: background 0.45s ease, transform 0.45s ease, box-shadow 0.45s ease;
            flex-shrink: 0;
          }
          .hero-story-label {
            font-family: var(--font-cinzel); font-size: 0.5rem;
            letter-spacing: 0.25em; color: rgba(212,160,23,0.55);
          }
          .hero-story-text-area {
            position: relative;
            min-height: 7rem;
          }
          .hero-story-block {
            position: absolute;
            top: 0; left: 0; right: 0;
            transition: opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1);
            pointer-events: none;
          }
          .hero-story-main {
            font-family: var(--font-cinzel);
            font-size: clamp(0.78rem, 1.05vw, 0.9rem);
            font-weight: 600;
            letter-spacing: 0.04em;
            color: var(--dark);
            line-height: 1.55;
            margin-bottom: 0.35rem;
          }
          .hero-story-note {
            font-family: var(--font-body);
            font-size: clamp(0.7rem, 0.85vw, 0.78rem);
            color: var(--secondary);
            font-style: italic;
            letter-spacing: 0.02em;
            line-height: 1.5;
          }
          @media (max-width: 768px) {
            .hero-story-panel { max-width: 100%; }
          }

          /* ── Scroll hints ── */
          .hero-scroll-hint-right {
            position: absolute; bottom: 1.5rem; right: 2.5rem; z-index: 10;
            display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;
          }
          .hero-scroll-line {
            width: 1px; height: 34px;
            background: linear-gradient(to bottom, var(--gold), transparent);
            animation: hero-bob 1.6s ease-in-out infinite;
          }
          @keyframes hero-bob {
            0%, 100% { transform: translateY(0); }
            50%       { transform: translateY(7px); }
          }
        `}</style>
        </section>
      </div>
    </div>
  );
}

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
const icons = {
  certificate: <FaAward size={28} />,
  stage: <FaTheaterMasks size={28} />,
  scroll: <FaBook size={28} />,
  heart: <FaHeart size={28} />,
};

function WhyChooseUs() {
  return (
    <section style={{
      padding: '7rem 0',
      background: '#FFFFFF',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeading
          eyebrow="Our Distinction"
          title="Why Choose Pravalika Kalakshetram"
          subtitle="We are not just a dance school — we are a living institution dedicated to preserving and elevating classical Kuchipudi."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '1.5rem',
        }}>
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="luxury-card"
              style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* Gold corner accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '60px', height: '60px',
                background: 'linear-gradient(225deg, rgba(212,160,23,0.1) 0%, transparent 60%)',
              }} />
              <div style={{
                width: '60px', height: '60px',
                background: 'linear-gradient(135deg, rgba(212,160,23,0.12), rgba(212,160,23,0.06))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
                marginBottom: '1.5rem',
              }}>
                {icons[item.icon]}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '0.75rem',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.8,
                color: 'var(--secondary)',
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Counters Section ──────────────────────────────────────────────────────────
function CounterItem({ item, start }) {
  const count = useCounter(item.value, 2500, start);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', padding: '2rem' }}
    >
      <p style={{
        fontFamily: 'var(--font-cinzel)',
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 900,
        background: 'linear-gradient(135deg, #D4A017, #E8C547, #B8860B)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        marginBottom: '0.5rem',
      }}>
        {count}{item.suffix}
      </p>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.7)',
        textTransform: 'uppercase',
      }}>
        {item.label}
      </p>
    </motion.div>
  );
}

function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 50%, #1A1A1A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(212,160,23,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <FloatingParticles count={12} color="rgba(212,160,23," />
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
          gap: '1rem',
        }}>
          {COUNTERS.map((item, i) => (
            <CounterItem key={i} item={item} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Performances Section ──────────────────────────────────────────────────────
function FeaturedPerformances() {
  return (
    <section id="performances" style={{ padding: '7rem 0', background: 'var(--ivory)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeading
          eyebrow="Featured Performances"
          title="Watch Our Artistry"
          subtitle="Explore our curated collection of Kuchipudi performances, workshops, and arangetrams."
        />

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '3rem' }}
        >
          {FEATURED_VIDEOS.map((video, i) => (
            <SwiperSlide key={i}>
              <motion.a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  background: '#0D0D0D',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'all 0.4s ease' }}
                    onMouseEnter={e => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.opacity = '0.8'; e.target.style.transform = 'scale(1)'; }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.2)',
                  }}>
                    <div style={{
                      width: '54px', height: '54px',
                      borderRadius: '50%',
                      background: 'rgba(212,160,23,0.9)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: '1.2rem',
                      boxShadow: '0 0 30px rgba(212,160,23,0.5)',
                      transition: 'all 0.3s ease',
                    }}>
                      ▶
                    </div>
                  </div>
                  <div style={{
                    position: 'absolute', top: '0.75rem', left: '0.75rem',
                    background: 'rgba(212,160,23,0.9)',
                    padding: '0.2rem 0.6rem',
                  }}>
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.55rem', color: '#fff', letterSpacing: '0.1em' }}>LIVE</p>
                  </div>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--dark)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.4,
                }}>
                  {video.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--secondary)' }}>
                  {video.views}
                </p>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href={SITE.youtube} target="_blank" rel="noreferrer" className="btn-outline">
            <FaYoutube size={16} />
            <span>View Full Channel</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <SectionHeading
          eyebrow="Voices of Our Community"
          title="What Our Students Say"
          subtitle="Hear from the dancers and families who are part of our growing Kuchipudi family."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '3rem' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{
                  background: 'var(--ivory)',
                  border: '1px solid rgba(212,160,23,0.15)',
                  padding: '2.5rem',
                  position: 'relative',
                  height: '100%',
                }}
              >
                <FaQuoteLeft style={{ color: 'rgba(212,160,23,0.2)', fontSize: '3rem', marginBottom: '1.5rem' }} />
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: 1.9,
                  color: 'var(--secondary)',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                    fontFamily: 'var(--font-cinzel)',
                    fontWeight: 700, fontSize: '1rem',
                    flexShrink: 0,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--dark)' }}>{t.name}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--secondary)' }}>{t.role}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '3px', marginTop: '1rem' }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <FaStar key={j} style={{ color: '#D4A017', fontSize: '0.8rem' }} />
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ─── Academy Highlights ────────────────────────────────────────────────────────
function AcademyHighlights() {
  return (
    <section style={{ padding: '7rem 0', background: 'var(--ivory)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}>
              ✦ Academy Highlights
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 700,
              color: 'var(--dark)',
              lineHeight: 1.3,
              marginBottom: '1.5rem',
            }}>
              A Sanctuary of Classical Excellence
            </h2>
            <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              lineHeight: 1.9,
              color: 'var(--secondary)',
              marginBottom: '2rem',
            }}>
              Pravalika Kuchipudi Kalakshetram is more than a dance academy — it is a cultural institution where the ancient wisdom of Kuchipudi is passed down with devotion, precision, and love. Under the luminous guidance of Guru Pravalika Kuppili, every student discovers not just a dance form, but a lifelong relationship with India's classical heritage.
            </p>
            {[
              'Authentic lineage-based classical training',
              'Holistic artistic and cultural education',
              'Regular stage performances and national exposure',
              'Community of passionate classical dance artists',
            ].map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{
                  width: '20px', height: '20px',
                  background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.6rem',
                  flexShrink: 0, marginTop: '2px',
                }}>✓</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--secondary)', lineHeight: 1.6 }}>{point}</p>
              </div>
            ))}
          </motion.div>

          {/* Right — photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', height: '540px' }}
          >
            <div style={{
              position: 'absolute', top: 0, left: '5%',
              width: '60%', height: '65%',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
            }}>
              <img
                src="/performance1.jpg"
                alt="Kuchipudi performance stage"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #D4A017 0%, #E8C547 100%)';
                  e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem;">🎭</div>`;
                }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: 0, right: '0%',
              width: '55%', height: '55%',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.12)',
              border: '4px solid #fff',
            }}>
              <img
                src="/performance2.jpg"
                alt="Classical dance workshop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)';
                  e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem;">🪔</div>`;
                }}
              />
            </div>

            {/* Gold tag */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: '15%', left: '-20px',
                background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                color: '#fff',
                padding: '1rem 1.5rem',
                boxShadow: '0 15px 40px rgba(212,160,23,0.3)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.2rem', fontWeight: 900, lineHeight: 1 }}>15+</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', opacity: 0.9 }}>Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,160,23,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(212,160,23,0.04) 0%, transparent 40%)',
        pointerEvents: 'none',
      }} />
      <FloatingParticles count={15} color="rgba(212,160,23," />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          ✦ Begin Your Journey ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}
        >
          Begin Your Kuchipudi Journey Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '2.5rem',
          }}
        >
          Join Pravalika Kuchipudi Kalakshetram and become part of a tradition that has inspired generations. Limited seats available.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link to="/contact" className="btn-luxury">
            <span>Enroll Now</span>
            <FaArrowRight size={10} />
          </Link>
          <Link to="/courses" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.875rem 2.25rem',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'rgba(255,255,255,0.8)',
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#D4A017'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
          >
            <span>View Programs</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <AcademyHighlights />
      <AchievementsSection />
      <FeaturedPerformances />
      <Testimonials />
      <CTABanner />
    </>
  );
}
