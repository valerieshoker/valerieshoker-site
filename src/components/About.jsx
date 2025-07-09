//About.jsx
import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/About.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <img
      src={aboutImg}
      alt="About"
      className="absolute top-[45%] left-[21%] w-[150px] h-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate("/about")}
    />
  );
}
