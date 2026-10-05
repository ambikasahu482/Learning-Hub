import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, Route, BookOpenCheck } from "lucide-react";
import { useHeritage } from "../context/HeritageContext";
import { heritageData } from "../data/heritageData";
import ProgressBar from "../components/ProgressBar";

export default function Learning() {
  const { overallProgress, interest, level } = useHeritage();
  const featured = interest ? heritageData.filter(x => x.category.toLowerCase().includes(interest.toLowerCase())).slice(0,3) : heritageData.slice(0,3);
  return <section className="page-section"><div className="container">
    <div className="page-hero"><span className="eyebrow">LEARNING HUB</span><h1>Your heritage <em>learning journey.</em></h1><p>Move from discovery to knowledge with a clear, connected path.</p></div>
    <div className="learning-banner"><div><span className="eyebrow light">CURRENT PROGRESS</span><h2>{overallProgress}% complete</h2><ProgressBar value={overallProgress} label={`Level: ${level}`}/></div><Link className="btn btn-light" to="/assessment">Continue journey <ArrowRight size={18}/></Link></div>
    <div className="journey-grid"><div className="journey-step done"><span><CheckCircle2/></span><div><b>01. Choose your interest</b><p>Select the heritage topics you want to understand.</p></div></div><div className="journey-step"><span><Target/></span><div><b>02. Assessment</b><p>Take a quick quiz to establish your starting point.</p></div></div><div className="journey-step"><span><Route/></span><div><b>03. Personalized roadmap</b><p>Follow a practical sequence based on your interests.</p></div></div><div className="journey-step"><span><BookOpenCheck/></span><div><b>04. Learn & certify</b><p>Explore resources, complete quizzes and earn a certificate.</p></div></div></div>
    <div className="section-head"><div><span className="eyebrow">RECOMMENDED FOR YOU</span><h2>Start with these stories.</h2></div></div>
    <div className="card-grid">{featured.map(item=><Link to={`/heritage/${item.id}`} className="learning-story" key={item.id}><img src={item.image} alt={item.name}/><div><span>{item.category}</span><h3>{item.name}</h3><p>Explore story →</p></div></Link>)}</div>
  </div></section>;
}