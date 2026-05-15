import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const TermsofServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* HEADER SECTION */}
      <section className="section-wrap" style={{ background: 'var(--grad-bg)', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-title-block center reveal in">
            <div className="section-eyebrow"><span className="pill pill-gold">Legal Agreement</span></div>
            <h1 className="display-lg">Terms of Service</h1>
            <p className="section-desc">Last Updated: May 13, 2026</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section-wrap" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="card reveal in" style={{ padding: '48px', border: '1px solid var(--border-light)' }}>
            <div className="terms-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>1. Acceptance of Terms</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  By accessing or using Hotel (the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. These terms apply to all hotel owners, staff, and users who access the Service.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>2. Use of Service</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem', marginBottom: '12px' }}>
                  You agree to use the Service only for lawful purposes related to hotel management. You are responsible for:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '24px', color: 'var(--smoke)', lineHeight: '1.8' }}>
                  <li>Maintaining the confidentiality of your account credentials.</li>
                  <li>Ensuring all data entered (prices, taxes, staff info) is accurate.</li>
                  <li>Compliance with local tax and GST regulations while generating bills.</li>
                  <li>All activities that occur under your hotel's account.</li>
                </ul>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>3. Subscription & Payments</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  Our services are provided on a subscription basis. Fees are billed in advance according to your selected plan (Starter, Pro, or Enterprise). Failure to pay subscription fees may result in temporary suspension or termination of your access to the platform.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>4. Intellectual Property</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  The Service and its original content, features, and functionality (including logo, design, and software code) are and will remain the exclusive property of Hotel Technologies Pvt. Ltd. You may not reproduce, distribute, or create derivative works from our platform without express written permission.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>5. Data Accuracy & GST Compliance</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  While Hotel provides tools for GST billing and reporting, the final responsibility for tax compliance and accurate data reporting rests with the hotel owner. We are not responsible for any legal or financial penalties resulting from incorrect data entry or tax calculations by the user.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>6. Limitation of Liability</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  Hotel shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the Service, including but not limited to loss of profits, data, or business interruption.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>7. Termination</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>8. Changes to Terms</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="display-md" style={{ marginBottom: '16px', color: 'var(--ink)' }}>9. Governing Law</h2>
                <p className="section-desc" style={{ maxWidth: '100%', fontSize: '1rem' }}>
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
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

export default TermsofServicePage;
