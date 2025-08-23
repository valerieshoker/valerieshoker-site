// Globe.jsx
import { useNavigate } from "react-router-dom";
import globeImg from "../assets/Globe.png"; 

export default function Globe() {
  const navigate = useNavigate();

  return (
    <img
      src={globeImg}
      alt="Globe"
      className="globe-spin absolute top-[30%] left-[24%] w-[90px] h-auto object-contain cursor-pointer"
      onClick={() => navigate("/travel")}
    />
  );
}


