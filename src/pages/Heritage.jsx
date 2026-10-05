import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { heritageData, categories } from "../data/heritageData";
import HeritageCard from "../components/HeritageCard";

export default function Heritage() {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "All";
  const filtered = useMemo(() => heritageData.filter(x => (category === "All" || x.category === category) && `${x.name} ${x.location} ${x.category}`.toLowerCase().includes(search.toLowerCase())), [search, category]);
  return <section className="page-section"><div className="container">
    <div className="page-hero"><span className="eyebrow">HERITAGE EXPLORER</span><h1>Explore India's <em>living history.</em></h1><p>Search, filter and discover stories behind places, traditions and celebrations.</p></div>
    <div className="explore-toolbar"><div className="big-search"><Search/><input value={search} onChange={e=>setParams({search:e.target.value,category})} placeholder="Search Taj Mahal, temples, Jaipur..."/></div><div className="filter-row"><SlidersHorizontal size={17}/>{categories.map(c=><button key={c} className={category===c?"filter active":"filter"} onClick={()=>setParams({search,category:c})}>{c}</button>)}</div></div>
    <div className="result-count">{filtered.length} heritage {filtered.length===1?"story":"stories"} found</div>
    {filtered.length ? <div className="card-grid">{filtered.map(item=><HeritageCard key={item.id} item={item}/>)}</div> : <div className="empty-state"><div>🔎</div><h3>No heritage found</h3><p>Try another keyword or choose a different category.</p><button className="btn btn-primary" onClick={()=>setParams({category:"All"})}>Show all</button></div>}
  </div></section>;
}