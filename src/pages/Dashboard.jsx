import { Link } from "react-router-dom";
import { Heart, Trophy, BookOpen, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useHeritage } from "../context/HeritageContext";
import { heritageData } from "../data/heritageData";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  const { user } = useAuth();
  const { favorites, overallProgress, progress, interest, level } = useHeritage();
  const completed = heritageData.filter(x=>(progress[x.id]||0)>=100).length;
  return <section className="page-section"><div className="container"><div className="dashboard-head"><div><span className="eyebrow">MY DASHBOARD</span><h1>Welcome back, <em>{user?.name?.split(" ")[0]}</em>.</h1><p>Keep building your heritage knowledge one story at a time.</p></div><Link className="btn btn-primary" to="/learning">Continue Learning <ArrowRight size={17}/></Link></div>
    <div className="stats-grid"><div className="stat-card"><BookOpen/><span>Overall progress</span><strong>{overallProgress}%</strong></div><div className="stat-card"><Heart/><span>Saved stories</span><strong>{favorites.length}</strong></div><div className="stat-card"><Trophy/><span>Completed</span><strong>{completed}</strong></div><div className="stat-card"><span>◎</span><span>Learning level</span><strong>{level}</strong></div></div>
    <div className="dashboard-grid"><div className="content-card"><h2>Learning progress</h2><ProgressBar value={overallProgress} label={`${interest || "Indian Heritage"} • ${level}`}/><div className="progress-list">{heritageData.slice(0,5).map(x=><ProgressBar key={x.id} value={progress[x.id]||0} label={x.name}/>)}</div></div><div className="content-card"><h2>Quick actions</h2><div className="quick-links"><Link to="/assessment">Take assessment <ArrowRight/></Link><Link to="/roadmap">View roadmap <ArrowRight/></Link><Link to="/favorites">Saved heritage <ArrowRight/></Link><Link to="/certificate">Certificate <ArrowRight/></Link></div></div></div>
  </div></section>;
}