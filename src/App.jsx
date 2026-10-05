import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
import HeritageDetails from "./pages/HeritageDetails";
import CategoryPage from "./pages/CategoryPage";
import Learning from "./pages/Learning";
import Assessment from "./pages/Assessment";
import Roadmap from "./pages/Roadmap";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Certificate from "./pages/Certificate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return <>
    <ScrollToTop/>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/heritage" element={<Heritage/>}/>
        <Route path="/heritage/:id" element={<HeritageDetails/>}/>
        <Route path="/temples" element={<CategoryPage category="Temples" title="Sacred spaces, enduring stories." intro="Explore temple architecture, spiritual traditions and living cultural practices."/>}/>
        <Route path="/monuments" element={<CategoryPage category="Monuments" title="Monuments that shaped history." intro="Meet the buildings and places that carry centuries of memory."/>}/>
        <Route path="/culture" element={<CategoryPage category="Culture" title="Culture in motion." intro="Discover art, dance and traditions that continue to evolve."/>}/>
        <Route path="/festivals" element={<CategoryPage category="Festivals" title="Celebrations with meaning." intro="Explore the stories, symbols and practices behind India's festivals."/>}/>
        <Route path="/learning" element={<Learning/>}/>
        <Route path="/assessment" element={<Assessment/>}/>
        <Route path="/roadmap" element={<ProtectedRoute><Roadmap/></ProtectedRoute>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/favorites" element={<ProtectedRoute><Favorites/></ProtectedRoute>}/>
        <Route path="/certificate" element={<ProtectedRoute><Certificate/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </main>
    <Footer/>
  </>;
}