import { useNavigate } from "react-router-dom";
import writingImg from "../assets/Writing.png";

export default function Writing() {
  const navigate = useNavigate();

  return (
    <img
      src={writingImg}
      alt="Writing"
      className="absolute top-[32%] left-[35%] w-[117px] h-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer animate-redGlow"
      onClick={() => navigate("/writing")}
    />
  );
}
