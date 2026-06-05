// src/pages/Courses.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { COURSES, FAQS } from '../data/siteData';
import SectionHeading from '../components/SectionHeading';
import FloatingParticles from '../components/FloatingParticles';

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        position: 'relative',
        background: '#FFFFFF',
        border: course.featured ? '2px solid rgba(212,160,23,0.5)' : '1px solid rgba(212,160,23,0.15)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        boxShadow: course.featured ? '0 20px 60px rgba(212,160,23,0.12)' : 'none',
        transition: 'all 0.4s ease',
      }}
      whileHover={{ y: -8, boxShadow: '0 30px 80px rgba(212,160,23,0.15)' }}
    >
      {/* Featured badge */}
      {course.featured && (
        <div style={{
          position: 'absolute', top: '1.5rem', right: '-2rem',
          background: 'linear-gradient(135deg, #D4A017, #E8C547)',
          color: '#fff',
          fontFamily: 'var(--font-cinzel)',
          fontSize: '0.55rem',
          letterSpacing: '0.15em',
          padding: '0.4rem 3rem',
          transform: 'rotate(45deg)',
          transformOrigin: 'center',
          top: '2rem', right: '-2.2rem',
        }}>
          POPULAR
        </div>
      )}

      {/* Header */}
      <div style={{
        padding: '2.5rem 2.5rem 2rem',
        background: course.featured
          ? 'linear-gradient(135deg, rgba(212,160,23,0.08), rgba(232,197,71,0.04))'
          : 'rgba(250,247,242,0.5)',
        borderBottom: '1px solid rgba(212,160,23,0.1)',
      }}>
        <p style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>{course.subtitle}</p>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'var(--dark)',
          marginBottom: '1rem',
        }}>{course.level}</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: '⏱', value: course.duration },
            { label: '📅', value: course.sessions },
          ].map((info, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              color: 'var(--secondary)',
              background: 'rgba(212,160,23,0.06)',
              padding: '0.3rem 0.75rem',
              border: '1px solid rgba(212,160,23,0.15)',
            }}>
              {info.label} {info.value}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ padding: '2rem 2.5rem', flex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: 'var(--secondary)',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
        }}>What You'll Learn</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {course.features.map((feat, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <span style={{
                width: '18px', height: '18px',
                background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '0.55rem',
                flexShrink: 0, marginTop: '1px',
              }}>
                <FaCheck />
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--secondary)', lineHeight: 1.6 }}>
                {feat}
              </span>
            </li>
          ))}
        </ul>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          lineHeight: 1.7,
          color: 'var(--secondary)',
          fontStyle: 'italic',
          padding: '1rem',
          background: 'rgba(250,247,242,0.8)',
          borderLeft: '3px solid var(--gold)',
        }}>
          {course.ideal}
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: '1.5rem 2.5rem 2.5rem' }}>
        <Link to="/contact" className="btn-luxury" style={{ width: '100%', justifyContent: 'center' }}>
          <span>Enroll in {course.level}</span>
          <FaArrowRight size={10} />
        </Link>
      </div>
    </motion.div>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      style={{
        border: '1px solid rgba(212,160,23,0.15)',
        marginBottom: '0.75rem',
        overflow: 'hidden',
        background: '#FFFFFF',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--dark)',
          lineHeight: 1.4,
        }}>{item.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: 'var(--gold)', flexShrink: 0 }}
        >
          <FaChevronDown />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
              color: 'var(--secondary)',
              padding: '0 2rem 1.5rem',
            }}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '55vh',
        background: 'var(--ivory)',
        display: 'flex', alignItems: 'center',
        paddingTop: '110px', paddingBottom: '4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(212,160,23,0.06) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
        <FloatingParticles count={10} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}
          >
            ✦ Programs & Training ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.15, maxWidth: '700px', marginBottom: '1.5rem' }}
          >
            Find Your Path in <em>Classical Kuchipudi</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }}
          />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'var(--secondary)', maxWidth: '580px' }}
          >
            Three carefully structured programs — designed for every stage of your Kuchipudi journey, from your very first step to your grand debut on stage.
          </motion.p>
        </div>
      </section>

      {/* Course Cards */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <SectionHeading
            eyebrow="Our Programs"
            title="Training Programs"
            subtitle="Each program is crafted with authentic classical methodology, ensuring every student grows with depth and artistry."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            {COURSES.map((course, i) => (
              <CourseCard key={i} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '7rem 0', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <SectionHeading
            eyebrow="How To Join"
            title="Your Enrollment Journey"
            subtitle="Joining Pravalika Kuchipudi Kalakshetram is a simple, welcoming process."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
          }}>
            {[
              { step: '01', title: 'Reach Out', desc: 'Contact us via phone, email, or the inquiry form.' },
              { step: '02', title: 'Assessment', desc: 'A brief assessment to understand your background and goals.' },
              { step: '03', title: 'Placement', desc: 'We place you in the right batch and program level.' },
              { step: '04', title: 'Begin', desc: 'Start your classical journey with our dedicated mentorship.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{ textAlign: 'center', padding: '2rem 1rem' }}
              >
                <div style={{
                  width: '60px', height: '60px',
                  margin: '0 auto 1.25rem',
                  border: '2px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-cinzel)',
                    fontSize: '1rem', fontWeight: 700,
                    color: 'var(--gold)',
                  }}>{step.step}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{step.title}</h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--secondary)' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <SectionHeading
            eyebrow="Questions Answered"
            title="Frequently Asked Questions"
          />
          {FAQS.map((faq, i) => (
            <FAQItem key={i} item={faq} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #D4A017 0%, #E8C547 50%, #B8860B 100%)',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '1rem' }}>
            Ready to Start Your Kuchipudi Story?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1rem' }}>
            Contact Guru Pravalika today and take your first step toward classical excellence.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '1rem 2.5rem',
            background: '#FFFFFF',
            color: 'var(--gold)',
            fontFamily: 'var(--font-cinzel)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}>
            <span>Enroll Today</span>
            <FaArrowRight size={10} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
