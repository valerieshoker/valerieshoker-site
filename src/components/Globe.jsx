// Globe.jsx
import { useNavigate } from "react-router-dom";
import globeImg from "../assets/Globe.png"; 

export default function Globe() {
  const navigate = useNavigate();

  return (
    <img
      src={globeImg}
      alt="Globe"
      className="absolute top-[30%] left-[24%] w-[90px] h-auto object-contain hover:rotate-[360deg] transition-transform duration-700 ease-in-out cursor-pointer"
      onClick={() => navigate("/travel")}
    />
  );
}

