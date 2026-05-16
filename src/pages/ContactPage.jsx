import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';

// EMAILJS CONFIGURATION
// These are now handled via environment variables for better security and flexibility
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID_ORG = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORG;
const EMAILJS_TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SITE_NAME = "Hotel Mitra";

// Initialize EmailJS with Public Key
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
  console.log('EmailJS Initialized with Public Key');
} else {
  console.warn('EmailJS Public Key is missing! Check your .env file.');
}

const ContactPage = () => {
  const observerRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Debugging logs (Remove in production)
    console.log('Using Service ID:', EMAILJS_SERVICE_ID ? 'Loaded ✅' : 'Missing ❌');
    console.log('Using Template ID:', EMAILJS_TEMPLATE_ID_ORG ? 'Loaded ✅' : 'Missing ❌');

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const hotelName = formData.get('hotelName');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');

    const now = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Parameters for "Welcome to Restron Mitra" (User Confirmation)
    // Screenshot 1: expects {{user_email}} for recipient and {{owner_name}} in body.
    const userParams = {
      owner_name: name,
      user_email: email,
      site_name: SITE_NAME,
    };

    // Parameters for "Contact Us" (Admin Inquiry)
    // Screenshot 2: expects {{to_email}} for recipient and others in body.
    const ownerParams = {
      to_email: 'ansh@biosoftech.com', // Admin receives this
      owner_name: name,
      hotel_name: hotelName,
      user_email: email,
      phone: phone,
      message: message,
      date_time: now,
      site_name: SITE_NAME,
    };

    try {
      // Basic validation to prevent sending with placeholder IDs
      if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID.includes('YOUR_')) {
        throw new Error('Service ID is missing or not configured in .env');
      }
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.includes('YOUR_')) {
        throw new Error('Public Key is missing or not configured in .env');
      }

      // 1. Send Email to Organization (Admin Notification)
      if (EMAILJS_TEMPLATE_ID_ORG) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_ORG,

          ownerParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      // 2. Send Confirmation Email to User (Auto-reply)
      if (EMAILJS_TEMPLATE_ID_USER) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_USER,
          userParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      e.target.reset();
    } catch (error) {
      console.error('Detailed EmailJS Error:', error);

      // Extract specific error message from EmailJS response if available
      const errorMsg = error?.text || error?.message || 'Unknown error';

      setStatus({
        type: 'error',
        message: `Error: ${errorMsg}. Please check your .env IDs and Dashboard settings.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: 'auto', padding: '120px 24px 80px' }}>
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-pattern"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-eyebrow reveal">
            <span className="pill pill-gold">Get in Touch</span>
          </div>
          <h1 className="hero-h1 reveal delay-1">
            Let's Scale Your <span className="fire-text">Hotel</span> Together
          </h1>
          <p className="hero-desc reveal delay-2" style={{ margin: '0 auto 40px' }}>
            Our team of hotel consultants is ready to help you digitize your operations. Reach out for a custom demo or support.
          </p>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* CONTACT CONTENT */}
      <section className="section-wrap">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: INFO */}
            <div className="reveal">
              <h2 className="display-md" style={{ marginBottom: '24px' }}>How can we help?</h2>
              <p className="section-desc" style={{ marginBottom: '48px' }}>
                Join 5,000+ hotel owners who have transformed their business with Hotel.
              </p>

              <div className="why-list">
                <div className="why-item">
                  <div className="why-ico">📍</div>
                  <div className="why-text">
                    <h4>Our Headquarters</h4>
                    <p>3rd Floor, Office No-624F/20A, Kotwali Rd, Matiyaari, Chinhat, Lucknow, Uttar Pradesh-226028</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">📞</div>
                  <div className="why-text">
                    <h4>Direct Support</h4>
                    <p>+91-6204442585, <br /> +91-6209688930</p>                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico">✉️</div>
                  <div className="why-text">
                    <h4>Email Inquiries</h4>
                    <p>info@biosoftech.com</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '56px' }}>
                <div className="trust-label" style={{ textAlign: 'left', marginBottom: '16px' }}>Trusted By Leaders</div>
                <div className="flex gap-4 flex-wrap opacity-60">
                  <span className="pill pill-dark" style={{ color: 'var(--ink)' }}>The Grand Palace</span>
                  <span className="pill pill-dark" style={{ color: 'var(--ink)' }}>Heritage Haveli</span>
                  <span className="pill pill-dark" style={{ color: 'var(--ink)' }}>Ocean View Resort</span>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '40px' }}>
                <h3 className="display-md" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {status.message && (
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
                      color: status.type === 'success' ? '#166534' : '#991b1b',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {status.message}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Rahul Sharma"
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Hotel / Business Name</label>
                      <input
                        type="text"
                        name="hotelName"
                        required
                        placeholder="The Grand Palace"
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rahul@example.com"
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--mist)', marginBottom: '8px' }}>Your Requirements</label>
                    <textarea
                      required
                      name="message"
                      rows="4"
                      placeholder="Tell us about your hotel..."
                      style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1.5px solid var(--border-warm)', background: 'var(--ivory)', fontSize: '0.9rem', outline: 'none', resize: 'none' }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-fire btn-full btn-lg"
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <h2 className="display-lg">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card reveal" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Is there a free trial?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>Yes! We offer a full 20-day free trial with all features enabled. No credit card required.</p>
            </div>
            <div className="card reveal delay-1" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Do you provide hardware?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>We support all standard POS hardware. We can also recommend partner vendors for printers and terminals.</p>
            </div>
            <div className="card reveal delay-2" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Is it GST compliant?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>Absolutely. 100% compliant with Indian tax laws. GSTR reports are auto-generated.</p>
            </div>
            <div className="card reveal delay-3" style={{ padding: '32px' }}>
              <h4 className="wf-title" style={{ textAlign: 'left' }}>Can I use it offline?</h4>
              <p className="wf-desc" style={{ textAlign: 'left' }}>Hotel is cloud-based for real-time sync, but billing works even during brief internet outages.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>
    </Layout>
  );
};

export default ContactPage;
