// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/siteData';
import FloatingParticles from '../components/FloatingParticles';
import {
  MandalaSVG, LotusSVG, BellSVG, CornerOrnamentSVG, OrnamentalDivider,
  HeritagePatternBg, DancerSilhouetteSVG, TempleSVG, PeacockFeatherSVG,
} from '../components/HeritageDecor';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) { setError('Please enter your full name.'); return; }
    if (!form.phone.trim()) { setError('Please enter your phone number.'); return; }
    const phoneRegex = /^[+]?[\d\s-]{7,15}$/;
    if (!phoneRegex.test(form.phone.trim())) { setError('Please enter a valid phone number.'); return; }
    if (!form.email.trim()) { setError('Please enter your email address.'); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) { setError('Please enter a valid email address.'); return; }

    const messageContent = `🪔━━━━━━━━━━━━━━━━━━🪔

✨ *PRAVALIKA KUCHIPUDI KALAKSHETRAM* ✨

🌸 *A New Inquiry Has Arrived*

━━━━━━━━━━━━━━━━━━

👤 *Name*
${form.name.trim()}

📞 *Phone Number*
${form.phone.trim()}

📧 *Email Address*
${form.email.trim()}

💬 *Message*

"${form.message.trim() || 'No message provided.'}"

━━━━━━━━━━━━━━━━━━

🎭 *Source*
Official Academy Website

🌿 *Where Tradition Meets Expression*

🙏 Thank you for your interest in preserving and celebrating the timeless beauty of Kuchipudi.

🪔━━━━━━━━━━━━━━━━━━🪔`;

    const encodedMessage = encodeURIComponent(messageContent);
    const whatsappUrl = `https://wa.me/917993870126?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="heritage-section-dark" style={{
        minHeight: '56vh',
        display: 'flex', alignItems: 'center',
        paddingTop: '110px', paddingBottom: '4rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <HeritagePatternBg color="#D4A017" opacity={0.022} />
        <FloatingParticles count={12} color="rgba(212,160,23," />

        {/* Pravalika heritage contact art — right side, clearly visible */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', backgroundImage: 'url(/pravalika-heritage-contact.png)', backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.5, pointerEvents: 'none', zIndex: 0 }} />
        {/* Soft fade from left so text area stays readable */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: 'linear-gradient(to right, #0D0D0D 70%, transparent)', pointerEvents: 'none', zIndex: 0 }} />
        {/* Dark vignette right edge */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '20%', height: '100%', background: 'linear-gradient(to left, #0D0D0D 0%, transparent)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Large mandala center-right */}
        <div style={{ position: 'absolute', top: '50%', right: '-60px', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={380} opacity={0.08} className="mandala-spin-reverse" />
        </div>

        {/* Corner ornaments */}
        <CornerOrnamentSVG size={85} opacity={0.18} style={{ position: 'absolute', top: '80px', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={85} opacity={0.18} flip style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

        {/* Hanging bells left */}
        <div style={{ position: 'absolute', top: '80px', left: '12%', display: 'flex', gap: '3rem', pointerEvents: 'none', zIndex: 0 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '1px', height: `${24 + i*12}px`, background: 'rgba(212,160,23,0.22)' }} />
              <BellSVG width={14} height={22} opacity={0.2} className={`bell-swing-${i+1}`} />
            </div>
          ))}
        </div>

        {/* Dancer silhouette right side */}
        <div style={{ position: 'absolute', right: '5%', bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
          <DancerSilhouetteSVG width={80} height={140} color="#D4A017" opacity={0.1} />
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <LotusSVG size={22} color="#D4A017" opacity={0.8} />
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>✦ Connect With Us ✦</p>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15, maxWidth: '700px', marginBottom: '1.5rem' }}
          >
            Begin Your Journey With a Conversation
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '60px', height: '2px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', marginBottom: '1.5rem' }} />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.55)', maxWidth: '580px' }}
          >
            Reach out to Guru Pravalika Kuppili to learn more about Kuchipudi, schedule a visit, or connect with the academy.
          </motion.p>
        </div>

        {/* Bottom gold strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.4) 30%, rgba(212,160,23,0.6) 50%, rgba(212,160,23,0.4) 70%, transparent)' }} />
      </section>

      {/* ── Main Contact Section ─────────────────────────────────────────── */}
      <section className="heritage-papyrus" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <HeritagePatternBg color="#D4A017" opacity={0.03} />

        {/* Background mandala — center left */}
        <div style={{ position: 'absolute', top: '50%', left: '-100px', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={380} opacity={0.05} className="mandala-spin" />
        </div>
        {/* Background mandala — right */}
        <div style={{ position: 'absolute', top: '30%', right: '-80px', pointerEvents: 'none', zIndex: 0 }}>
          <MandalaSVG size={280} opacity={0.05} className="mandala-spin-reverse" />
        </div>

        {/* Peacock feathers */}
        <div style={{ position: 'absolute', right: '-8px', top: '10%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={42} height={150} opacity={0.1} />
        </div>
        <div style={{ position: 'absolute', left: '-8px', bottom: '10%', pointerEvents: 'none', zIndex: 0 }}>
          <PeacockFeatherSVG width={36} height={120} opacity={0.08} />
        </div>

        {/* Corner ornaments */}
        <CornerOrnamentSVG size={80} opacity={0.12} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />
        <CornerOrnamentSVG size={80} opacity={0.12} flip style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,280px),1fr))', gap: '5rem' }}>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <LotusSVG size={20} opacity={0.7} />
                <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Contact Information</p>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
                Guru Pravalika Kuppili
              </h2>
              <OrnamentalDivider style={{ maxWidth: '200px', marginBottom: '2.5rem' }} />

              {[
                { icon: <FaPhone />, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: <FaEnvelope />, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                  className="heritage-card"
                  style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', textDecoration: 'none', padding: '1.5rem', marginBottom: '1rem', cursor: 'pointer' }}
                >
                  <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', flexShrink: 0 }}>
                    {contact.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{contact.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--dark)', wordBreak: 'break-all' }}>{contact.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Address card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="heritage-card"
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem' }}
              >
                <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #D4A017, #E8C547)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', flexShrink: 0 }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Address</p>
                  <address style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.9, color: 'var(--secondary)', fontStyle: 'normal' }}>
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
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              {/* Form decorative background */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', pointerEvents: 'none', zIndex: 0 }}>
                  <MandalaSVG size={120} opacity={0.08} className="mandala-spin" />
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                      <LotusSVG size={18} opacity={0.6} />
                      <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Send a Message</p>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>Get In Touch</h3>
                    <OrnamentalDivider style={{ maxWidth: '160px', marginBottom: '1rem' }} />
                  </div>

                  {error && (
                    <div style={{ padding: '0.75rem 1rem', background: 'rgba(220,53,69,0.05)', borderLeft: '3px solid #dc3545', color: '#dc3545', fontSize: '0.85rem', fontFamily: 'var(--font-body)' }}>
                      {error}
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="luxury-input" />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone" className="luxury-input" />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="luxury-input" />
                  </div>

                  <div>
                    <label style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--secondary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about yourself and your dance aspirations..." rows={5} className="luxury-input" style={{ resize: 'vertical' }} />
                  </div>

                  <button type="submit" className="btn-luxury" style={{ justifyContent: 'center' }}>
                    <FaWhatsapp style={{ fontSize: '1.2rem', marginRight: '0.5rem' }} />
                    <span>SEND ON WHATSAPP</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map Section ──────────────────────────────────────────────────── */}
      <section className="heritage-papyrus" style={{ padding: '0 0 7rem', position: 'relative', overflow: 'hidden' }}>
        <HeritagePatternBg color="#D4A017" opacity={0.025} />

        {/* Dancer silhouettes flanking the map */}
        <div style={{ position: 'absolute', left: '1rem', bottom: '2rem', pointerEvents: 'none', zIndex: 0 }}>
          <DancerSilhouetteSVG width={75} height={130} opacity={0.08} />
        </div>
        <div style={{ position: 'absolute', right: '1rem', bottom: '2rem', pointerEvents: 'none', zIndex: 0, transform: 'scaleX(-1)' }}>
          <DancerSilhouetteSVG width={75} height={130} opacity={0.08} />
        </div>

        {/* Corner ornaments */}
        <CornerOrnamentSVG size={75} opacity={0.11} style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg)' }} />
        <CornerOrnamentSVG size={75} opacity={0.11} flip style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg) scaleX(-1)' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          {/* Map section heading */}
          <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
              <LotusSVG size={24} opacity={0.6} />
              <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', margin: 0 }}>Find Us</p>
              <LotusSVG size={24} opacity={0.6} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.2 }}>Visit the Academy</h2>
            <div style={{ width: '50px', height: '2px', background: 'linear-gradient(135deg, transparent, #D4A017, #E8C547, #D4A017, transparent)', margin: '0 auto 1rem' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.8, color: 'var(--secondary)', maxWidth: '500px', margin: '0 auto' }}>
              Located in the vibrant Gachibowli area of Hyderabad, Telangana.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="heritage-frame"
            style={{ border: '2px solid rgba(212,160,23,0.2)', overflow: 'hidden', boxShadow: '0 20px 80px rgba(0,0,0,0.08)' }}
          >
            <iframe
              title="Pravalika Kuchipudi Kalakshetram Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7613.730966369274!2d78.38412269999999!3d17.418242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97eb36e67bff%3A0x73193a386776c2d7!2sGenious%20Elite!5e0!3m2!1sen!2sin!4v1780918541350!5m2!1sen!2sin"
              width="100%" height="500"
              style={{ border: 0, display: 'block', width: '100%' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
