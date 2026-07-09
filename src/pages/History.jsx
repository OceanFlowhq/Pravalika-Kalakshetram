// src/pages/History.jsx
import { motion } from 'framer-motion';
import { HISTORY_TIMELINE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';
import {
  MandalaSVG, TempleSVG, LotusSVG, BellSVG, PeacockFeatherSVG,
  DancerSilhouetteSVG, CornerOrnamentSVG, OrnamentalDivider, HeritagePatternBg,
} from '../components/HeritageDecor';

/* ─────────────────────────────────────────────────────────────────────── */

export default function History() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          HERO  —  Premium seamless heritage composition
          The artwork is the page. The page is the artwork.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hist-hero" aria-label="Kuchipudi Heritage Hero">

        {/* ── LAYER 0 — Warm parchment base ────────────────────────────── */}
        <div className="hist-base" aria-hidden="true" />

        {/* ── LAYER 1 — Heritage artwork (CSS-masked, multiply-blended) ── */}
        {/*   The mask-image dissolves the art into cream on the left,     */}
        {/*   so no rectangle or hard edge ever appears.                   */}
        <div className="hist-art-wrap" aria-hidden="true">
          <img src="/history-hero-bg.png" alt="" className="hist-art-img" />
        </div>

        {/* ── LAYER 2 — Atmospheric veil stack ─────────────────────────── */}
        {/* 2a. Left parchment fog — the primary "paint-in" effect */}
        <div className="hist-veil-left"   aria-hidden="true" />
        {/* 2b. Radial atmospheric glow around text area */}
        <div className="hist-veil-radial" aria-hidden="true" />
        {/* 2c. Top edge dissolve */}
        <div className="hist-veil-top"    aria-hidden="true" />
        {/* 2d. Bottom edge dissolve */}
        <div className="hist-veil-bottom" aria-hidden="true" />
        {/* 2e. Right-edge vignette — tones down far-right clipping */}
        <div className="hist-veil-right"  aria-hidden="true" />

        {/* ── LAYER 3 — Ghost SVG depth elements ───────────────────────── */}
        {/* Spinning mandala — very faint, adds ancient texture behind text */}
        <div className="hist-ghost-mandala" aria-hidden="true">
          <MandalaSVG size={500} opacity={0.042} className="mandala-spin" />
        </div>
        {/* Tiling heritage grid */}
        <HeritagePatternBg color="#C49A0A" opacity={0.018} />

        {/* Filigree corner accents */}
        <CornerOrnamentSVG
          size={72}
          opacity={0.16}
          style={{ position:'absolute', top:'84px', left:'14px', zIndex:4, pointerEvents:'none' }}
        />
        <CornerOrnamentSVG
          size={56}
          opacity={0.09}
          flip
          style={{ position:'absolute', bottom:'6px', right:'6px', zIndex:4, pointerEvents:'none' }}
        />

        {/* Floating gold dust */}
        <FloatingParticles count={5} />

        {/* ── LAYER 4 — Typography (floats above all layers) ───────────── */}
        <div className="hist-content-wrap">
          <div className="hist-text-col">

            {/* ✦ THE LEGACY ✦ */}
            <motion.div
              className="hist-eyebrow"
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.55, delay:0.06 }}
            >
              <svg width="13" height="13" viewBox="0 0 120 120" aria-hidden="true"
                   style={{ opacity:0.82, flexShrink:0 }}>
                <g fill="#B8860B">
                  {[0,45,90,135,180,225,270,315].map(a => {
                    const r = (a * Math.PI) / 180;
                    const cx = 60 + 34*Math.cos(r), cy = 60 + 34*Math.sin(r);
                    return <ellipse key={a} cx={cx} cy={cy} rx="9" ry="18"
                                    transform={`rotate(${a+90} ${cx} ${cy})`}/>;
                  })}
                  <circle cx="60" cy="60" r="10"/>
                </g>
              </svg>
              <span className="hist-eyebrow-text">✦&nbsp;&nbsp;The Legacy&nbsp;&nbsp;✦</span>
            </motion.div>

            {/* "The Ancient Story of" */}
            <motion.h1
              className="hist-h1-plain"
              initial={{ opacity:0, y:22 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.72, delay:0.15 }}
            >
              The Ancient Story of
            </motion.h1>

            {/* "Kuchipudi" */}
            <motion.h1
              className="hist-h1-gold"
              initial={{ opacity:0, y:22 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.72, delay:0.28 }}
            >
              Kuchipudi
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              className="hist-rule"
              initial={{ opacity:0, scaleX:0 }}
              animate={{ opacity:1, scaleX:1 }}
              transition={{ duration:0.52, delay:0.42, ease:'easeOut' }}
            />

            {/* Body paragraph */}
            <motion.p
              className="hist-para"
              initial={{ opacity:0, y:14 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.65, delay:0.54 }}
            >
              Kuchipudi is more than a dance form — it is a
              civilizational memory, preserved across centuries
              in the sacred soil of Andhra Pradesh. Discover the
              extraordinary journey of this divine art from
              ancient temples to global stages.
            </motion.p>

          </div>
        </div>

        {/* Subtle gold bottom line */}
        <div className="hist-bottom-rule" aria-hidden="true" />

        {/* ══ ALL SCOPED CSS FOR THE HERO ══════════════════════════════ */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&display=swap');

          /* ─── ROOT ─────────────────────────────────────────────── */
          .hist-hero {
            position: relative;
            min-height: 91vh;
            display: flex;
            align-items: center;
            padding-top: 88px;
            overflow: hidden;
          }

          /* ─── L0 PARCHMENT BASE ─────────────────────────────────── */
          .hist-base {
            position: absolute;
            inset: 0;
            z-index: 0;
            background:
              radial-gradient(ellipse at 10% 28%, rgba(212,160,23,0.09) 0%, transparent 52%),
              radial-gradient(ellipse at 80% 72%, rgba(180,130,10,0.07) 0%, transparent 48%),
              linear-gradient(160deg,
                #F9F3E5 0%,
                #F5EBCF 28%,
                #EEE0B0 58%,
                #F4EAD0 100%
              );
          }

          /* ─── L1 ARTWORK ─────────────────────────────────────────── */
          /*
            Full-bleed: image covers the entire hero.
            object-position: right center  →  crops to the right half
            vertically centred, so the temple (centre of image) is fully
            visible and the blank-parchment left side of the image is
            cropped out — the CSS mask then dissolves what remains.
          */
          .hist-art-wrap {
            position: absolute;
            inset: 0;
            z-index: 1;
          }
          .hist-art-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: right 18%;
            display: block;
            mix-blend-mode: multiply;
            filter: contrast(0.84) saturate(0.68) sepia(0.07) brightness(1.15);
            /* Fade from transparent on the left → fully opaque on the right */
            -webkit-mask-image: linear-gradient(
              to right,
              transparent       0%,
              transparent      28%,
              rgba(0,0,0,0.06) 36%,
              rgba(0,0,0,0.26) 44%,
              rgba(0,0,0,0.60) 55%,
              rgba(0,0,0,0.88) 66%,
              black            78%
            );
            mask-image: linear-gradient(
              to right,
              transparent       0%,
              transparent      28%,
              rgba(0,0,0,0.06) 36%,
              rgba(0,0,0,0.26) 44%,
              rgba(0,0,0,0.60) 55%,
              rgba(0,0,0,0.88) 66%,
              black            78%
            );
          }

          /* ─── L2 ATMOSPHERIC VEILS ──────────────────────────────── */

          /* 2a — Left fog (cream bleeds over where art starts) */
          .hist-veil-left {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
            background: linear-gradient(
              to right,
              #F5EBD0 0%,
              #F5EBD0 20%,
              rgba(245,235,208,0.97) 30%,
              rgba(245,235,208,0.88) 40%,
              rgba(245,235,208,0.62) 52%,
              rgba(245,235,208,0.28) 63%,
              rgba(245,235,208,0.08) 72%,
              transparent           80%
            );
          }

          /* 2b — Radial atmospheric glow centred on text */
          .hist-veil-radial {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
            background: radial-gradient(
              ellipse 58% 85% at 24% 48%,
              rgba(245,235,208,0.40) 0%,
              rgba(245,235,208,0.12) 50%,
              transparent 100%
            );
          }

          /* 2c — Top melt */
          .hist-veil-top {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
            background: linear-gradient(
              to bottom,
              rgba(245,235,208,0.78) 0%,
              rgba(245,235,208,0.28) 10%,
              transparent 20%
            );
          }

          /* 2d — Bottom melt */
          .hist-veil-bottom {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 120px;
            z-index: 2;
            pointer-events: none;
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(240,228,195,0.52)
            );
          }

          /* 2e — Right edge softening */
          .hist-veil-right {
            position: absolute;
            inset: 0;
            z-index: 2;
            pointer-events: none;
            background: linear-gradient(
              to left,
              rgba(232,218,175,0.26) 0%,
              transparent 16%
            );
          }

          /* ─── L3 GHOST SVG DEPTH ────────────────────────────────── */
          .hist-ghost-mandala {
            position: absolute;
            top: 50%;
            left: 2%;
            transform: translateY(-50%);
            z-index: 3;
            pointer-events: none;
          }

          /* ─── L4 CONTENT ────────────────────────────────────────── */
          .hist-content-wrap {
            position: relative;
            z-index: 5;
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 5.5rem 5rem;
            /* Make content wrapper fill the full hero height vertically */
            min-height: inherit;
            display: flex;
            align-items: center;
          }

          .hist-text-col {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            /* Wider column fills left half of the page, closing the gap */
            max-width: 520px;
            width: 42%;
          }

          /* Eyebrow */
          .hist-eyebrow {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }
          .hist-eyebrow-text {
            font-family: 'Cinzel', serif;
            font-size: 0.58rem;
            letter-spacing: 0.28em;
            color: #B8860B;
            text-transform: uppercase;
            font-weight: 500;
          }

          /* H1 line 1 — black serif */
          .hist-h1-plain {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.1rem, 3.55vw, 3.85rem);
            font-weight: 800;
            color: #0e0e0e;
            line-height: 1.09;
            margin: 0 0 0.04rem 0;
            letter-spacing: -0.016em;
            white-space: nowrap;
          }

          /* H1 line 2 — italic gold */
          .hist-h1-gold {
            font-family: 'Cormorant Garamond', 'Playfair Display', serif;
            font-style: italic;
            font-size: clamp(2.75rem, 4.9vw, 5.2rem);
            font-weight: 700;
            line-height: 1.05;
            margin: 0 0 1.5rem 0;
            letter-spacing: 0.01em;
            background: linear-gradient(130deg,
              #7a4e06 0%,
              #B8860B 24%,
              #E8C547 50%,
              #B8860B 76%,
              #7a4e06 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          /* Gold rule */
          .hist-rule {
            width: 52px;
            height: 2px;
            background: linear-gradient(90deg, #8B6008, #E8C547 50%, #8B6008);
            border-radius: 1px;
            margin-bottom: 1.8rem;
            transform-origin: left center;
          }

          /* Body */
          .hist-para {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(0.82rem, 0.96vw, 0.94rem);
            line-height: 1.95;
            color: #3a3a3a;
            max-width: 355px;
            margin: 0;
          }

          /* Gold bottom rule */
          .hist-bottom-rule {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 2px;
            z-index: 6;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(212,160,23,0.26) 18%,
              rgba(212,160,23,0.58) 50%,
              rgba(212,160,23,0.26) 82%,
              transparent
            );
          }

          /* ─── RESPONSIVE ────────────────────────────────────────── */

          @media (max-width: 1100px) {
            .hist-h1-plain  { font-size:clamp(1.85rem,3.1vw,3.1rem); white-space:normal; }
            .hist-h1-gold   { font-size:clamp(2.35rem,4.2vw,4rem); }
            .hist-text-col  { max-width:440px; width:46%; }
            .hist-content-wrap { padding:0 3.5rem 4rem; }
          }

          @media (max-width: 720px) {
            .hist-hero { min-height:auto; padding-top:92px; padding-bottom:2rem; }
            .hist-content-wrap { padding:1rem 1.5rem 2.5rem; align-items:flex-start; }
            .hist-text-col { max-width:100%; width:100%; }
            .hist-h1-plain { font-size:clamp(1.7rem,6.5vw,2.5rem); white-space:normal; }
            .hist-h1-gold  { font-size:clamp(2rem,8vw,3.1rem); }
            .hist-para     { max-width:100%; font-size:0.88rem; }
            .hist-art-img  {
              object-position: 75% center;
              filter: contrast(0.80) saturate(0.58) sepia(0.07) brightness(1.20) !important;
            }
          }
        `}</style>
      </section>

      {/* ── Origin Intro ──────────────────────────────────────────────────── */}
      <section className="heritage-papyrus" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <HeritagePatternBg color="#D4A017" opacity={0.03} />

        {/* Peacock feathers sides */}
        <div style={{ position: 'absolute', left: '-5px', top: '15%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={44} height={160} opacity={0.12} />
        </div>
        <div style={{ position: 'absolute', right: '-5px', top: '20%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={44} height={160} opacity={0.1} />
        </div>
        {/* Corner ornaments */}
        <CornerOrnamentSVG size={80} opacity={0.12} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={80} opacity={0.12} flip style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,280px),1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <LotusSVG size={20} opacity={0.7} />
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>The Origin</p>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                Born in the Sacred Soil of Andhra Pradesh
              </h2>
              <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
              {[
                'Kuchipudi takes its name from the small village of Kuchipudi (Kuchelapuram) in the Krishna district of Andhra Pradesh. For centuries, this village was home to the hereditary community of Brahmin performers — the Bhagavatulus — who kept the art alive as a sacred duty.',
                'Originally performed exclusively during temple festivals as a devotional offering, Kuchipudi was a complete theatrical experience — combining dance, music, drama, and spiritual narration in a unified artistic expression.',
                'The art form is distinguished by its expressive abhinaya, intricate footwork, graceful geometry of the body, and the use of classical Sanskrit and Telugu literary traditions as its scriptural foundation.',
              ].map((para, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--secondary)', marginBottom: '1.25rem' }}>{para}</p>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Andhra Heritage', desc: 'Rooted in the cultural soil of the Godavari and Krishna river deltas — the cradle of Telugu classical arts.', icon: '🏛️' },
                { title: 'Temple Tradition', desc: 'Born as a sacred offering to Lord Venkateswara, performed during Brahmotsavams and festive occasions.', icon: '🛕' },
                { title: 'Living Lineage', desc: 'A tradition passed guru to student across generations — an unbroken chain of classical knowledge and devotion.', icon: '📜' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="heritage-card heritage-card-corners"
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.75rem', cursor: 'default' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '2px', background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }} />
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--secondary)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section transition ornament ───────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(to bottom, #FAF7F2, #1A1A1A)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(212,160,23,0.1), rgba(212,160,23,0.5))' }} />
        <MandalaSVG size={40} opacity={0.6} color="#D4A017" />
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, rgba(212,160,23,0.1), rgba(212,160,23,0.5))' }} />
      </div>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="heritage-section-dark" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <HeritagePatternBg color="#D4A017" opacity={0.022} />
        <FloatingParticles count={10} color="rgba(212,160,23," />

        {/* Background mandalas */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={600} opacity={0.05} className="mandala-spin" />
        </div>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={280} opacity={0.05} className="mandala-spin-reverse" />
        </div>
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={280} opacity={0.05} className="mandala-spin" />
        </div>

        {/* Temple silhouettes on sides */}
        <div style={{ position: 'absolute', left: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.06 }}>
          <TempleSVG width={180} height={240} />
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.05, transform: 'scaleX(-1)' }}>
          <TempleSVG width={150} height={200} />
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '40px', height: '1px', background: 'rgba(212,160,23,0.5)' }} />
              <LotusSVG size={22} color="#D4A017" opacity={0.8} />
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Through the Ages</p>
              <LotusSVG size={22} color="#D4A017" opacity={0.8} />
              <div style={{ width: '40px', height: '1px', background: 'rgba(212,160,23,0.5)' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>
              The Kuchipudi Timeline
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', margin: '0 auto 1.5rem' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto' }}>
              A journey through centuries of devotion, artistry, and cultural evolution.
            </p>
          </div>

          {/* Timeline mobile responsive styles */}
          <style>{`
            .timeline-item { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; margin-bottom: 3rem; align-items: start; }
            .timeline-card-left { margin-right: 1.5rem; }
            .timeline-card-right { margin-left: 1.5rem; }
            .timeline-empty { display: block; }
            @media (max-width: 768px) {
              .timeline-item {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                gap: 0 !important;
                margin-bottom: 2rem !important;
              }
              .timeline-card-left, .timeline-card-right {
                margin: 0 !important;
                width: 100% !important;
              }
              .timeline-empty { display: none !important; }
              .timeline-icon-wrap { padding-top: 0 !important; margin-bottom: 1rem !important; }
            }
          `}</style>

          <div style={{ position: 'relative' }}>
            {/* Timeline vertical line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.5), transparent)', transform: 'translateX(-50%)' }} />

            {HISTORY_TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {i % 2 === 0 ? (
                  <div className="heritage-card timeline-card-left" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,160,23,0.2)', padding: '1.75rem', backdropFilter: 'blur(10px)' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '2px', background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }} />
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.5rem' }}>{item.year}</p>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                  </div>
                ) : <div className="timeline-empty" />}

                <div className="timeline-icon-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '1.75rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4A017, #E8C547)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 0 20px rgba(212,160,23,0.4)', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                </div>

                {i % 2 !== 0 ? (
                  <div className="heritage-card timeline-card-right" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,160,23,0.2)', padding: '1.75rem', backdropFilter: 'blur(10px)' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '2px', background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }} />
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.5rem' }}>{item.year}</p>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>{item.title}</h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
                  </div>
                ) : <div className="timeline-empty" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Recognition ────────────────────────────────────────────── */}
      <section className="heritage-papyrus" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <HeritagePatternBg color="#D4A017" opacity={0.03} />

        {/* Background mandala */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={460} opacity={0.05} className="mandala-spin" />
        </div>

        {/* Dancer silhouettes */}
        <div style={{ position: 'absolute', left: '1rem', bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
          <DancerSilhouetteSVG width={85} height={150} opacity={0.08} />
        </div>
        <div style={{ position: 'absolute', right: '1rem', bottom: 0, pointerEvents: 'none', zIndex: 0, transform: 'scaleX(-1)' }}>
          <DancerSilhouetteSVG width={85} height={150} opacity={0.08} />
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <LotusSVG size={24} opacity={0.6} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Today</p>
            <LotusSVG size={24} opacity={0.6} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Kuchipudi on the World Stage
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, transparent, #D4A017, #E8C547, #D4A017, transparent)', margin: '0 auto 1.5rem' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}>
            From the sacred village of Kuchelapuram to Carnegie Hall, the Lincoln Center, and UNESCO heritage stages — Kuchipudi has earned its place among the world's most refined classical art forms.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {[
              { stat: '2000+ Years', label: 'of Living Tradition' },
              { stat: 'UNESCO',      label: 'Intangible Heritage' },
              { stat: '40+ Countries', label: 'Global Presence' },
              { stat: '8 Classical', label: 'Forms of India' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="heritage-card stat-tile"
                style={{ padding: '2rem', textAlign: 'center', cursor: 'default' }}
              >
                <LotusSVG size={32} opacity={0.08} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.4rem', fontWeight: 700, background: 'linear-gradient(135deg, #D4A017, #E8C547)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.5rem' }}>{item.stat}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--secondary)' }}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}