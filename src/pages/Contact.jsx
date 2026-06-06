// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { SITE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '55vh',
        background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 60%, #1A1A1A 100%)',
        display: 'flex', alignItems: 'center',
        paddingTop: '110px', paddingBottom: '4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(212,160,23,0.07) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <FloatingParticles count={12} color="rgba(212,160,23," />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}
          >✦ Connect With Us ✦</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, maxWidth: '700px', marginBottom: '1.5rem' }}
          >
            Begin Your Journey With a Conversation
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }}
          />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', maxWidth: '580px' }}
          >
            Reach out to Guru Pravalika Kuppili to inquire about our programs, schedule a visit, or enroll in a batch.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ padding: '7rem 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '5rem',
          }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Contact Information
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
                Guru Pravalika Kuppili
              </h2>
              <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '2.5rem' }} />

              {[
                {
                  icon: <FaPhone />,
                  label: 'Phone',
                  value: SITE.phone,
                  href: `tel:${SITE.phone}`,
                },
                {
                  icon: <FaEnvelope />,
                  label: 'Email',
                  value: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  target={contact.target || '_self'}
                  rel={contact.target === '_blank' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{
                    display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                    textDecoration: 'none',
                    padding: '1.5rem',
                    border: '1px solid rgba(212,160,23,0.12)',
                    marginBottom: '1rem',
                    background: 'rgba(250,247,242,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.4)'; e.currentTarget.style.background = 'rgba(250,247,242,0.9)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.12)'; e.currentTarget.style.background = 'rgba(250,247,242,0.5)'; }}
                >
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '0.9rem',
                    flexShrink: 0,
                  }}>
                    {contact.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      {contact.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--dark)', wordBreak: 'break-all' }}>
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  padding: '1.5rem',
                  border: '1px solid rgba(212,160,23,0.12)',
                  background: 'rgba(250,247,242,0.5)',
                }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '0.9rem',
                  flexShrink: 0,
                }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Address
                  </p>
                  <address style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                    lineHeight: 1.9, color: 'var(--secondary)',
                    fontStyle: 'normal',
                  }}>
                    FLAT NO 68, SIXTH FLOOR,<br />
                    GENIOUS ELITE,<br />
                    SOUTHERN BLOCK RAIDURG NAVKHALSA VILLAGE,<br />
                    NEAR MALKAM CHERUVU,<br />
                    SERILINGAMPALLY MANDAL,<br />
                    VTC: Raidurg NowKhalsa,<br />
                    PO: Gachibowli,<br />
                    District: K.V. Rangareddy,<br />
                    State: Telangana,<br />
                    PIN Code: 500032
                  </address>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    minHeight: '400px', textAlign: 'center', gap: '1.5rem',
                    background: 'var(--ivory)', border: '1px solid rgba(212,160,23,0.2)', padding: '3rem',
                  }}
                >
                  <div style={{
                    width: '70px', height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #D4A017, #E8C547)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.75rem', color: '#fff',
                  }}>
                    <FaCheck />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--dark)', fontWeight: 700 }}>
                    Message Received!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--secondary)', lineHeight: 1.8 }}>
                    Thank you for reaching out. Guru Pravalika will respond to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', program: '', message: '' }); }}
                    className="btn-luxury"
                  >
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      Send an Inquiry
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem' }}>
                      Get In Touch
                    </h3>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="luxury-input"
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="luxury-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Program of Interest
                    </label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="luxury-input"
                    >
                      <option value="">Select a Program</option>
                      <option>Beginner Program</option>
                      <option>Intermediate Program</option>
                      <option>Advanced Program</option>
                      <option>Arangetram Preparation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself and your dance aspirations..."
                      rows={5}
                      className="luxury-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-luxury"
                    style={{ justifyContent: 'center', opacity: loading ? 0.8 : 1 }}
                  >
                    <span>{loading ? 'Sending...' : 'Send Inquiry'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 0 7rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <SectionHeading
            eyebrow="Find Us"
            title="Visit the Academy"
            subtitle="Located in the vibrant Gachibowli area of Hyderabad, Telangana."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              border: '2px solid rgba(212,160,23,0.2)',
              overflow: 'hidden',
              boxShadow: '0 20px 80px rgba(0,0,0,0.08)',
            }}
          >
            <iframe
              title="Pravalika Kuchipudi Kalakshetram Location"
              src="https://maps.google.com/maps?q=Genious%20Elite,%20Near%20Malkam%20Cheruvu,%20Raidurg,%20Gachibowli,%20Telangana%20500032&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
