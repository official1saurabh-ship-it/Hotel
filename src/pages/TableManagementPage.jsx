import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { 
  LuMapPin, 
  LuCalendar, 
  LuBuilding, 
  LuSparkles 
} from 'react-icons/lu';

const TableManagementPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#0EA5D4' }}></div>
                <span className="hero-badge-text">Live Hotel Dashboard</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Master Your <span className="fire-text">Room Inventory</span> in Real-Time
            </h1>
            <p className="hero-desc reveal delay-2">
              Optimize your occupancy and reduce guest check-in times. Visualize your entire hotel layout, manage reservations, and assign rooms with a single tap.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">Setup My Room Map</a>
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-outline btn-lg" >See Occupancy View</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar" style={{ background: '#0EA5D4' }}>
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title" style={{ color: '#fff' }}>Property Overview — Room Status</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Vacant</div>
                      <div className="kpi-val green">12</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Occupied</div>
                      <div className="kpi-val fire">32</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Dirty / Maint.</div>
                      <div className="kpi-val gold">06</div>
                    </div>
                  </div>
                  <div className="table-layout mt-4">
                    <div className="tbl tbl-free">101 ✓</div>
                    <div className="tbl tbl-busy">102 ●</div>
                    <div className="tbl tbl-busy">103 ●</div>
                    <div className="tbl tbl-rsv">104 ●</div>
                    <div className="tbl tbl-free">105 ✓</div>
                    <div className="tbl tbl-busy">201 ●</div>
                    <div className="tbl tbl-free">202 ✓</div>
                    <div className="tbl tbl-busy">203 ●</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* ROOM MGMT FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Front Office Operations</span></div>
            <h2 className="display-lg">Advanced Booking & Occupancy Tools</h2>
            <p className="section-desc">Adapt to guest demands with flexible inventory management tools designed for modern hospitality.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#E0F2FE', color: '#0EA5E9' }}><LuMapPin /></div>
                <div>
                  <div className="feat-heading">Visual Room Grid</div>
                  <div className="feat-subhead">Live status indicators</div>
                </div>
              </div>
              <p className="sc-info-desc">Instantly identify available (Green), occupied (Red), and reserved (Yellow) rooms on a visual hotel map.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC', color: '#D97706' }}><LuCalendar /></div>
                <div>
                  <div className="feat-heading">Reservation Calendar</div>
                  <div className="feat-subhead">Group & Individual bookings</div>
                </div>
              </div>
              <p className="sc-info-desc">Manage room availability months in advance. Automatically block inventory and send digital confirmations via WhatsApp/Email.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><LuBuilding /></div>
                <div>
                  <div className="feat-heading">Multi-Floor Support</div>
                  <div className="feat-subhead">Wings & Room Categories</div>
                </div>
              </div>
              <p className="sc-info-desc">Manage Deluxe, Suites, and Standard rooms across multiple floors or wings separately from one dashboard.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE', color: '#7C3AED' }}><LuSparkles /></div>
                <div>
                  <div className="feat-heading">Housekeeping Sync</div>
                  <div className="feat-subhead">Fast room turnover</div>
                </div>
              </div>
              <p className="sc-info-desc">Automatically update room status to 'Dirty' upon check-out and get notified when housekeeping clears it for the next guest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Guest Experience</span></div>
              <h2 className="display-lg">Boost Your ADR & RevPAR</h2>
              <p className="section-desc">Track room occupancy patterns and guest stay durations to optimize pricing and maximize revenue per available room.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Occupancy Analytics & Revenue Forecasting</div>
                <div className="feat-pt"><div className="feat-chk"></div> Guest History & Profile Management</div>
                <div className="feat-pt"><div className="feat-chk"></div> Staff-wise Housekeeping performance</div>
                <div className="feat-pt"><div className="feat-chk"></div> Real-time ADR tracking</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-tbl" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Live Hotel Occupancy</div>
                  <div className="sc-row"><span className="sc-row-l">Total Room Inventory</span><span className="sc-row-r">50 Keys</span></div>
                  <div className="sc-row"><span className="sc-row-l">Current Occupancy</span><span className="sc-row-r" style={{ color: '#FCA5A5' }}>82%</span></div>
                  <div className="sc-row"><span className="sc-row-l">Available Now</span><span className="sc-row-r" style={{ color: '#86EFAC' }}>8 Rooms</span></div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg">
                    <div className="text-[10px] uppercase font-bold text-white/50 mb-2">Arrivals Today (15)</div>
                    <div className="flex justify-between text-xs text-white"><span>Sharma Group (4 Rms)</span><span>ETA 02:00 PM</span></div>
                  </div>
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
          <h2>Maximize Your Hotel's Potential Today.</h2>
          <p>Don't let rooms sit vacant. Digitise your occupancy management and increase your RevPAR.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-white btn-lg">🏨 Start Free Room Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Talk to an Onboarding Expert</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TableManagementPage;
