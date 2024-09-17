import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Screens/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <ScrollToTop/>
      <Footer />
    </>
  );
}

export default App;
