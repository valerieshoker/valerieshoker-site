// Book.jsx
import { useNavigate } from "react-router-dom";
import projectwindowImg from "../assets/projectwindow.png"; 

export default function Book() {
  const navigate = useNavigate();

  return (
    <img
      src={projectwindowImg}
      alt="Projects"
      className="absolute top-[15%] left-[29%] w-[120px] h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate("/projects")}
    />
  );
}
