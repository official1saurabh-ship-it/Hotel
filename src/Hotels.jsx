import React, { useEffect, useRef } from 'react';
import Layout from './components/Layout';
import { 
  LuBellRing, 
  LuSquareCheck, 
  LuCreditCard, 
  LuBed, 
  LuCastle, 
  LuTrendingUp, 
  LuMessageSquare, 
  LuFileText, 
  LuCircleX, 
  LuStar, 
  LuWallet, 
  LuPackage, 
  LuMapPin, 
  LuCircleDollarSign, 
  LuUser, 
  LuHeart, 
  LuTarget, 
  LuTag, 
  LuSettings, 
  LuShieldCheck, 
  LuMail 
} from 'react-icons/lu';

const Hotels = () => {
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
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="hero-pattern"></div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge-row">
              <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <span className="hero-badge-text">5,000+ Hotels Active Now</span>
              </div>
              <div className="hero-made-tag">🇮🇳 Made in India</div>
            </div>
            <h1 className="hero-h1">
              Hotel Management System
            </h1>
            <p className="hero-desc">
              Complete Front Desk, Room Booking, Housekeeping, POS Billing, Inventory, CRM &amp; GST — one powerful platform built for Indian hotels, resorts, and stays.
            </p>
            <div className="hero-cta-row">
              <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-lg">🚀 Start Free Trial</a>
              <a href="/contact" className="btn btn-outline btn-lg">▶ Book a Free Demo</a>
            </div>
            <p className="hero-cta-note">✓ No credit card required &nbsp;·&nbsp; ✓ 20-day free trial &nbsp;·&nbsp; ✓ Cancel anytime</p>
            <div className="hero-tags-row" style={{ marginTop: '28px' }}>
              <span className="htag"><span className="htag-icon"><LuSquareCheck size={16} /></span> GST Ready</span>
              <span className="htag"><span className="htag-icon"><LuBed size={16} /></span> Front Desk</span>
              <span className="htag"><span className="htag-icon"><LuBed size={16} /></span> Room Mgmt</span>
              <span className="htag"><span className="htag-icon"><LuSquareCheck size={16} /></span> Housekeeping</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dash-wrapper">
              <div className="float-badge tl">
                <div className="fb-ico fb-ico-fire">
                  <LuBellRing size={28} />
                </div>
                <div>
                  <div className="fb-label">New Booking!</div>
                  <div className="fb-sub">Room 302 · Deluxe</div>
                </div>
              </div>
              <div className="dash-card">
                <div className="dash-titlebar">
                  <div className="win-btns">
                    <div className="win-btn wb-r"></div>
                    <div className="win-btn wb-y"></div>
                    <div className="win-btn wb-g"></div>
                  </div>
                  <div className="win-title"><span>Hotel</span> — Dashboard</div>
                </div>
                <div className="dash-body">
                  <div className="dash-kpi-row">
                    <div className="kpi">
                      <div className="kpi-label">Today's Revenue</div>
                      <div className="kpi-val green">₹82,450</div>
                      <div className="kpi-delta">↑ +14% vs yesterday</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Active Stays</div>
                      <div className="kpi-val fire">38</div>
                      <div className="kpi-delta">12 check-outs today</div>
                    </div>
                    <div className="kpi">
                      <div className="kpi-label">Avg. Room Rate</div>
                      <div className="kpi-val gold">₹3,200</div>
                      <div className="kpi-delta">↑ +6% vs avg</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-head">
                      <div className="dash-section-title"><LuBed size={18} /> Live Room Status</div>
                      <div className="dash-section-meta">50 rooms · All Floors</div>
                    </div>
                    <div className="table-layout">
                      <div className="tbl tbl-busy">101 ●</div>
                      <div className="tbl tbl-free">102 ✓</div>
                      <div className="tbl tbl-busy">103 ●</div>
                      <div className="tbl tbl-rsv">104 ◐</div>
                      <div className="tbl tbl-free">105 ✓</div>
                      <div className="tbl tbl-busy">201 ●</div>
                      <div className="tbl tbl-free">202 ✓</div>
                      <div className="tbl tbl-busy">203 ●</div>
                      <div className="tbl tbl-rsv">204 ◐</div>
                      <div className="tbl tbl-free">205 ✓</div>
                    </div>
                  </div>
                  <div className="dash-section">
                    <div className="dash-section-head">
                      <div className="dash-section-title"><LuFileText size={18} /> Recent Arrivals</div>
                      <div className="dash-section-meta">Live</div>
                    </div>
                    <div className="order-list">
                      <div className="order-row">
                        <div className="order-info">
                          <div className="order-name">Room 302 — Rahul Sharma</div>
                          <div className="order-sub">Deluxe King · 3 Nights</div>
                        </div>
                        <div className="order-right">
                          <span className="order-amt">₹12,500</span>
                          <span className="status-pill sp-served">Checked In</span>
                        </div>
                      </div>
                      <div className="order-row">
                        <div className="order-info">
                          <div className="order-name">Room 104 — Priya Singh</div>
                          <div className="order-sub">Suite · 2 Nights</div>
                        </div>
                        <div className="order-right">
                          <span className="order-amt">₹18,000</span>
                          <span className="status-pill sp-cooking">Reserved</span>
                        </div>
                      </div>
                      <div className="order-row">
                        <div className="order-info">
                          <div className="order-name">Room 205 — Amit Kumar</div>
                          <div className="order-sub">Standard · 1 Night</div>
                        </div>
                        <div className="order-right">
                          <span className="order-amt">₹2,800</span>
                          <span className="status-pill sp-ready">Cleaning</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-badge br">
                <div className="fb-ico fb-ico-green">
                  <LuFileText size={28} />
                </div>
                <div>
                  <div className="fb-label">Monthly Audit Ready</div>
                  <div className="fb-sub">Auto-calculated · Export PDF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner">
          <div className="trust-label">Trusted by 5,000+ Hotels Across India</div>
          <div className="trust-logos">
            <div className="trust-logo-chip">The Grand Palace</div>
            <div className="trust-logo-chip">Ocean View Resort</div>
            <div className="trust-logo-chip">Heritage Haveli</div>
            <div className="trust-logo-chip">Mountain Retreat</div>
            <div className="trust-logo-chip">City Center Hotel</div>
            <div className="trust-logo-chip">Green Valley Stay</div>
            <div className="trust-logo-chip">Royal Inn</div>
          </div>
          <div className="trust-badges-row">
            <span className="trust-badge"><LuShieldCheck size={14} /> GST Compliant</span>
            <span className="trust-badge"><LuBed size={14} /> Front Desk Ready</span>
            <span className="trust-badge"><LuBed size={14} /> Room Management</span>
            <span className="trust-badge"><LuTarget size={14} /> Mobile + Desktop</span>
            <span className="trust-badge">🇮🇳 Made in India</span>
            <span className="trust-badge">☁️ Cloud-Based</span>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item reveal">
            <div className="stat-num"><span className="stat-num-accent">5,000</span>+</div>
            <div className="stat-label">Hotels Using Our Platform</div>
          </div>
          <div className="stat-item reveal delay-1">
            <div className="stat-num"><span className="stat-num-accent">2</span>Cr+</div>
            <div className="stat-label">GST Invoices Generated</div>
          </div>
          <div className="stat-item reveal delay-2">
            <div className="stat-num"><span className="stat-num-accent">99.9</span>%</div>
            <div className="stat-label">Platform Uptime SLA</div>
          </div>
          <div className="stat-item reveal delay-3">
            <div className="stat-num"><span className="stat-num-accent">4.9</span>★</div>
            <div className="stat-label">Average Customer Rating</div>
          </div>
        </div>
      </div>

      <div className="divider-ember"></div>

      {/* MODULES */}
      <section className="section-wrap" id="modules">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">Complete Suite</span></div>
            <h2 className="display-lg">Simplify Bookings & Check-Ins</h2>
            <p className="section-desc">From front desk check-ins to housekeeping and inventory — Hotel covers every operational touchpoint.</p>
          </div>
          <div className="modules-grid">
            <div className="module-card reveal"><div className="mod-ico" style={{ background: '#E6E1F0' }}><LuBellRing size={20} /></div><div className="module-name">Front Desk</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ background: '#DCFCE7' }}><LuSquareCheck size={20} /></div><div className="module-name">Housekeeping</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ background: '#CCFBF1' }}><LuCreditCard size={20} /></div><div className="module-name">POS & Billing</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ background: '#FEF5DC' }}><LuBed size={20} /></div><div className="module-name">Room Management</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ background: '#EDE9FE' }}><LuCastle size={20} /></div><div className="module-name">Banquet & Events</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ background: '#E6E1F0' }}><LuTrendingUp size={20} /></div><div className="module-name">Occupancy Analytics</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ background: '#F4F2F9' }}><LuMessageSquare size={20} /></div><div className="module-name">Guest Services</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ background: '#DCFCE7' }}><LuFileText size={20} /></div><div className="module-name">Invoicing</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ background: '#FEF5DC' }}><LuFileText size={20} /></div><div className="module-name">GST Reports</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ background: '#FEE2E2' }}><LuCircleX size={20} /></div><div className="module-name">Cancellations</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ background: '#F8F2E8' }}><LuStar size={20} /></div><div className="module-name">Guest Feedback</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ background: '#E0F2FE' }}><LuWallet size={20} /></div><div className="module-name">Purchases</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ background: '#DCFCE7' }}><LuPackage size={20} /></div><div className="module-name">Inventory</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ background: '#FEF5DC' }}><LuMapPin size={20} /></div><div className="module-name">Asset Tracking</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ background: '#FEE2E2' }}><LuCircleDollarSign size={20} /></div><div className="module-name">Expense Mgmt</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ background: '#CCFBF1' }}><LuUser size={20} /></div><div className="module-name">CRM & Loyalty</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ background: '#E6E1F0' }}><LuHeart size={20} /></div><div className="module-name">Vendors</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ background: '#EDE9FE' }}><LuTrendingUp size={20} /></div><div className="module-name">Financial Reports</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ background: '#FCE7F3' }}><LuUser size={20} /></div><div className="module-name">Staff Attendance</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ background: '#F8F2E8' }}><LuTarget size={20} /></div><div className="module-name">Multi-Branch</div></div>
            <div className="module-card reveal"><div className="mod-ico" style={{ background: '#FEF5DC' }}><LuTag size={20} /></div><div className="module-name">Room Categories</div></div>
            <div className="module-card reveal delay-1"><div className="mod-ico" style={{ background: '#E6E1F0' }}><LuSettings size={20} /></div><div className="module-name">Setup</div></div>
            <div className="module-card reveal delay-2"><div className="mod-ico" style={{ background: '#DCFCE7' }}><LuShieldCheck size={20} /></div><div className="module-name">Account Sync</div></div>
            <div className="module-card reveal delay-3"><div className="mod-ico" style={{ background: '#CCFBF1' }}><LuMail size={20} /></div><div className="module-name">Support Tickets</div></div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* FEATURES */}
      <section className="section-wrap alt" id="features">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Core Features</span></div>
            <h2 className="display-lg">Complete Guest Management</h2>
            <p className="section-desc">From boutique stays to luxury resorts — Hotel adapts to your specific hospitality needs.</p>
          </div>
          <div className="feat-grid">
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#CCFBF1' }}><LuBellRing size={28} /></div>
                <div>
                  <div className="feat-heading">Room & Rate Management</div>
                  <div className="feat-subhead">Seamless check-ins and check-outs</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Live Room Status (Vacant / Occupied / Dirty)</div>
                <div className="feat-pt"><div className="feat-chk"></div>Advanced Booking & Group Reservation System</div>
                <div className="feat-pt"><div className="feat-chk"></div>Identity Verification & Guest Profile Management</div>
                <div className="feat-pt"><div className="feat-chk"></div>Direct Booking & Channel Manager Sync Ready</div>
                <div className="feat-pt"><div className="feat-chk"></div>Early Check-in & Late Check-out Calculations</div>
              </div>
            </div>
            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#DCFCE7' }}><LuSquareCheck size={28} /></div>
                <div>
                  <div className="feat-heading">Housekeeping & Maintenance</div>
                  <div className="feat-subhead">Keep your hotel spotless</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Real-time Room Cleaning Status Updates</div>
                <div className="feat-pt"><div className="feat-chk"></div>Staff Assignment & Performance Tracking</div>
                <div className="feat-pt"><div className="feat-chk"></div>Maintenance Issue Reporting & Resolution</div>
                <div className="feat-pt"><div className="feat-chk"></div>Linen & Laundry Management Control</div>
                <div className="feat-pt"><div className="feat-chk"></div>Housekeeping Checklist for Quality Assurance</div>
              </div>
            </div>
            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#FEF5DC' }}><LuCreditCard size={28} /></div>
                <div>
                  <div className="feat-heading">POS & Service Management</div>
                  <div className="feat-subhead">Handle F&B and services easily</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Direct Billing to Guest's Room Account</div>
                <div className="feat-pt"><div className="feat-chk"></div>Multiple Outlet Support (Cafe, Bar, Dining)</div>
                <div className="feat-pt"><div className="feat-chk"></div>GST Compliant Invoicing for All Services</div>
                <div className="feat-pt"><div className="feat-chk"></div>Table Management & Room Service Integration</div>
                <div className="feat-pt"><div className="feat-chk"></div>Inventory Sync with Service Consumption</div>
              </div>
            </div>
            <div className="feat-card reveal">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#E6E1F0' }}><LuPackage size={28} /></div>
                <div>
                  <div className="feat-heading">Inventory & Asset Control</div>
                  <div className="feat-subhead">Manage toiletries, linens, and assets</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Real-time Stock Tracking Across Departments</div>
                <div className="feat-pt"><div className="feat-chk"></div>Automated Low Stock & Reorder Alerts</div>
                <div className="feat-pt"><div className="feat-chk"></div>Hotel Asset Lifecycle & AMC Management</div>
                <div className="feat-pt"><div className="feat-chk"></div>Centralized Purchasing & Vendor Management</div>
                <div className="feat-pt"><div className="feat-chk"></div>Consumption Analysis to Reduce Wastage</div>
              </div>
            </div>
            <div className="feat-card reveal delay-1">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#CCFBF1' }}><LuUser size={28} /></div>
                <div>
                  <div className="feat-heading">Guest CRM & Loyalty</div>
                  <div className="feat-subhead">Turn one-time visitors into regulars</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Rich Guest Profiles with Stay History</div>
                <div className="feat-pt"><div className="feat-chk"></div>Custom Loyalty Points & Rewards Programs</div>
                <div className="feat-pt"><div className="feat-chk"></div>Automated Birthday & Anniversary Marketing</div>
                <div className="feat-pt"><div className="feat-chk"></div>Post-Stay Feedback & NPS Data Collection</div>
                <div className="feat-pt"><div className="feat-chk"></div>WhatsApp Marketing for Direct Re-bookings</div>
              </div>
            </div>
            <div className="feat-card reveal delay-2">
              <div className="feat-card-header">
                <div className="feat-ico" style={{ background: '#EDE9FE' }}><LuTrendingUp size={28} /></div>
                <div>
                  <div className="feat-heading">Financial Reports & Audit</div>
                  <div className="feat-subhead">Complete financial transparency</div>
                </div>
              </div>
              <div className="feat-points">
                <div className="feat-pt"><div className="feat-chk"></div>Daily Manager's Report & Flash Reports</div>
                <div className="feat-pt"><div className="feat-chk"></div>ADR, RevPAR, and Occupancy Analytics</div>
                <div className="feat-pt"><div className="feat-chk"></div>Auto-Generated GSTR-1 & GSTR-3B Reports</div>
                <div className="feat-pt"><div className="feat-chk"></div>Payment Reconciliation (Bank vs POS)</div>
                <div className="feat-pt"><div className="feat-chk"></div>Comprehensive Staff Performance Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE / PRODUCT PREVIEW */}
      <section className="section-wrap" id="showcase">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">Product Preview</span></div>
            <h2 className="display-lg">Intuitive Screens Built for Busy Hotels</h2>
            <p className="section-desc">Every interface is designed for speed — from the front desk to the back office.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-card reveal">
              <div className="sc-screen sc-pos">
                <div className="sc-label"><LuBed size={14} style={{ display: 'inline', marginRight: '6px' }} /> Front Desk — Check-in Screen</div>
                <div className="sc-row"><span className="sc-row-l">Room 302 — Deluxe King</span><span className="sc-badge">Occupied</span></div>
                <div className="sc-row"><span className="sc-row-l">Guest: Rahul Sharma</span><span className="sc-row-r">Staying 3 nights</span></div>
                <div className="sc-row"><span className="sc-row-l">Stay Total + Taxes</span><span className="sc-row-r">₹12,500</span></div>
                <div className="sc-row"><span className="sc-row-l">Incidental Charges</span><span className="sc-row-r">₹850</span></div>
                <div className="sc-row" style={{ background: 'rgba(255,255,255,0.22)' }}><span className="sc-row-l" style={{ fontWeight: '700', color: '#fff' }}>Pending Folio</span><span className="sc-row-r" style={{ fontSize: '0.95rem' }}>₹13,350</span></div>
              </div>
              <div className="sc-info">
                <div className="sc-info-title">Front Desk Management</div>
                <div className="sc-info-desc">Manage guest stays from check-in to check-out. Track room charges, incidental services, and taxes automatically in one unified guest folio.</div>
              </div>
            </div>
            <div className="showcase-card reveal delay-1">
              <div className="sc-screen sc-kds">
                <div className="sc-label"><LuSquareCheck size={14} style={{ display: 'inline', marginRight: '6px' }} /> Housekeeping & Service Status</div>
                <div className="sc-row"><span className="sc-row-l">Room 105 — Cleaning</span><span className="sc-badge" style={{ background: 'rgba(255,200,0,0.35)' }}>In Progress</span></div>
                <div className="sc-row"><span className="sc-row-l">Room 210 — Inspection</span><span className="sc-badge" style={{ background: 'rgba(50,255,120,0.3)' }}>Ready ✓</span></div>
                <div className="sc-row"><span className="sc-row-l">Service Call — Towels Rm 402</span><span className="sc-badge" style={{ background: 'rgba(255,80,50,0.3)' }}>Pending</span></div>
                <div className="sc-row"><span className="sc-row-l">Room 304 — Maintenance</span><span className="sc-badge" style={{ background: 'rgba(255,200,0,0.35)' }}>O.O.O</span></div>
                <div className="sc-row"><span className="sc-row-l">Active Cleanings Today</span><span className="sc-row-r">24</span></div>
              </div>
              <div className="sc-info">
                <div className="sc-info-title">Housekeeping Efficiency</div>
                <div className="sc-info-desc">Real-time status updates for your cleaning crew. Ensure rooms are turned over faster and guest service requests are never forgotten.</div>
              </div>
            </div>
            <div className="showcase-card reveal delay-2">
              <div className="sc-screen sc-tbl">
                <div className="sc-label"><LuBed size={14} style={{ display: 'inline', marginRight: '6px' }} /> Room Inventory View</div>
                <div className="sc-row"><span className="sc-row-l">All Floors</span><span className="sc-row-r">42 / 50 Occupied</span></div>
                <div className="sc-row"><span className="sc-row-l" style={{ color: '#86EFAC' }}>Available Rooms</span><span className="sc-row-r">8</span></div>
                <div className="sc-row"><span className="sc-row-l" style={{ color: '#FCA5A5' }}>Dirty Rooms</span><span className="sc-row-r">5</span></div>
                <div className="sc-row"><span className="sc-row-l" style={{ color: '#FDE68A' }}>Reserved Rooms</span><span className="sc-row-r">12</span></div>
                <div className="sc-row"><span className="sc-row-l">Arrivals Today</span><span className="sc-row-r">15 guests</span></div>
              </div>
              <div className="sc-info">
                <div className="sc-info-title">Inventory Overview</div>
                <div className="sc-info-desc">A bird's-eye view of your hotel's occupancy. Manage room blocks, track cleaning progress, and optimize revenue in real time.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold"></div>

      {/* WHY */}
      <section className="section-wrap alt" id="why">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <div className="section-eyebrow"><span className="pill pill-fire">Why Hotel</span></div>
              <h2 className="display-lg" style={{ marginBottom: '14px' }}>Run Your Hotel Smarter — Not Harder</h2>
              <p className="section-desc" style={{ marginBottom: '36px' }}>Eliminate booking errors, housekeeping delays, and inventory leaks. Get complete control over your hospitality business.</p>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-ico"><LuTrendingUp size={32} /></div>
                  <div className="why-text">
                    <h4>Check-in in Under 60 Seconds</h4>
                    <p>Streamlined guest intake with digital ID capture, room assignment, and instant welcome messaging via WhatsApp.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico"><LuSquareCheck size={32} /></div>
                  <div className="why-text">
                    <h4>Optimized Housekeeping Cycles</h4>
                    <p>Reduce room turnover time by 25% with real-time staff coordination and automated status reporting.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico"><LuPackage size={32} /></div>
                  <div className="why-text">
                    <h4>Plug Inventory Leaks</h4>
                    <p>Track every linen, amenity, and supply item. Know exactly where your supplies go and reduce operational theft.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-ico"><LuTrendingUp size={32} /></div>
                  <div className="why-text">
                    <h4>Data-Driven Revenue Growth</h4>
                    <p>Detailed reports on RevPAR, ADR, and source-wise bookings help you set the right price for every night.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal delay-2">
              <div className="why-stats-panel">
                <div className="why-stat">
                  <div className="why-stat-num">5K+</div>
                  <div className="why-stat-label">Hotels on Platform</div>
                </div>
                <div className="why-stat">
                  <div className="why-stat-num">2Cr+</div>
                  <div className="why-stat-label">Bills Generated</div>
                </div>
                <div className="why-stat">
                  <div className="why-stat-num">99.9%</div>
                  <div className="why-stat-label">Uptime Guarantee</div>
                </div>
                <div className="why-stat">
                  <div className="why-stat-num">4.9★</div>
                  <div className="why-stat-label">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section-wrap" id="workflow">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">How It Works</span></div>
            <h2 className="display-lg">From Booking to Check-out in 4 Simple Steps</h2>
            <p className="section-desc">Your entire hotel workflow — digitised, streamlined and running on autopilot.</p>
          </div>
          <div className="workflow-steps">
            <div className="workflow-connector"></div>
            <div className="wf-step reveal">
              <div className="wf-num">1</div>
              <h3 className="wf-title">Confirm the Booking</h3>
              <p className="wf-desc">Manage direct or channel bookings. System auto-assigns rooms and sends confirmation to the guest.</p>
            </div>
            <div className="wf-step reveal delay-1">
              <div className="wf-num">2</div>
              <h3 className="wf-title">Seamless Check-in</h3>
              <p className="wf-desc">Front desk verifies IDs and checks in guests in one tap. Housekeeping is instantly notified of stay start.</p>
            </div>
            <div className="wf-step reveal delay-2">
              <div className="wf-num">3</div>
              <h3 className="wf-title">Manage the Stay</h3>
              <p className="wf-desc">Add F&B, laundry, or spa charges directly to the room. Housekeeping keeps the room clean and ready.</p>
            </div>
            <div className="wf-step reveal delay-3">
              <div className="wf-num">4</div>
              <h3 className="wf-title">Hassle-free Check-out</h3>
              <p className="wf-desc">Unified bill generated with all services included. Accept payment and send digital invoice via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-ember"></div>

      {/* PRICING */}
      <section className="section-wrap alt" id="pricing">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-fire">Pricing Plans</span></div>
            <h2 className="display-lg">Simple, Transparent Pricing</h2>
            <p className="section-desc">No hidden charges. No surprises. Start free — upgrade when your hotel demands it.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal">
              <div className="plan-tier">Starter</div>
              <div className="plan-price-row">
                <div className="plan-price">₹699</div>
                <div className="plan-per">/month</div>
              </div>
              <div className="plan-tagline">Perfect for guest houses &amp; home-stays getting started with digital management.</div>
              <div className="plan-divider"></div>
              <div className="plan-feats">
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> GST Invoicing</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Room Management (up to 10)</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Basic Front Desk</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Guest Directory</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Daily Revenue Reports</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> 1 User Access</div>
                <div className="plan-feat off"><span className="feat-ico-no">✕</span> Housekeeping Module</div>
                <div className="plan-feat off"><span className="feat-ico-no">✕</span> Inventory &amp; Stock Control</div>
                <div className="plan-feat off"><span className="feat-ico-no">✕</span> CRM &amp; Guest Loyalty</div>
              </div>
              <a href="https://hotel.biosoftech.in/signup" target="_blank" rel="noreferrer">
                <button className="btn btn-outline btn-full">Get Started Free</button>
              </a>
            </div>
            <div className="pricing-card featured reveal delay-1">
              <div className="featured-badge"><LuStar size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Most Popular</div>
              <div className="plan-tier" style={{ color: 'var(--saffron)' }}>Pro</div>
              <div className="plan-price-row">
                <div className="plan-price">₹1,000</div>
                <div className="plan-per">/month</div>
              </div>
              <div className="plan-tagline">₹12,000 billed yearly. For growing boutique hotels &amp; resorts that need full operational control.</div>
              <div className="plan-divider"></div>
              <div className="plan-feats">
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Everything in Starter</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Housekeeping &amp; Service Module</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Inventory &amp; Asset Management</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Guest CRM &amp; Loyalty Programs</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> GSTR-1 &amp; GSTR-3B Reports</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> 5 User Access</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Staff Attendance &amp; Payroll</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> WhatsApp Guest Messaging</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Priority Support (24/7)</div>
              </div>
              <a href="https://hotel.biosoftech.in/signup" target="_blank" rel="noreferrer">
                <button className="btn btn-fire btn-full">Start 20-day free trial</button>
              </a>
            </div>
            <div className="pricing-card reveal delay-2">
              <div className="plan-tier">Enterprise</div>
              <div className="plan-price-row">
                <div className="plan-price">₹2,999</div>
                <div className="plan-per">/month</div>
              </div>
              <div className="plan-tagline">For hotel chains, luxury resorts &amp; large-scale multi-hotel operations.</div>
              <div className="plan-divider"></div>
              <div className="plan-feats">
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Everything in Pro</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Multi-Hotel Management</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Unlimited User Accounts</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Banquet &amp; Event Management</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Advanced Financial Analytics</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Custom Audit Trails</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Dedicated Account Manager</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Custom Onboarding &amp; Training</div>
                <div className="plan-feat"><span className="feat-ico-yes">✓</span> Full API &amp; Webhook Access</div>
              </div>
              <a href="https://hotel.biosoftech.in/signup" target="_blank" rel="noreferrer">
                <button className="btn btn-outline btn-full">Contact Our Sales Team</button>
              </a>
            </div>
          </div>
          <p className="pricing-note">All plans include a 20-day free trial. Annual billing saves up to 20%. <a href="#contact">Talk to us</a> for custom pricing.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-wrap" id="testimonials">
        <div className="container">
          <div className="section-title-block center reveal">
            <div className="section-eyebrow"><span className="pill pill-gold">Success Stories</span></div>
            <h2 className="display-lg">Loved by Hotel Owners Across India</h2>
            <p className="section-desc">Real stories from hotels that transformed their hospitality experience.</p>
          </div>
          <div className="testi-grid">
            <div className="testi-card reveal">
              <div className="testi-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="testi-quote">Hotel system ne hamare boutique stay ka poora operation badal diya. Front desk check-in ab bohot fast hai, aur housekeeping staff ko mobile par hi updates milte hain. Highly reliable tech!</p>
              <div className="testi-author-row">
                <div className="testi-avatar">VS</div>
                <div>
                  <div className="testi-name">Vikram Singh</div>
                  <div className="testi-biz">Heritage Haveli Stay, Udaipur</div>
                  <div className="testi-role">Owner since 2023</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal delay-1">
              <div className="testi-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="testi-quote">Managing a resort with 50+ rooms was a nightmare with paper records. Now, I track ADR and RevPAR from my phone. Inventory deduction is fully automatic, saving us lakhs in wastage.</p>
              <div className="testi-author-row">
                <div className="testi-avatar">AN</div>
                <div>
                  <div className="testi-name">Anjali Nair</div>
                  <div className="testi-biz">Coastal Palms Resort, Goa</div>
                  <div className="testi-role">Enterprise Plan · 52 Rooms</div>
                </div>
              </div>
            </div>
            <div className="testi-card reveal delay-2">
              <div className="testi-stars">
                <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
              </div>
              <p className="testi-quote">Guest CRM aur WhatsApp automation ne repeat bookings 40% improve kar diye. Support team hamesha ready rehti hai help ke liye. It's truly a must-have for any hotel business in India.</p>
              <div className="testi-author-row">
                <div className="testi-avatar">SK</div>
                <div>
                  <div className="testi-name">Suresh Kapoor</div>
                  <div className="testi-biz">Metropolis Business Hotel, Noida</div>
                  <div className="testi-role">Pro Plan · 35 Rooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-banner" id="signup">
        <div className="cta-banner-inner">
          <div className="section-eyebrow" style={{ marginBottom: '20px' }}><span className="pill pill-dark">Start Today</span></div>
          <h2>Start Running Your Hotel Smarter — Today</h2>
          <p>Join 5,000+ Indian hotels saving time, reducing errors, and maximising profit with Hotel.</p>
          <div className="cta-banner-btns">
            <a href="https://hotel.biosoftech.in/signup" target="_blank" rel="noreferrer" className="btn btn-white btn-lg">🏨 Start Free Trial — No Card Needed</a>
            <a href="/contact" className="btn btn-glass btn-lg">▶ Book a Free Demo</a>
          </div>
          <p className="cta-note">✓ 20-day free trial &nbsp;·&nbsp; ✓ Setup in under 10 minutes &nbsp;·&nbsp; ✓ Free onboarding support</p>
        </div>
      </div>

      <div className="divider-gold"></div>
    </Layout>
  );
};

export default Hotels;
