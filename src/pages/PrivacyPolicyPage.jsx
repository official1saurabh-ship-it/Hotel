import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* HEADER SECTION */}
      <section className="section-wrap" style={{ background: 'var(--grad-bg)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-title-block center reveal in">
            <div className="section-eyebrow"><span className="pill pill-fire">Legal</span></div>
            <h1 className="display-lg">Privacy Policy</h1>
            <p className="section-desc">Last Updated: May 13, 2026</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section-wrap" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card reveal in" style={{ padding: '48px', border: '1px solid var(--border-light)' }}>
            <div className="policy-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>1. Introduction</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  Welcome to Hotel. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our software and services.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>2. Information We Collect</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem', marginBottom: '12px' }}>
                  We collect information that you provide directly to us, including:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--smoke)', lineHeight: '1.8' }}>
                  <li>Name and contact information (Email, Phone, Address).</li>
                  <li>Business details (Hotel Name, GST Number, Location).</li>
                  <li>Staff and employee data provided for HR management.</li>
                  <li>Billing and payment information.</li>
                </ul>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>3. How We Use Your Data</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem', marginBottom: '12px' }}>
                  The data collected is used for the following purposes:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--smoke)', lineHeight: '1.8' }}>
                  <li>To provide and maintain our POS and Hotel Management services.</li>
                  <li>To generate GST compliant reports and analytics for your business.</li>
                  <li>To process your transactions and manage your account.</li>
                  <li>To provide customer support and send technical updates.</li>
                  <li>To improve our platform based on usage patterns and feedback.</li>
                </ul>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>4. Data Security</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  We implement industry-standard security measures to protect your data. All communication with our servers is encrypted using SSL/TLS. Data is stored on secure cloud servers with regular backups. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>5. Third-Party Services</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  We may share information with third-party service providers (such as payment gateways and WhatsApp API providers) only as necessary for them to perform services on our behalf. We do not sell your personal or business data to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>6. Your Rights</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  You have the right to access, correct, or delete your personal data stored with us. You can manage most of your information through the Hotel dashboard or by contacting our support team.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>7. Contact Us</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> info@biosoftech.com<br />
                  <strong>Phone:</strong> +91-9044425858, +91-6209688930<br />
                  <strong>Address:</strong> India
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

export default PrivacyPolicyPage;
