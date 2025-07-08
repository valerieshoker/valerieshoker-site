//Writing.jsx
import { useNavigate } from "react-router-dom";
import writingImg from "../assets/Writing.png"; 

export default function Writing() {
  const navigate = useNavigate();

  return (
    <img
      src={writingImg}
      alt="Writing"
      className="absolute top-[57%] left-[40%] w-[110px] h-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate("/writing")}
    />
  );
}

