import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume/>} />
      </Routes>
    </>
  );
}

export default App;
