import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const SecurityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* HEADER SECTION */}
      <section className="section-wrap" style={{ background: 'var(--grad-bg)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-title-block center reveal in">
            <div className="section-eyebrow"><span className="pill pill-fire">Data Protection</span></div>
            <h1 className="display-lg">Security at Hotel</h1>
            <p className="section-desc">How we protect your hotel's data and privacy.</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section-wrap" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="security-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div className="card reveal in" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</div>
              <h3 className="display-md" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>SSL Encryption</h3>
              <p className="section-desc" style={{ fontSize: '0.95rem' }}>All data transmitted between your browser and our servers is encrypted using 256-bit SSL/TLS encryption, ensuring your information stays private.</p>
            </div>
            <div className="card reveal in" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>☁️</div>
              <h3 className="display-md" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Secure Hosting</h3>
              <p className="section-desc" style={{ fontSize: '0.95rem' }}>Our platform is hosted on world-class cloud infrastructure with multi-layer security protocols and 99.9% uptime guarantee.</p>
            </div>
            <div className="card reveal in" style={{ padding: '32px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💾</div>
              <h3 className="display-md" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Daily Backups</h3>
              <p className="section-desc" style={{ fontSize: '0.95rem' }}>We perform automated daily backups of your entire database. In case of any emergency, your data can be restored within minutes.</p>
            </div>
          </div>

          <div className="card reveal in" style={{ padding: '48px', border: '1px solid var(--border-light)' }}>
            <div className="security-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>Our Commitment to Security</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  At Hotel, we understand that your business data — from billing records to customer information — is your most valuable asset. We treat security not just as a feature, but as a core foundation of our software.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)', fontSize: '1.5rem' }}>Access Control & Permissions</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  Our platform provides granular role-based access control. You can decide exactly what your staff can see and do — whether it's a waiter taking orders, a chef viewing the KDS, or an accountant generating reports. This prevents unauthorized access to sensitive financial data.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)', fontSize: '1.5rem' }}>Infrastructure Security</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  We utilize firewalls, intrusion detection systems, and regular security audits to keep our environment safe. Our development team follows secure coding practices to prevent vulnerabilities like SQL injection or Cross-Site Scripting (XSS).
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)', fontSize: '1.5rem' }}>Compliance</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  We comply with Indian data protection standards and ensure that your GST records are handled with the highest level of integrity. Your data is your property, and we never share it with third parties for advertising or unauthorized marketing.
                </p>
              </div>

              <div style={{ background: 'var(--saffron-pale)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(76,53,117,0.1)' }}>
                <h3 className="display-md" style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--saffron)' }}>Found a Security Issue?</h3>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '0.95rem', color: 'var(--smoke)' }}>
                  We take security reports very seriously. If you believe you've discovered a vulnerability, please report it to us immediately at <strong>security@hotel.in</strong>. We will investigate and fix it on priority.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>
    </Layout>
  );
};

export default SecurityPage;
