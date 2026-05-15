import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { 
  LuFileText, 
  LuCreditCard, 
  LuWallet, 
  LuMessageSquare, 
  LuCircleX 
} from 'react-icons/lu';

const POSBillingPage = () => {
  const observerRef = useRef(null);

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
      <section className="hero">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-pattern"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge-row reveal">
              <div className="hero-badge">
                <div className="hero-badge-dot" style={{ backgroundColor: '#4C3575' }}></div>
                <span className="hero-badge-text">GST Compliant Billing</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              India's Fastest <span className="fire-text">POS Billing</span> for Hotels
            </h1>
            <p className="hero-desc reveal delay-2">
              Simplify your counter operations with an intuitive POS. Handle split bills, multiple payment modes, and instant WhatsApp bill sharing effortlessly.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">Start Free Billing</a>
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-outline btn-lg">See Billing in Action</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar">
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title">POS — Front Desk & Service Counter</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Bills Today</div>
                      <div className="kpi-val green">42</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Revenue</div>
                      <div className="kpi-val fire">₹1,24,200</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Active Stays</div>
                      <div className="kpi-val gold">18</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">🧾 Room Folio — Room 302</div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Deluxe Room Stay (2 Nights)</div><div className="order-sub">Subtotal: ₹8,400.00</div></div>
                        <div className="order-right"><span className="order-amt">₹8,400.00</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Room Service — Dinner</div><div className="order-sub">Subtotal: ₹650.00</div></div>
                        <div className="order-right"><span className="order-amt">₹650.00</span></div>
                      </div>
                      <div className="order-row" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '10px', marginTop: '10px' }}>
                        <div className="order-info"><div className="order-name" style={{ fontWeight: '800' }}>Grand Total</div><div className="order-sub">GST (12%) Included</div></div>
                        <div className="order-right"><span className="order-amt" style={{ fontSize: '1rem', color: 'var(--saffron)' }}>₹10,136.00</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* POS FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Counter Excellence</span></div>
            <h2 className="display-lg">Built for Speed and Accuracy</h2>
            <p className="section-desc">Keep your checkout lines moving during peak hours with our optimized POS interface.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#CCFBF1', color: '#0D9488' }}><LuCreditCard /></div>
                <div>
                  <div className="feat-heading">GST Billing</div>
                  <div className="feat-subhead">100% Tax Compliant</div>
                </div>
              </div>
              <p className="sc-info-desc">Generate SGST, CGST, and IGST bills automatically. Print formatted invoices with your own logo and branding.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#E6E1F0', color: '#4C3575' }}><LuWallet /></div>
                <div>
                  <div className="feat-heading">Multiple Payments</div>
                  <div className="feat-subhead">Cash, Card, UPI & Wallets</div>
                </div>
              </div>
              <p className="sc-info-desc">Accept payments via UPI, Credit/Debit cards, and digital wallets. Automatically syncs with your daily collection report.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><LuMessageSquare /></div>
                <div>
                  <div className="feat-heading">Digital Invoicing</div>
                  <div className="feat-subhead">WhatsApp & Email</div>
                </div>
              </div>
              <p className="sc-info-desc">Reduce paper costs and go green. Send professional PDF invoices directly to your guest's WhatsApp or Email.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE', color: '#7C3AED' }}><LuCircleX /></div>
                <div>
                  <div className="feat-heading">Quick Returns</div>
                  <div className="feat-subhead">Void & Refund Control</div>
                </div>
              </div>
              <p className="sc-info-desc">Handle billing errors gracefully. Securely void bills or process refunds with manager-level authorization logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Visual Counter</span></div>
              <h2 className="display-lg">Beautifully Simple Counter Experience</h2>
              <p className="section-desc">Our POS is so intuitive that your staff can learn it in under 10 minutes. No specialized training required.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> One-click service to Room Folio conversion</div>
                <div className="feat-pt"><div className="feat-chk"></div> Room-wise visual bill management</div>
                <div className="feat-pt"><div className="feat-chk"></div> Quick-search menu for Room Service</div>
                <div className="feat-pt"><div className="feat-chk"></div> Works on PC, Mac, Tablet & Mobile</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-pos" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Live Front Desk Summary</div>
                  <div className="sc-row"><span className="sc-row-l">Folios Closed Today</span><span className="sc-row-r">42</span></div>
                  <div className="sc-row"><span className="sc-row-l">UPI Payments</span><span className="sc-row-r" style={{ color: '#86EFAC' }}>₹62,150</span></div>
                  <div className="sc-row"><span className="sc-row-l">Cash Collected</span><span className="sc-row-r" style={{ color: '#FDE68A' }}>₹38,400</span></div>
                  <div className="sc-row"><span className="sc-row-l">Average Guest Spend</span><span className="sc-row-r">₹4,592.00</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-ember"></div>

      {/* CTA SECTION */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Ready for the Fastest Counter Experience?</h2>
          <p>Ditch your slow billing software. Switch to Hotel and see the difference at your counter today.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-white btn-lg">🍽️ Start Free POS Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Request a Counter Hardware Kit</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default POSBillingPage;
