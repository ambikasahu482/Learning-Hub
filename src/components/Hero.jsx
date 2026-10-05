import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle, Landmark, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "https://commons.wikimedia.org/wiki/Special:FilePath/The_Taj_Mahal_%2C_Agra.jpg?width=1800";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-media" src={heroImage} alt="Taj Mahal in Agra" fetchPriority="high" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <span className="eyebrow light">INDIA • HISTORY • CULTURE • LEARNING</span>
          <h1>Discover the stories<br/><em>behind our heritage.</em></h1>
          <p>Explore India's monuments, temples, traditions and festivals through a modern, interactive learning journey designed for curious minds.</p>
          <div className="hero-actions"><Link to="/learning" className="btn btn-primary">Start Learning <ArrowRight size={18}/></Link><Link to="/heritage" className="btn btn-glass"><PlayCircle size={18}/> Explore Heritage</Link></div>
          <div className="hero-stats"><span><Landmark/> <b>100+</b> Heritage Stories</span><span><BookOpen/> <b>8</b> Learning Paths</span><span><Users/> <b>1000+</b> Learners</span></div>
        </motion.div>
      </div>
      <div className="hero-scroll">Scroll to explore ↓</div>
    </section>
  );
}
