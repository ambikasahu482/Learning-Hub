import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Calendar, CheckCircle2, Play, BookOpen, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { getHeritageById } from "../data/heritageData";
import { useHeritage } from "../context/HeritageContext";

export default function HeritageDetails() {
  const { id } = useParams();
  const item = getHeritageById(id);
  const { favorites, toggleFavorite, progress, setItemProgress } = useHeritage();
  const navigate = useNavigate();

  if (!item) return <section className="page-section"><div className="container empty-state"><h2>Heritage story unavailable</h2><p>Please choose a story from the Heritage Explorer.</p><Link className="btn btn-primary" to="/heritage">Back to Explorer</Link></div></section>;

  const favorite = favorites.includes(item.id);
  const current = progress[item.id] || 0;

  const startLearning = () => {
    setItemProgress(item.id, Math.max(current, 25));
    navigate(`/assessment?topic=${item.quizId}`);
  };

  return <section className="page-section detail-page"><div className="container">
    <Link to="/heritage" className="back-link"><ArrowLeft size={17}/> Back to Heritage</Link>
    <div className="detail-hero">
      <motion.img initial={{opacity:0}} animate={{opacity:1}} src={item.image} alt={item.name}/>
      <div className="detail-intro"><span className="category-tag static">{item.category}</span><h1>{item.name}</h1><p className="lead">{item.description}</p><div className="meta-row"><span><MapPin size={17}/>{item.location}</span><span><Calendar size={17}/>{item.year}</span></div><div className="detail-actions"><button className={`btn ${favorite?"btn-soft":"btn-outline"}`} onClick={()=>toggleFavorite(item.id)}><Heart size={18} fill={favorite?"currentColor":"none"}/>{favorite?"Saved":"Save"}</button><button className="btn btn-primary" onClick={startLearning}><Play size={18}/> Start Learning</button></div></div>
    </div>
    <div className="detail-grid"><main>
      <section className="content-card"><h2>Overview</h2><p>{item.history}</p><h3>Architecture & cultural significance</h3><p>{item.architecture}</p></section>
      <section className="content-card"><h2>Did you know?</h2><ul className="check-list">{item.facts.map(f=><li key={f}><CheckCircle2 size={18}/>{f}</li>)}</ul></section>
    </main><aside>
      <div className="side-card"><span className="eyebrow">YOUR PROGRESS</span><div className="circle-progress" style={{"--progress":`${current}%`}}><strong>{current}%</strong></div><p>{current===100?"Completed!":"Keep learning to unlock your next stage."}</p><button className="btn btn-primary full" onClick={startLearning}><ClipboardCheck size={17}/> Continue</button></div>
      <div className="side-card"><BookOpen size={24}/><h3>Next steps</h3><Link to="/resources">Learning resources →</Link><Link to="/roadmap">Your roadmap →</Link></div>
    </aside></div>
  </div></section>;
}