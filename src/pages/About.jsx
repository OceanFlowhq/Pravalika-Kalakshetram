// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import FloatingParticles from '../components/FloatingParticles';
import { SITE } from '../data/siteData';

const timeline = [
  { year: '2000', event: 'Began formal Kuchipudi training under revered classical gurus in Andhra Pradesh.' },
  { year: '2005', event: 'Completed advanced training and participated in state-level classical dance competitions.' },
  { year: '2008', event: 'Performed at national cultural festivals, earning recognition from Sangeet Natak Akademi.' },
  { year: '2010', event: 'Founded Pravalika Kuchipudi Kalakshetram to share the art form with future generations.' },
  { year: '2015', event: 'Academy celebrated 5 years — 100+ students trained, 20+ arangetrams conducted.' },
  { year: '2020', event: 'Expanded to online and hybrid teaching, reaching students across India.' },
  { year: '2026', event: 'Pravalika Kuchipudi Kalakshetram stands as a beacon of classical excellence in Telangana.' },
];

const values = [
  { title: 'Authenticity', desc: 'We preserve the classical grammar of Kuchipudi — every mudra, every rhythm, rooted in tradition.' },
  { title: 'Devotion', desc: 'Dance is an offering. We cultivate the spirit of bhakti alongside technical mastery.' },
  { title: 'Discipline', desc: 'True artistry demands commitment. We nurture both the artist and the art form with equal dedication.' },
  { title: 'Community', desc: 'Our academy is a family — students, parents, and guru growing together in one cultural journey.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '60vh',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 60%, #1A1A1A 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '4rem',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,160,23,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <FloatingParticles count={15} color="rgba(212,160,23," />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            ✦ Our Story ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              maxWidth: '800px',
              marginBottom: '1.5rem',
            }}
          >
            The Vision of <em>Guru Pravalika Kuppili</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)' }}
          />
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'center',
          }}>
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'absolute', top: '-20px', left: '-20px',
                width: '100%', height: '100%',
                border: '2px solid rgba(212,160,23,0.3)',
                pointerEvents: 'none',
              }} />
              <div style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(135deg, #1A1A1A, #2D2D2D)',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img
                  src="/guru-pravalika.jpg"
                  alt="Guru Pravalika Kuppili"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:1.5rem;padding:3rem;">
                        <div style="font-size:5rem">🙏</div>
                        <div style="text-align:center">
                          <p style="font-family:var(--font-cinzel);color:#D4A017;font-size:1.1rem;letter-spacing:0.1em;">Guru Pravalika Kuppili</p>
                          <p style="font-family:var(--font-body);color:rgba(255,255,255,0.5);font-size:0.8rem;margin-top:0.5rem;">Classical Kuchipudi Artist</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                {/* Gold overlay at bottom */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(212,160,23,0.15), transparent)',
                }} />
              </div>
              {/* Name tag */}
              <div style={{
                position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
                background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                padding: '1.25rem 1.75rem',
                boxShadow: '0 15px 40px rgba(212,160,23,0.3)',
              }}>
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em' }}>FOUNDER & GURU</p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: '#fff', fontWeight: 700 }}>Pravalika Kuppili</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: '0.65rem', letterSpacing: '0.25em',
                color: 'var(--gold)', textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>Biography</p>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 700,
                color: 'var(--dark)',
                lineHeight: 1.25,
                marginBottom: '1.5rem',
              }}>
                A Lifetime Devoted to the Sacred Art of Kuchipudi
              </h2>
              <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '2rem' }} />
              {[
                'Guru Pravalika Kuppili is a classically trained Kuchipudi artist whose journey began in childhood — drawn irresistibly to the grace, devotion, and discipline of this ancient Andhra dance form.',
                'Trained under celebrated masters, she mastered not just the technical vocabulary of Kuchipudi, but its soul — the bhava, rasa, and the spiritual surrender that makes it a living art form.',
                'In 2010, she founded Pravalika Kuchipudi Kalakshetram with a singular mission: to create a space where authentic classical training is made accessible, nurturing artists who carry this tradition forward with pride and artistry.',
                'Today, Guru Pravalika\'s students perform on national stages, win prestigious awards, and become passionate ambassadors of India\'s classical heritage.',
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.9,
                  color: 'var(--secondary)',
                  marginBottom: '1.25rem',
                }}>
                  {para}
                </p>
              ))}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <a href={`tel:${SITE.phone}`} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--gold)', textDecoration: 'none',
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                }}>
                  <FaPhone size={14} /> {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: 'var(--gold)', textDecoration: 'none',
                  fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                }}>
                  <FaEnvelope size={14} /> {SITE.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section style={{ padding: '7rem 0', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <SectionHeading
            eyebrow="Purpose & Philosophy"
            title="Our Mission, Vision & Values"
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
          }}>
            {[
              {
                label: 'Mission',
                icon: '🎯',
                text: 'To provide authentic, lineage-based Kuchipudi education that preserves classical tradition while nurturing each student\'s unique artistic voice and cultural identity.',
              },
              {
                label: 'Vision',
                icon: '✨',
                text: 'To be the most respected Kuchipudi institution in India — where every student becomes a skilled artist, a proud cultural ambassador, and a lifelong student of this divine art.',
              },
              {
                label: 'Teaching Philosophy',
                icon: '🪔',
                text: 'We believe dance is a spiritual practice. Our teaching method integrates technique, expression, rhythm, and devotion — creating artists who feel the dance, not just perform it.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(212,160,23,0.15)',
                  padding: '2.5rem',
                  transition: 'all 0.4s ease',
                }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(212,160,23,0.1)' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: 'var(--font-cinzel)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}>{item.label}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: 1.9,
                  color: 'var(--secondary)',
                }}>{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <SectionHeading eyebrow="Core Values" title="What We Stand For" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  padding: '2rem',
                  borderLeft: '3px solid var(--gold)',
                  background: '#FFFFFF',
                }}
              >
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: '0.75rem',
                }}>{v.title}</h4>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  lineHeight: 1.8,
                  color: 'var(--secondary)',
                }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{
        padding: '7rem 0',
        background: 'linear-gradient(135deg, #1A1A1A, #0D0D0D)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <FloatingParticles count={10} color="rgba(212,160,23," />
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <SectionHeading
            eyebrow="The Journey"
            title="Guru Pravalika's Dance Timeline"
            light
          />
          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.4), transparent)',
              transform: 'translateX(-50%)',
            }} />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '3rem',
                  position: 'relative',
                }}
              >
                <div style={{
                  width: 'calc(50% - 2rem)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(212,160,23,0.2)',
                  padding: '1.5rem',
                  backdropFilter: 'blur(10px)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '0.8rem',
                    color: 'var(--gold)',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}>{item.year}</p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    lineHeight: 1.8,
                    color: 'rgba(255,255,255,0.65)',
                  }}>{item.event}</p>
                </div>
                {/* Dot on timeline */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '1.5rem',
                  transform: 'translateX(-50%)',
                  width: '12px', height: '12px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  boxShadow: '0 0 15px rgba(212,160,23,0.5)',
                }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: '#fff', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Ready to Dance?
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--dark)', marginBottom: '2rem' }}>
            Begin Your Classical Journey With Us
          </h2>
          <Link to="/contact" className="btn-luxury">
            <span>Contact Guru Pravalika</span>
            <FaArrowRight size={10} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
