import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { 
  LuWallet, 
  LuFileText, 
  LuGift, 
  LuUser 
} from 'react-icons/lu';

const ReportsPage = () => {
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
                <div className="hero-badge-dot" style={{ backgroundColor: '#C9900C' }}></div>
                <span className="hero-badge-text">Hospitality Business Intelligence</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Powerful <span className="fire-text">Reports</span> & Hospitality Analytics
            </h1>
            <p className="hero-desc reveal delay-2">
              Transform your hotel data into actionable insights. Monitor RevPAR, track ADR, and optimize your revenue with automated, real-time hospitality reporting.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">Explore All Reports</a>
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-outline btn-lg" >View Live Dashboard</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar" style={{ background: 'var(--grad-gold)' }}>
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title" style={{ color: 'var(--ink)' }}>Executive Hotel Summary</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Total Revenue</div>
                      <div className="kpi-val green">₹24.8L</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">ADR</div>
                      <div className="kpi-val fire">₹3,450</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Occupancy</div>
                      <div className="kpi-val gold">78%</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">📈 Monthly Revenue Trend</div>
                    <div className="mt-4 h-24 flex items-end gap-2 px-2">
                      <div className="flex-1 bg-[#F4F2F9] h-1/2 rounded-t-sm"></div>
                      <div className="flex-1 bg-[#E6E1F0] h-2/3 rounded-t-sm"></div>
                      <div className="flex-1 bg-[#D1C8E1] h-3/4 rounded-t-sm"></div>
                      <div className="flex-1 bg-[#4C3575] h-full rounded-t-sm"></div>
                      <div className="flex-1 bg-[#A699C2] h-4/5 rounded-t-sm"></div>
                      <div className="flex-1 bg-[#E6E1F0] h-1/3 rounded-t-sm"></div>
                      <div className="flex-1 bg-[#D1C8E1] h-1/2 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* REPORTS CATEGORIES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Analytics Suite</span></div>
            <h2 className="display-lg">Comprehensive Reports for Every Department</h2>
            <p className="section-desc">From daily front-desk closings to annual tax filings, we've got all your hotel reporting needs covered.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#CCFBF1', color: '#0D9488' }}><LuWallet /></div>
                <div>
                  <div className="feat-heading">Revenue Analytics</div>
                  <div className="feat-subhead">ADR & RevPAR tracking</div>
                </div>
              </div>
              <p className="sc-info-desc">Daily revenue, department-wise collection, and source breakdown. Identify your most profitable booking channels.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC', color: '#D97706' }}><LuFileText /></div>
                <div>
                  <div className="feat-heading">GST & Tax Reports</div>
                  <div className="feat-subhead">Audit-ready exports</div>
                </div>
              </div>
              <p className="sc-info-desc">Auto-generated GSTR-1 and GSTR-3B summaries for stays and services. Stay compliant with zero manual effort.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><LuGift /></div>
                <div>
                  <div className="feat-heading">Supply Reports</div>
                  <div className="feat-subhead">Inventory & Consumption</div>
                </div>
              </div>
              <p className="sc-info-desc">Linen usage, toiletry consumption, and kitchen raw material variance analysis to control operational costs.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE', color: '#7C3AED' }}><LuUser /></div>
                <div>
                  <div className="feat-heading">Staff Performance</div>
                  <div className="feat-subhead">Housekeeping & Front Desk</div>
                </div>
              </div>
              <p className="sc-info-desc">Track average room turnover time per staff, front-desk upsell performance, and individual efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SHOWCASE */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Revenue Engineering</span></div>
              <h2 className="display-lg">Identify Your Most Profitable Stays</h2>
              <p className="section-desc">Our intelligent "Stay Engineering" report identifies which room categories and guest segments drive the highest margins for your hotel.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Channel-wise Booking Performance</div>
                <div className="feat-pt"><div className="feat-chk"></div> Average Stay Duration & Guest LTV</div>
                <div className="feat-pt"><div className="feat-chk"></div> Occupancy Heatmap by Floor/Wing</div>
                <div className="feat-pt"><div className="feat-chk"></div> Source-wise ADR Analysis</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-crm" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Top Revenue Sources (Weekly)</div>
                  <div className="sc-row"><span className="sc-row-l">Direct Bookings</span><span className="sc-row-r">₹8.4L</span></div>
                  <div className="sc-row"><span className="sc-row-l">OTA (MakeMyTrip/Booking)</span><span className="sc-row-r">₹6.2L</span></div>
                  <div className="sc-row"><span className="sc-row-l">Corporate Contracts</span><span className="sc-row-r">₹4.8L</span></div>
                  <div className="sc-row"><span className="sc-row-l">Walk-ins</span><span className="sc-row-r">₹2.1L</span></div>
                  <div className="mt-4 p-3 bg-white/10 rounded-lg text-center">
                    <div className="text-[10px] uppercase font-bold text-white/50 mb-1">RevPAR Index</div>
                    <div className="text-lg font-black text-white">₹2,840.00</div>
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
          <h2>Run Your Hotel Based on Real Data.</h2>
          <p>Stop guessing your margins. Join thousands of hotel owners using Hotel analytics to grow.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-white btn-lg">📊 Start Free Analytics Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Request a Custom Hotel Audit</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReportsPage;
