// src/pages/Home.jsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaYoutube, FaArrowRight, FaAward, FaTheaterMasks, FaBook, FaHeart } from 'react-icons/fa';
import { WHY_CHOOSE, FEATURED_VIDEOS, SITE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';

// ─── Hero Section — Fullscreen Video ────────────────────────────────────────
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
      {/* ── Background Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* ── Left-side gradient panel — darkens left edge so text stays readable without covering dancer ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.1) 58%, transparent 75%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Bottom edge vignette — naturally darkens the bottom strip, hides any watermark seamlessly ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 18%, transparent 38%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── Top edge fade ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 22%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── Text — pinned to bottom-left, leaves dancer visible on right ── */}
      <div
        className="hero-video-content"
        style={{
          position: 'absolute',
          bottom: '6.5rem',
          left: 0,
          zIndex: 3,
          textAlign: 'left',
          padding: '0 clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '520px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '0.06em',
            marginBottom: '0',
          }}
        >
          <span style={{
            display: 'block',
            fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)',
            color: '#FFFFFF',
            textShadow: '0 2px 18px rgba(0,0,0,0.8)',
          }}>PRAVALIKA</span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)',
            background: 'linear-gradient(135deg, #D4A017 0%, #F0D060 50%, #B8860B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 10px rgba(212,160,23,0.55))',
          }}>KUCHIPUDI</span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(1.6rem, 3.8vw, 3.2rem)',
            color: '#FFFFFF',
            textShadow: '0 2px 18px rgba(0,0,0,0.8)',
          }}>KALAKSHETRAM</span>
        </motion.h1>

        {/* Gold divider — left-aligned */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '55px',
            height: '1.5px',
            background: 'linear-gradient(90deg, #D4A017, #E8C547, transparent)',
            margin: '1rem 0',
            transformOrigin: 'left',
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.82rem, 1.4vw, 1rem)',
            color: 'rgba(255,255,255,0.78)',
            letterSpacing: '0.05em',
            textShadow: '0 1px 8px rgba(0,0,0,0.7)',
            marginBottom: '1.8rem',
          }}
        >
          Where Tradition Meets Expression
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}
        >
          <Link to="/contact" className="btn-luxury">
            <span>Get In Touch</span>
            <FaArrowRight size={10} />
          </Link>
          <a href="#performances" className="btn-outline hero-video-btn-outline">
            <FaYoutube size={14} />
            <span>Watch Performances</span>
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: '1.8rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <div className="hero-video-scroll-mouse">
          <div className="hero-video-scroll-wheel" />
        </div>
      </motion.div>

      <style>{`
        /* ── Hero video section ── */
        .hero-video-section { background: #000; }

        /* ── Outline button on dark bg ── */
        .hero-video-btn-outline {
          border-color: rgba(255,255,255,0.4) !important;
          color: rgba(255,255,255,0.85) !important;
        }
        .hero-video-btn-outline:hover {
          border-color: #D4A017 !important;
          color: #D4A017 !important;
        }

        /* ── Scroll mouse icon ── */
        .hero-video-scroll-mouse {
          width: 22px; height: 34px;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
        }
        .hero-video-scroll-wheel {
          width: 3px; height: 7px;
          background: rgba(212,160,23,0.85);
          border-radius: 2px;
          animation: hero-wheel-scroll 1.8s ease-in-out infinite;
        }
        @keyframes hero-wheel-scroll {
          0%   { opacity: 1; transform: translateY(0); }
          60%  { opacity: 0; transform: translateY(10px); }
          61%  { opacity: 0; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* ── Mobile: stack text centered at bottom ── */
        @media (max-width: 768px) {
          .hero-video-section { height: 100svh; min-height: 500px; }
          .hero-video-content {
            left: 0 !important;
            right: 0 !important;
            max-width: 100% !important;
            padding: 0 1.25rem !important;
            text-align: center !important;
            align-items: center !important;
            bottom: 5.5rem !important;
          }
          .hero-video-content h1 span { font-size: clamp(1.4rem, 7vw, 2rem) !important; }
        }
        @media (max-width: 390px) {
          .hero-video-content {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
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

// ─── The Spirit of Kuchipudi ──────────────────────────────────────────────────────────
function AchievementsSection() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      style={{
        padding: '8rem 0',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 50%, #1A1A1A 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
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
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}
        >
          ✦ The Spirit of Kuchipudi ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.3,
            marginBottom: '2rem',
          }}
        >
          A Living Tradition
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', margin: '0 auto 2rem' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '0',
          }}
        >
          Kuchipudi is more than a dance form—it is a living tradition that carries centuries of storytelling, devotion, rhythm, and artistic expression. At Pravalika Kuchipudi Kalakshetram, the focus is on nurturing appreciation for this beautiful classical art while preserving its cultural essence for future generations.
        </motion.p>
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
              'Authentic lineage-based classical tradition',
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
            <span>Connect With Us</span>
            <FaArrowRight size={10} />
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
      <CTABanner />
    </>
  );
}
