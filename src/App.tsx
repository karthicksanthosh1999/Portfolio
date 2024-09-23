import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Screens/Contact";
import Portfolio from "./Screens/Portfolio";
import Project from "./Screens/Project";
import Blog from "./Screens/Blog";
import { useEffect } from "react";


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/project/:id" Component={Project} />
        <Route path="/blog/:id" Component={Blog} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
