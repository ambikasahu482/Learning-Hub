import { useSearchParams } from "react-router-dom";
import HeritageCard from "../components/HeritageCard";
import { heritageData } from "../data/heritageData";

export default function CategoryPage({ category, title, intro }) {
  const [, setParams] = useSearchParams();
  const data = heritageData.filter(x => x.category === category);
  return <section className="page-section"><div className="container">
    <div className="page-hero compact"><span className="eyebrow">{category.toUpperCase()}</span><h1>{title}</h1><p>{intro}</p></div>
    <div className="card-grid">{data.map(item=><HeritageCard key={item.id} item={item}/>)}</div>
    {!data.length && <div className="empty-state"><h3>More stories coming soon</h3><p>This collection is ready for expansion.</p><button className="btn btn-primary" onClick={()=>setParams({category:"All"})}>Explore all heritage</button></div>}
  </div></section>;
}