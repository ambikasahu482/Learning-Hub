import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search, Heart, UserCircle, LogOut, BookOpen } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useHeritage } from "../context/HeritageContext";

const links = [
  ["/", "Home"], ["/heritage", "Heritage"], ["/temples", "Temples"],
  ["/monuments", "Monuments"], ["/culture", "Culture"], ["/festivals", "Festivals"],
  ["/learning", "Learning"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { user, logout } = useAuth();
  const { favorites } = useHeritage();
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/heritage?search=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon"><BookOpen size={22}/></span>
          <span>Heritage<span className="brand-accent">Hub</span></span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <div className="mobile-actions">
            {user ? <button className="nav-action danger" onClick={() => { logout(); setOpen(false); navigate("/"); }}><LogOut size={17}/> Logout</button>
                   : <Link className="nav-action primary" to="/login" onClick={() => setOpen(false)}>Login</Link>}
          </div>
        </nav>

        <div className="nav-tools">
          <form className="nav-search" onSubmit={submitSearch}>
            <Search size={17}/>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search heritage..." aria-label="Search heritage"/>
          </form>
          <Link className="icon-btn" to="/favorites" aria-label="Favorites"><Heart size={19}/><span className="badge">{favorites.length}</span></Link>
          {user ? (
            <div className="user-menu">
              <Link to="/dashboard" className="user-pill"><UserCircle size={19}/><span>{user.name.split(" ")[0]}</span></Link>
              <button className="logout-btn" onClick={() => { logout(); navigate("/"); }}><LogOut size={17}/> Logout</button>
            </div>
          ) : <Link className="login-btn" to="/login">Login</Link>}
        </div>

        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
    </header>
  );
}