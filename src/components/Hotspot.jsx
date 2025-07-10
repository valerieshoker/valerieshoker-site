//Hotspot.jsx
import Writing from "./Writing";
import Globe from "./Globe";
import Fun from "./Fun";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Croissant from "./Croissant";
import bookshelfImg from "../assets/Bookshelf.png";
import armchairImg from '../assets/armchair.png';
import sidetableImg from '../assets/sidetable.png';
import espressoImg from '../assets/espresso.png';

export default function Hotspot() {
  return (
    <div className="relative w-[1000px] h-[700px] overflow-hidden">
      <img
        src={bookshelfImg}
        alt="Bookshelf"
          className="absolute left-[10%] w-[480px] object-contain"
      />
       <img
        src={armchairImg}
        alt="Armchair"
        className="absolute bottom-[5px] left-[65%] w-[360px] object-contain"
      />
        <img
        src={sidetableImg}
        alt="SideTable"
        className="absolute bottom-[30px] left-[46%] w-[280px] object-contain"
      />
       <img
        src={espressoImg}
        alt="Espresso"
        className="absolute bottom-[213px] left-[53.5%] w-[65px] object-contain"
      />


      {/* Modular objects with animation + navigation */}
      <Projects />
      <About />
      <Globe />
      <Writing />
      <Contact />
      <Fun />
      <Croissant />
    </div>
  );
}
