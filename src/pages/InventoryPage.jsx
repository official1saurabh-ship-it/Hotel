import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { 
  LuGift, 
  LuMapPin, 
  LuHeart, 
  LuZap 
} from 'react-icons/lu';

const InventoryPage = () => {
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
                <span className="hero-badge-text">Real-time Asset & Stock Tracking</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Smart <span className="fire-text">Inventory</span> & Asset Control
            </h1>
            <p className="hero-desc reveal delay-2">
              From linens and toiletries to kitchen raw materials, track every item in your hotel. Reduce operational wastage by up to 30% with automated consumption tracking and low-stock alerts.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">Optimize My Inventory</a>
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-outline btn-lg" >View Stock Dashboard</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar">
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title">Hotel Stock Overview</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Stock Value</div>
                      <div className="kpi-val green">₹6,25,000</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Low Stock Items</div>
                      <div className="kpi-val fire">18</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Monthly Wastage</div>
                      <div className="kpi-val gold">₹12,450</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">⚠️ Reorder Alerts</div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Premium Bed Linens (King)</div><div className="order-sub">Remaining: 5 units · Min: 20 units</div></div>
                        <div className="order-right"><span className="status-pill sp-cooking">Critical</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Toiletries Kit — Bamboo</div><div className="order-sub">Remaining: 45 sets · Min: 100 sets</div></div>
                        <div className="order-right"><span className="status-pill sp-ready">Order Now</span></div>
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

      {/* INVENTORY FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Hospitality Logistics</span></div>
            <h2 className="display-lg">Master Your Entire Hotel Supply Chain</h2>
            <p className="section-desc">Streamline procurement for housekeeping, F&B, and maintenance with data-driven insights.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#E6E1F0', color: '#4C3575' }}><LuGift /></div>
                <div>
                  <div className="feat-heading">Multi-Department Tracking</div>
                  <div className="feat-subhead">Housekeeping & F&B</div>
                </div>
              </div>
              <p className="sc-info-desc">Track stock levels of linens, cleaning supplies, and kitchen raw materials with auto-deduction based on occupancy.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><LuMapPin /></div>
                <div>
                  <div className="feat-heading">Asset Management</div>
                  <div className="feat-subhead">Track furniture & electronics</div>
                </div>
              </div>
              <p className="sc-info-desc">Maintain a digital register of all hotel assets. Track AMC dates, maintenance history, and replacement cycles.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC', color: '#D97706' }}><LuHeart /></div>
                <div>
                  <div className="feat-heading">Vendor Management</div>
                  <div className="feat-subhead">Streamlined procurement</div>
                </div>
              </div>
              <p className="sc-info-desc">Manage multiple suppliers for laundry, food, and amenities. Compare prices and generate POs in one click.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE', color: '#7C3AED' }}><LuZap /></div>
                <div>
                  <div className="feat-heading">Consumption Analytics</div>
                  <div className="feat-subhead">Stop operational theft</div>
                </div>
              </div>
              <p className="sc-info-desc">Log breakage and wastage. Get reports on which departments are exceeding their consumption budgets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Financial Control</span></div>
              <h2 className="display-lg">Precise Costing for Higher Margins</h2>
              <p className="section-desc">Our intelligent engine calculates your operational cost per occupied room (CPOR) based on actual consumption data.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Department-level consumption breakdown</div>
                <div className="feat-pt"><div className="feat-chk"></div> Real-time stock valuation for audits</div>
                <div className="feat-pt"><div className="feat-chk"></div> Automated purchase requisition flow</div>
                <div className="feat-pt"><div className="feat-chk"></div> Inventory sync with room service F&B</div>
              </div>

            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-inv" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Monthly Supply Audit: Deluxe Rooms</div>
                  <div className="sc-row"><span className="sc-row-l">Laundry & Linens</span><span className="sc-row-r">₹4,200.00</span></div>
                  <div className="sc-row"><span className="sc-row-l">Toiletries & Kits</span><span className="sc-row-r">₹2,850.00</span></div>
                  <div className="sc-row"><span className="sc-row-l">Complimentary F&B</span><span className="sc-row-r">₹1,150.00</span></div>
                  <div className="sc-row" style={{ borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '10px', marginTop: '10px' }}>
                    <span className="sc-row-l" style={{ fontWeight: '700' }}>Total Supply Cost</span>
                    <span className="sc-row-r" style={{ fontWeight: '700' }}>₹8,200.00</span>
                  </div>
                  <div className="sc-row"><span className="sc-row-l">Total Room Revenue</span><span className="sc-row-r">₹84,000.00</span></div>
                  <div className="sc-row" style={{ color: '#86EFAC' }}><span className="sc-row-l">Gross Margin (90.2%)</span><span className="sc-row-r">₹75,800.00</span></div>
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
          <h2>Stop Guessing. Start Measuring Your Profits.</h2>
          <p>Join thousands of hotels saving lakhs on operational costs with our advanced inventory management.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-white btn-lg">🏨 Start Free Inventory Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Book a Stock Audit Demo</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InventoryPage;
