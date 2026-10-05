import { Link } from "react-router-dom";
import { ArrowRight, Compass, BookOpen, Award, ShieldCheck, Heart } from "lucide-react";
import { heritageData } from "../data/heritageData";
import { useHeritage } from "../context/HeritageContext";

export default function Home() {
  const { favorites, toggleFavorite } = useHeritage();
  const featured = heritageData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2000&q=85" 
          alt="Heritage Hero" 
          className="hero-media"
          fetchpriority="high"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow light">DISCOVER INDIA'S LEGACY</span>
          <h1>Sacred Spaces, <em>Enduring Stories</em></h1>
          <p>
            Explore India’s magnificent temple architecture, historic monuments, living cultural traditions, and timeless festivals through an interactive journey.
          </p>
          <div className="hero-actions">
            <Link to="/heritage" className="btn btn-primary">
              Explore Heritage <ArrowRight size={18} />
            </Link>
            <Link to="/learning" className="btn btn-glass">
              Start Learning Path
            </Link>
          </div>
          <div className="hero-stats">
            <span><Compass size={17} /> 50+ Monuments & Temples</span>
            <span><BookOpen size={17} /> Guided Learning Modules</span>
            <span><Award size={17} /> Certified Assessments</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section tinted">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>A Complete Cultural Journey</h2>
            <p>Everything you need to discover, learn, and test your knowledge about India's rich heritage.</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><Compass size={22} /></div>
              <b>Rich Exploration</b>
              <p>Detailed guides on temples, monuments, art, dance forms, and vibrant festivals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><BookOpen size={22} /></div>
              <b>Structured Learning</b>
              <p>Interactive roadmaps and personalized learning paths based on your interests.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Award size={22} /></div>
              <b>Assessments & Badges</b>
              <p>Test your knowledge with quizzes and earn official certificates upon completion.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><ShieldCheck size={22} /></div>
              <b>Personal Dashboard</b>
              <p>Track your progress, save favorites, and pick up right where you left off.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heritage Section */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">HIGHLIGHTS</span>
              <h2>Featured Heritage Sites</h2>
            </div>
            <Link to="/heritage" className="text-link">
              View All Sites <ArrowRight size={16} />
            </Link>
          </div>
          <div className="card-grid">
            {featured.map((item) => {
              const isLiked = favorites.includes(item.id);
              return (
                <div key={item.id} className="heritage-card">
                  <div className="card-image-wrap">
                    <img src={item.image} alt={item.title} />
                    <span className="category-tag">{item.category}</span>
                    <button 
                      className={`favorite-btn ${isLiked ? "liked" : ""}`} 
                      onClick={() => toggleFavorite(item.id)}
                      aria-label="Favorite"
                    >
                      <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                    </button>
                  </div>
                  <div className="card-body">
                    <span className="location">{item.location}</span>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <Link to={`/heritage/${item.id}`} className="card-link">
                      Explore Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta">
          <div>
            <span className="eyebrow">BEGIN TODAY</span>
            <h2>Ready to dive deep into India's history?</h2>
            <p>Take our quick assessment to customize your personalized learning roadmap.</p>
          </div>
          <Link to="/assessment" className="btn btn-light">
            Take Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}