import { BookOpen, PlayCircle, FileText, ExternalLink } from "lucide-react";
import { resources } from "../data/resourcesData";

const icons = { Article: BookOpen, Video: PlayCircle, Guide: FileText };

export default function Resources() {
  return <section className="page-section"><div className="container"><div className="page-hero"><span className="eyebrow">LEARNING RESOURCES</span><h1>Go deeper, <em>at your pace.</em></h1><p>Curated articles, videos and guides to extend your heritage learning journey.</p></div><div className="resource-grid">{resources.map(r=>{const Icon=icons[r.type]||BookOpen; return <article className="resource-card" key={r.id}><div className="resource-icon"><Icon/></div><div className="resource-meta"><span>{r.type}</span><span>{r.duration}</span></div><h3>{r.title}</h3><p>{r.description}</p><button className="text-link" onClick={()=>alert(`Opening resource: ${r.title}`)}>Open resource <ExternalLink size={16}/></button></article>})}</div></div></section>;
}