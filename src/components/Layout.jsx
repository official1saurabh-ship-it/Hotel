import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LuHotel, 
  LuMenu,
  LuX,
  LuMessageCircle,
  LuInstagram,
  LuFacebook,
  LuSparkles,
  LuUtensils,
  LuPartyPopper
} from 'react-icons/lu';

import logoImg from '../assets/logo.png';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const location = useLocation();

  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const handleAction = (e, action = "Coming Soon") => {
    if (e) e.preventDefault();
    showToast(`${action}! 🚀`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and handle anchor scrolling
  useEffect(() => {
    setIsMobileMenuOpen(false);

    if (location.hash) {
      // Small timeout to ensure DOM is rendered
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navLinks = [
    { name: 'Features', path: '/#features' },
    { name: 'Modules', path: '/#modules' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Why Us', path: '/#why' },
    { name: 'Reviews', path: '/#testimonials' },
    { name: 'Contact', path: '/contact' },
  ];



  const handleWhatsApp = () => {
    const phone = "916204442585"; // primary support number
    const message = "Hi Sir, I want to start free trial";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };


  return (
    <div className="min-h-screen flex flex-col">
      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[2000] bg-zinc-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 border border-white/10">
          <span className="text-[#4C3575]"><LuSparkles /></span>
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      {/* FLOATING CTA (Only on home or if specified) */}
      {location.pathname === '/' && (
        <a href="#signup" className="floating-cta-btn flex items-center gap-2"><LuUtensils size={18} /> Start Free Trial</a>
      )}

      {/* TOPBAR */}
      <div className="topbar">
        <LuPartyPopper className="inline mr-2" /> Limited Offer: 3 months free on Pro plan — <a href="/#pricing">Claim now →</a>
      </div>
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img 
              src={logoImg} 
              alt="Hotel Logo" 
              style={{ 
                height: '64px', 
                width: 'auto', 
                borderRadius: '8px',
                objectFit: 'contain'
              }} 
            />
          </Link>

          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.path.startsWith('/#') ? (
                  <a href={link.path}>{link.name}</a>
                ) : (
                  <Link to={link.path}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="https://hotel.biosoftech.in/login" className="btn btn-outline btn-sm">Log In</a>
            <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-sm">Start Free Trial →</a>
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}></span>
              <span className={isMobileMenuOpen ? "opacity-0" : ""}></span>
              <span className={isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          link.path.startsWith('/#') ? (
            <a key={link.name} href={link.path} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ) : (
            <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          )
        ))}
        <div className="mobile-menu-divider"></div>
        <div className="mobile-menu-actions">
          <a href="https://hotel.biosoftech.in/login" className="btn btn-outline btn-full">Log In</a>
          <a href="https://hotel.biosoftech.in/signup" className="btn btn-fire btn-full">Start Free Trial →</a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-logo">
                <img 
                  src={logoImg} 
                  alt="Hotel Logo" 
                  style={{ 
                    height: '72px', 
                    width: 'auto', 
                    borderRadius: '8px',
                    objectFit: 'contain'
                  }} 
                />
              </div>
              <p className="footer-brand-desc">India's most complete hotel management software — POS, KDS, Table Management, Inventory, CRM and GST reporting for hotels, resorts, staycations and dhabas across India.</p>
              <div className="footer-socials">
                <a href="https://www.facebook.com/people/Hotel-Mitra/61589084737345/" target="_blank" rel="noopener noreferrer" className="soc-btn"><LuFacebook /></a>
                <a href="https://www.instagram.com/thehotelmitra/" target="_blank" rel="noopener noreferrer" className="soc-btn"><LuInstagram /></a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Modules</div>
              <div className="footer-col-links">
                <a href="/#modules">POS & Billing</a>
                <a href="/#modules">Kitchen & Room Service</a>
                <a href="/#modules">Room & Table Management</a>
                <a href="/#modules">Inventory & Stock</a>
                <a href="/#modules">CRM & Guest Loyalty</a>
                <a href="/#modules">GST & Audit Reports</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Hotels</div>
              <div className="footer-col-links">
                <a href="/#features">Luxury Resorts</a>
                <a href="/#features">Boutique Hotels</a>
                <a href="/#features">Business Hotels</a>
                <a href="/#features">Guest Houses & Stays</a>
                <a href="/#features">Banquets & Events</a>
                <a href="/#features">Hotel Dining</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Support</div>
              <div className="footer-col-links">
                <Link to="/contact">Help Center</Link>
                <a href="#" onClick={handleWhatsApp}>WhatsApp Support</a>
                {/* <a href="#" onClick={(e) => handleAction(e, "Tutorials")}>Video Tutorials</a> */}
                <Link to="/contact" >Contact Us</Link>
                <a >+91-6204442585, <br/> +91-6209688930</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2025 Hotel Technologies Pvt. Ltd. &nbsp;·&nbsp; 🇮🇳 Made with ❤️ in India</div>
            <div className="footer-bottom-right">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/refund">Refund Policy</Link>
              <Link to="/security">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
