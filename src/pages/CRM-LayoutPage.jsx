import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { 
  LuUser, 
  LuGift, 
  LuMessageSquare, 
  LuStar 
} from 'react-icons/lu';

const CRMPage = () => {
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
                <div className="hero-badge-dot"></div>
                <span className="hero-badge-text">Retention Focused Guest CRM</span>
              </div>
            </div>
            <h1 className="hero-h1 reveal delay-1">
              Turn One-Time Guests into <span className="fire-text">Loyal Fans</span>
            </h1>
            <p className="hero-desc reveal delay-2">
              Hotel CRM helps you understand your guests' preferences, track stay history, and launch automated marketing campaigns that bring them back to your hotel.
            </p>
            <div className="hero-cta-row reveal delay-3">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">Start Building Loyalty</a>
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-outline btn-lg">See Live CRM Demo</a>
            </div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="dash-wrapper">
              <div className="dash-card" style={{ transform: 'none' }}>
                <div className="dash-titlebar">
                  <div className="win-btns"><div className="win-btn wb-r"></div><div className="win-btn wb-y"></div><div className="win-btn wb-g"></div></div>
                  <div className="win-title">Guest CRM — Insights</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Total Guests</div>
                      <div className="kpi-val green">8,840</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Retention Rate</div>
                      <div className="kpi-val fire">42%</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">New This Month</div>
                      <div className="kpi-val gold">215</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-title">👥 Top Spending Guests</div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Aditya Verma</div><div className="order-sub">Stayed 5 times · Total Spend: ₹1.2L</div></div>
                        <div className="order-right"><span className="status-pill sp-served">Platinum Tier</span></div>
                      </div>
                      <div className="order-row">
                        <div className="order-info"><div className="order-name">Neha Kapoor</div><div className="order-sub">Stayed 3 times · Last: 15 days ago</div></div>
                        <div className="order-right"><span className="status-pill sp-ready">Gold Tier</span></div>
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

      {/* CRM FEATURES */}
      <section className="section-wrap alt">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Guest Loyalty Modules</span></div>
            <h2 className="display-lg">Tools to Boost Guest Lifetime Value</h2>
            <p className="section-desc">Move beyond just check-ins. Start building lasting relationships with every guest stay.</p>
          </div>

          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE', color: '#7C3AED' }}><LuUser /></div>
                <div>
                  <div className="feat-heading">Guest Profiles</div>
                  <div className="feat-subhead">Know your guests better</div>
                </div>
              </div>
              <p className="sc-info-desc">Detailed stay logs, room preferences, dietary requirements, and spending patterns for every guest.</p>
            </div>

            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC', color: '#D97706' }}><LuGift /></div>
                <div>
                  <div className="feat-heading">Loyalty Programs</div>
                  <div className="feat-subhead">Reward frequent stays</div>
                </div>
              </div>
              <p className="sc-info-desc">Automated point-based rewards. Tiered memberships (Gold, Silver, Platinum) with custom stay benefits.</p>
            </div>

            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><LuMessageSquare /></div>
                <div>
                  <div className="feat-heading">Personalized Marketing</div>
                  <div className="feat-subhead">Bring them back automatically</div>
                </div>
              </div>
              <p className="sc-info-desc">Automated WhatsApp & SMS for birthdays, anniversaries, and "exclusive stay" campaigns.</p>
            </div>

            <div className="feat-card reveal delay-3">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#E6E1F0', color: '#4C3575' }}><LuStar /></div>
                <div>
                  <div className="feat-heading">Post-Stay Feedback</div>
                  <div className="feat-subhead">Digital star ratings</div>
                </div>
              </div>
              <p className="sc-info-desc">Collect digital feedback after every check-out. Resolve issues before they hit social media.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="section-wrap">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-gold">Campaign Manager</span></div>
              <h2 className="display-lg">Launch Targeted Stay Offers in Seconds</h2>
              <p className="section-desc">Filter guests by their favorite room type or last stay date and send personalized offers instantly.</p>

              <div className="why-list" style={{ marginTop: '32px' }}>
                <div className="feat-pt"><div className="feat-chk"></div> Filter by "Not stayed in 6 months"</div>
                <div className="feat-pt"><div className="feat-chk"></div> Send "Staycation Offer" via WhatsApp</div>
                <div className="feat-pt"><div className="feat-chk"></div> Track offer redemption in real-time</div>
                <div className="feat-pt"><div className="feat-chk"></div> ROI analysis for every guest campaign</div>
              </div>


            </div>
            <div className="reveal delay-2">
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <div className="sc-screen sc-crm" style={{ aspectRatio: 'auto', padding: '40px' }}>
                  <div className="sc-label">Campaign Preview: "Return" Offer</div>
                  <div className="card" style={{ padding: '20px', maxWidth: '300px', margin: '0 auto', textAlign: 'left' }}>
                    <div className="flex gap-2 items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#4C3575]"></div>
                      <div className="text-xs font-bold">Hotel</div>
                    </div>
                    <p className="text-xs leading-relaxed">Hi Rahul! It's been 6 months since your last stay at Heritage Haveli. Use code <b>RELIVE10</b> for a 10% discount on your next weekend getaway! 🏨</p>
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
          <h2>Ready to Build a Community of Loyal Guests?</h2>
          <p>Stop losing guests to the competition. Start your data-driven growth journey today.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-white btn-lg">🏨 Start Free CRM Trial</a>
            <a href="/contact" className="btn btn-glass btn-lg">Talk to a Hospitality Expert</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CRMPage;
