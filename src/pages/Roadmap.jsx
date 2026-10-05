import { Link } from "react-router-dom";
import { CheckCircle2, Circle, ArrowRight, Compass, Award } from "lucide-react";
import { useHeritage } from "../context/HeritageContext";
import { heritageData } from "../data/heritageData";

export default function Roadmap() {
  const { interest, level, progress } = useHeritage();
  const items = interest ? heritageData.filter(x=>x.category===interest || (interest==="History" && ["Monuments","Temples"].includes(x.category))) : heritageData.slice(0,4);
  return <section className="page-section"><div className="container">
    <div className="page-hero"><span className="eyebrow">PERSONALIZED ROADMAP</span><h1>Your path to <em>heritage fluency.</em></h1><p>Designed for <strong>{level}</strong> learners interested in <strong>{interest || "Indian Heritage"}</strong>.</p></div>
    <div className="roadmap"><div className="roadmap-line"></div>{items.map((item,i)=>{const done=(progress[item.id]||0)>=100; return <div className={`roadmap-item ${done?"completed":""}`} key={item.id}><div className="roadmap-dot">{done?<CheckCircle2/>:<Circle/>}</div><div className="roadmap-card"><div><span className="step-label">STEP {String(i+1).padStart(2,"0")}</span><h3>{item.name}</h3><p>{item.description}</p></div><Link className="btn btn-small btn-outline" to={`/heritage/${item.id}`}>{done?"Review":"Start"} <ArrowRight size={15}/></Link></div></div>})}</div>
    <div className="roadmap-complete"><div><Award size={32}/><h3>Complete the journey</h3><p>Finish your roadmap items and quizzes to unlock your certificate.</p></div><Link className="btn btn-primary" to="/certificate">Check Certificate <ArrowRight size={17}/></Link></div>
  </div></section>;
}