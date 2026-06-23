// src/pages/History.jsx
import { motion } from 'framer-motion';
import { HISTORY_TIMELINE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';
import {
  MandalaSVG, TempleSVG, LotusSVG, BellSVG, PeacockFeatherSVG,
  DancerSilhouetteSVG, CornerOrnamentSVG, OrnamentalDivider, HeritagePatternBg,
} from '../components/HeritageDecor';

export default function History() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="heritage-papyrus" style={{
        minHeight: '62vh',
        display: 'flex', alignItems: 'center',
        paddingTop: '110px', paddingBottom: '4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <HeritagePatternBg color="#D4A017" opacity={0.035} />

        {/* Pravalika heritage portrait — right side, subtle */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', backgroundImage: 'url(/pravalika-heritage-history.png)', backgroundSize: 'cover', backgroundPosition: 'center right', opacity: 0.17, pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '58%', height: '100%', background: 'linear-gradient(to right, #F2E5C5 55%, transparent)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Temple silhouette — left background */}
        <div style={{ position: 'absolute', right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
          <TempleSVG width={220} height={290} opacity={0.06} />
        </div>

        {/* Large background mandala */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={340} opacity={0.06} className="mandala-spin-reverse" />
        </div>

        {/* Corner ornaments */}
        <CornerOrnamentSVG size={85} opacity={0.14} style={{ position: 'absolute', top: '80px', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={85} opacity={0.14} flip style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

        {/* Hanging bells */}
        <div style={{ position: 'absolute', top: '80px', right: '8%', display: 'flex', gap: '2.5rem', pointerEvents: 'none', zIndex: 0 }}>
          {[0,1].map(i => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '1px', height: `${28 + i*14}px`, background: 'rgba(212,160,23,0.25)' }} />
              <BellSVG width={16} height={26} opacity={0.16} className={`bell-swing-${i+1}`} />
            </div>
          ))}
        </div>

        <FloatingParticles count={10} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <LotusSVG size={22} opacity={0.7} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>✦ The Legacy ✦</p>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.15, maxWidth: '700px', marginBottom: '1.5rem' }}
          >
            The Ancient Story of <em style={{ color: 'var(--gold)' }}>Kuchipudi</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'var(--secondary)', maxWidth: '600px' }}
          >
            Kuchipudi is more than a dance form — it is a civilizational memory, preserved across centuries in the sacred soil of Andhra Pradesh. Discover the extraordinary journey of this divine art from ancient temples to global stages.
          </motion.p>
        </div>

        {/* Bottom gold border strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.4) 30%, rgba(212,160,23,0.6) 50%, rgba(212,160,23,0.4) 70%, transparent)' }} />
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
              { stat: 'UNESCO', label: 'Intangible Heritage' },
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
