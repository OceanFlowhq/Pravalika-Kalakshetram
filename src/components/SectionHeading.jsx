// src/components/SectionHeading.jsx
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        textAlign: center ? 'center' : 'left',
        marginBottom: '4rem',
      }}
    >
      {eyebrow && (
        <p style={{
          fontFamily: 'var(--font-cinzel)',
          fontSize: '0.65rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '1rem',
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        lineHeight: 1.2,
        color: light ? '#FFFFFF' : 'var(--dark)',
        marginBottom: '1rem',
      }}>
        {title}
      </h2>
      <div style={{
        width: '50px', height: '2px',
        background: 'linear-gradient(135deg, #D4A017, #E8C547, #B8860B)',
        margin: center ? '0 auto 1.5rem' : '0 0 1.5rem',
      }} />
      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.8,
          color: light ? 'rgba(255,255,255,0.65)' : 'var(--secondary)',
          maxWidth: '600px',
          margin: center ? '0 auto' : '0',
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
