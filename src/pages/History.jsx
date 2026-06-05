// src/pages/History.jsx
import { motion } from 'framer-motion';
import { HISTORY_TIMELINE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';

export default function History() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '60vh',
        background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EFE6 50%, #FAF7F2 100%)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(212,160,23,0.07) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <FloatingParticles count={12} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.65rem', letterSpacing: '0.3em',
              color: 'var(--gold)', textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            ✦ The Legacy ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              color: 'var(--dark)',
              lineHeight: 1.15,
              maxWidth: '700px',
              marginBottom: '1.5rem',
            }}
          >
            The Ancient Story of <em style={{ color: 'var(--gold)' }}>Kuchipudi</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }}
          />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              lineHeight: 1.9, color: 'var(--secondary)', maxWidth: '600px',
            }}
          >
            Kuchipudi is more than a dance form — it is a civilizational memory, preserved across centuries in the sacred soil of Andhra Pradesh. Discover the extraordinary journey of this divine art from ancient temples to global stages.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                The Origin
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                Born in the Sacred Soil of Andhra Pradesh
              </h2>
              <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
              {[
                'Kuchipudi takes its name from the small village of Kuchipudi (Kuchelapuram) in the Krishna district of Andhra Pradesh. For centuries, this village was home to the hereditary community of Brahmin performers — the Bhagavatulus — who kept the art alive as a sacred duty.',
                'Originally performed exclusively during temple festivals as a devotional offering, Kuchipudi was a complete theatrical experience — combining dance, music, drama, and spiritual narration in a unified artistic expression.',
                'The art form is distinguished by its expressive abhinaya, intricate footwork, graceful geometry of the body, and the use of classical Sanskrit and Telugu literary traditions as its scriptural foundation.',
              ].map((para, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
              }}
            >
              {[
                { title: 'Andhra Heritage', desc: 'Rooted in the cultural soil of the Godavari and Krishna river deltas — the cradle of Telugu classical arts.', icon: '🏛️' },
                { title: 'Temple Tradition', desc: 'Born as a sacred offering to Lord Venkateswara, performed during Brahmotsavams and festive occasions.', icon: '🛕' },
                { title: 'Living Lineage', desc: 'A tradition passed guru to student across generations — an unbroken chain of classical knowledge and devotion.', icon: '📜' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                    padding: '1.75rem',
                    background: 'var(--ivory)',
                    border: '1px solid rgba(212,160,23,0.12)',
                  }}
                >
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

      {/* Interactive Timeline */}
      <section style={{
        padding: '7rem 0',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 50%, #1A1A1A 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <FloatingParticles count={10} color="rgba(212,160,23," />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <SectionHeading
            eyebrow="Through the Ages"
            title="The Kuchipudi Timeline"
            subtitle="A journey through centuries of devotion, artistry, and cultural evolution."
            light
          />

          <div style={{ position: 'relative' }}>
            {/* Timeline vertical line */}
            <div style={{
              position: 'absolute',
              left: '50%', top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.5), transparent)',
              transform: 'translateX(-50%)',
            }} />

            {HISTORY_TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 60px 1fr',
                  gap: '0',
                  marginBottom: '3rem',
                  alignItems: 'start',
                }}
              >
                {/* Left content (alternating) */}
                {i % 2 === 0 ? (
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(212,160,23,0.2)',
                    padding: '1.75rem',
                    backdropFilter: 'blur(10px)',
                    marginRight: '1.5rem',
                  }}>
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.5rem' }}>
                      {item.year}
                    </p>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
                      {item.desc}
                    </p>
                  </div>
                ) : <div />}

                {/* Center icon */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '1.75rem' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 0 20px rgba(212,160,23,0.4)',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                </div>

                {/* Right content (alternating) */}
                {i % 2 !== 0 ? (
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(212,160,23,0.2)',
                    padding: '1.75rem',
                    backdropFilter: 'blur(10px)',
                    marginLeft: '1.5rem',
                  }}>
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '0.5rem' }}>
                      {item.year}
                    </p>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
                      {item.desc}
                    </p>
                  </div>
                ) : <div />}
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .timeline-grid { grid-template-columns: 40px 1fr !important; }
          }
        `}</style>
      </section>

      {/* Global Recognition */}
      <section style={{ padding: '7rem 0', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <SectionHeading
            eyebrow="Today"
            title="Kuchipudi on the World Stage"
            subtitle="From the sacred village of Kuchelapuram to Carnegie Hall, the Lincoln Center, and UNESCO heritage stages — Kuchipudi has earned its place among the world's most refined classical art forms."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { stat: '2000+ Years', label: 'of Living Tradition' },
              { stat: 'UNESCO', label: 'Intangible Heritage' },
              { stat: '40+ Countries', label: 'Global Presence' },
              { stat: '8 Classical', label: 'Forms of India' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(212,160,23,0.15)',
                  textAlign: 'center',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '1.4rem', fontWeight: 700,
                  background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                }}>{item.stat}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--secondary)' }}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
