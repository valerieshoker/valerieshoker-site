import { useNavigate } from "react-router-dom";
import projectwindowImg from "../assets/projectwindow.png"; 

export default function Book() {
  const navigate = useNavigate();

  return (
    <div
      className="absolute top-[15%] left-[29%] w-[120px] cursor-pointer group"
      onClick={() => navigate("/projects")}
    >
      <img
        src={projectwindowImg}
        alt="Projects"
        className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

{/* Blinking block overlay */}
<span
  className="absolute animate-blink"
  style={{
    bottom: "46%",      
    left: "43%",       
    transform: "translate(-50%, 50%)",
    width: "18px",      
    height: "6px",     
    borderRadius: "2px",
    backgroundColor: "#fef2d5" // cream color
  }}
></span>
    </div>
  );
}
