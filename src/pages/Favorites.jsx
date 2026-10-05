import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useHeritage } from "../context/HeritageContext";
import { heritageData } from "../data/heritageData";
import HeritageCard from "../components/HeritageCard";

export default function Favorites() {
  const { favorites } = useHeritage();
  const items = heritageData.filter(x=>favorites.includes(x.id));
  return <section className="page-section"><div className="container"><div className="page-hero compact"><span className="eyebrow">YOUR COLLECTION</span><h1>Saved <em>heritage.</em></h1><p>Keep the stories you want to revisit close at hand.</p></div>{items.length?<div className="card-grid">{items.map(x=><HeritageCard key={x.id} item={x}/>)}</div>:<div className="empty-state"><Heart size={42}/><h3>Your collection is empty</h3><p>Tap the heart on any heritage story to save it here.</p><Link className="btn btn-primary" to="/heritage">Explore Heritage</Link></div>}</div></section>;
}