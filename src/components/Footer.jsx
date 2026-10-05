import { Link } from "react-router-dom";
import { Mail, MapPin, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand"><span className="brand-icon">✦</span>Heritage<span className="brand-accent">Hub</span></Link>
          <p>Explore, learn and preserve India's extraordinary cultural heritage through an interactive learning experience.</p>
          <div className="footer-contact"><span><Mail size={16}/> hello@heritagehub.demo</span><span><MapPin size={16}/> India</span></div>
        </div>
        <div><h4>Explore</h4><Link to="/heritage">Heritage Explorer</Link><Link to="/monuments">Monuments</Link><Link to="/temples">Temples</Link><Link to="/culture">Culture</Link></div>
        <div><h4>Learn</h4><Link to="/learning">Learning Hub</Link><Link to="/assessment">Assessment</Link><Link to="/roadmap">Roadmap</Link><Link to="/resources">Resources</Link></div>
        <div><h4>Platform</h4><Link to="/about">About Us</Link><Link to="/contact">Contact</Link><Link to="/dashboard">Dashboard</Link><Link to="/certificate">Certificate</Link></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Heritage Learning Hub</span><span>Made with <Heart size={14} fill="currentColor"/> for India's heritage</span></div>
    </footer>
  );
}