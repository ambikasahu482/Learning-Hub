import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register }=useAuth(); const navigate=useNavigate(); const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [confirm,setConfirm]=useState(""); const [error,setError]=useState("");
  const submit=e=>{e.preventDefault(); if(password!==confirm){setError("Passwords do not match.");return;} const r=register(name,email,password); if(!r.ok)setError(r.message);else navigate("/dashboard",{replace:true});};
  return <section className="auth-page"><div className="auth-card"><div className="auth-logo">✦</div><span className="eyebrow">JOIN THE COMMUNITY</span><h1>Create your <em>account.</em></h1><p>Save heritage stories and track your learning.</p>{error&&<div className="alert error">{error}</div>}<form onSubmit={submit}><label>Full name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" required/></label><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="At least 6 characters" required/></label><label>Confirm password<input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Repeat password" required/></label><button className="btn btn-primary full"><UserPlus size={18}/> Create Account</button></form><p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p></div></section>;
}