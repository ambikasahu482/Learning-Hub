import { Link } from "react-router-dom";
import { Heart, MapPin, ArrowUpRight } from "lucide-react";
import { useHeritage } from "../context/HeritageContext";
import fallbackImage from "../assets/images/taj-mahal.png";

export default function HeritageCard({ item }) {
  const { favorites, toggleFavorite, progress } = useHeritage();
  const favorite = favorites.includes(item.id);
  return (
    <article className="heritage-card">
      <div className="card-image-wrap">
        <img src={item.image} alt={`${item.name} heritage site`} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackImage; }}/>
        <span className="category-tag">{item.category}</span>
        <button className={`favorite-btn ${favorite ? "liked" : ""}`} onClick={() => toggleFavorite(item.id)} aria-label="Toggle favorite">
          <Heart size={18} fill={favorite ? "currentColor" : "none"}/>
        </button>
      </div>
      <div className="card-body">
        <div className="location"><MapPin size={14}/>{item.location}</div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {progress[item.id] > 0 && <div className="mini-progress"><span style={{width: `${progress[item.id]}%`}}></span></div>}
        <Link className="card-link" to={`/heritage/${item.id}`}>Explore <ArrowUpRight size={16}/></Link>
      </div>
    </article>
  );
}