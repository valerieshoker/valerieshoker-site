//Hotspot.jsx
import Writing from "./Writing";
import Globe from "./Globe";
import Fun from "./Fun";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import bookshelfImg from "../assets/Bookshelf.png";

export default function Hotspot() {
  return (
    <div className="relative w-[1000px] h-[700px] overflow-hidden">
      <img
        src={bookshelfImg}
        alt="Bookshelf"
        className="w-full h-full object-contain"
      />

      {/* Modular objects with animation + navigation */}
      <Projects />
      <About />
      <Globe />
      <Writing />
      <Contact />
      <Fun />
    </div>
  );
}
