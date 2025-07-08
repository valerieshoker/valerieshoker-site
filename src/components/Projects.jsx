// Book.jsx
import { useNavigate } from "react-router-dom";
import projectsImg from "../assets/Projects.png"; 

export default function Book() {
  const navigate = useNavigate();

  return (
    <img
      src={projectsImg}
      alt="Projects"
      className="absolute top-[14%] left-[37%] w-[80px] h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate("/projects")}
    />
  );
}
