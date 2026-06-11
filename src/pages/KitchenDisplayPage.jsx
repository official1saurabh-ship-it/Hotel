import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { 
  LuZap, 
  LuClipboardList, 
  LuMessageSquare, 
  LuCopy 
} from 'react-icons/lu';

const KitchenDisplayPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#0E7A4E' }}></div>
                <span className="hero-badge-text">Real-time Service Coordination</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Zero-Error <span className="fire-text">Kitchen & Room Service</span> System
            </h1>
            <p className="hero-desc reveal delay-2">
              Replace messy paper tickets with a sleek, real-time KDS. Track every Room Service order, monitor preparation times, and notify staff the second a dish is ready for delivery.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">Digitise My Kitchen</a>
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-outline btn-lg" >See KDS Workflow</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar" style={{ background: '#0E7A4E' }}>
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title" style={{ color: '#fff' }}>Kitchen Display — Active Orders</div>
                </div>
                <div className="dash-body">
                  <div className="dash-section">
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Room 302 — Club Sandwich × 2</div><div className="order-sub">Ordered: 4m ago</div></div>
                        <div className="order-right"><span className="status-pill sp-cooking">Cooking</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Room 105 — Masala Chai × 4</div><div className="order-sub">Ordered: 12m ago</div></div>
                        <div className="order-right"><span className="status-pill sp-ready">Ready ✓</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Table 4 — Butter Chicken × 1</div><div className="order-sub">Ordered: 1m ago</div></div>
                        <div className="order-right"><span className="status-pill sp-pending">Pending</span></div>
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

      {/* KDS FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Back-of-House Tech</span></div>
            <h2 className="display-lg">Optimized for High-Volume Service</h2>
            <p className="section-desc">Keep your chefs focused and your service staff informed with instant order routing.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><LuZap /></div>
                <div>
                  <div className="feat-heading">Instant Routing</div>
                  <div className="feat-subhead">No lost Room Service tickets</div>
                </div>
              </div>
              <p className="sc-info-desc">Orders from the front desk or POS are instantly routed to the correct kitchen station display.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC', color: '#D97706' }}><LuClipboardList /></div>
                <div>
                  <div className="feat-heading">Status Tracking</div>
                  <div className="feat-subhead">Pending → Cooking → Ready</div>
                </div>
              </div>
              <p className="sc-info-desc">Track exactly how long each dish takes to prepare and identify bottlenecks in your kitchen workflow.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#CCFBF1', color: '#0D9488' }}><LuMessageSquare /></div>
                <div>
                  <div className="feat-heading">Staff Notifications</div>
                  <div className="feat-subhead">App & Bell Alerts</div>
                </div>
              </div>
              <p className="sc-info-desc">Notify servers or room service staff automatically the second an order is marked 'Ready' by the chef.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE', color: '#7C3AED' }}><LuCopy /></div>
                <div>
                  <div className="feat-heading">Service Audit</div>
                  <div className="feat-subhead">Performance reports</div>
                </div>
              </div>
              <p className="sc-info-desc">Analyze kitchen efficiency with detailed reports on average prep time per station and peak hour performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Kitchen Efficiency</span></div>
              <h2 className="display-lg">Say Goodbye to Lost Room Service Orders</h2>
              <p className="section-desc">Lost orders are the #1 reason for guest dissatisfaction. Hotel KDS ensures every Room Service inquiry and order is captured and visible.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> No more smudged or lost Room Service tickets</div>
                <div className="feat-pt"><div className="feat-chk"></div> Instant updates for modified guest requests</div>
                <div className="feat-pt"><div className="feat-chk"></div> Clear visibility of guest allergies & preferences</div>
                <div className="feat-pt"><div className="feat-chk"></div> Historical data of service time performance</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-kds" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Kitchen Performance Dashboard</div>
                  <div className="sc-row"><span className="sc-row-l">Average Prep Time</span><span className="sc-row-r">12m 45s</span></div>
                  <div className="sc-row"><span className="sc-row-l">Orders Ready Today</span><span className="sc-row-r" style={{ color: '#86EFAC' }}>85</span></div>
                  <div className="sc-row"><span className="sc-row-l">Delayed Orders</span><span className="sc-row-r" style={{ color: '#FCA5A5' }}>02</span></div>
                  <div className="sc-row"><span className="sc-row-l">Top Chef This Week</span><span className="sc-row-r">Sunil S.</span></div>
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
          <h2>Ready to Eliminate Kitchen Chaos?</h2>
          <p>Join 5,000+ hotels that have eliminated kitchen chaos with Hotel KDS.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-white btn-lg">🍽️ Start Free KDS Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Get a Custom Kitchen Audit</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KitchenDisplayPage;
