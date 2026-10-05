import { Link } from "react-router-dom";
import { Award, Download, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useHeritage } from "../context/HeritageContext";

export default function Certificate() {
  const { user } = useAuth();
  const { overallProgress } = useHeritage();
  const download = () => {
    const html = `<html><body style="font-family:Arial;text-align:center;padding:80px"><h1>Heritage Learning Hub</h1><h2>Certificate of Completion</h2><p>This certifies that</p><h1>${user?.name || "Learner"}</h1><p>has completed the Indian Heritage Learning Journey.</p><h2>Progress: ${overallProgress}%</h2><p>Heritage Learning Hub • 2026</p></body></html>`;
    const blob = new Blob([html], {type:"text/html"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="heritage-learning-certificate.html"; a.click(); URL.revokeObjectURL(a.href);
  };
  const eligible = overallProgress >= 80;
  return <section className="page-section"><div className="container certificate-page"><div className="certificate"><div className="cert-border"><Award size={48}/><span className="eyebrow">HERITAGE LEARNING HUB</span><h1>Certificate of Completion</h1><p>This certificate is proudly presented to</p><h2>{user?.name || "Learner"}</h2><p>for completing the guided Indian Heritage learning journey.</p><div className="cert-score">Progress: <strong>{overallProgress}%</strong></div><small>Issued in 2026 • Heritage Learning Hub</small></div></div><div className="certificate-actions">{eligible?<button className="btn btn-primary" onClick={download}><Download size={18}/> Download Certificate</button>:<><p>Complete at least 80% of the learning journey to unlock your certificate.</p><Link className="btn btn-primary" to="/learning">Continue Learning <ArrowRight size={18}/></Link></>}</div></div></section>;
}