//Fun.jsx
import { useNavigate } from "react-router-dom";
import funImg from "../assets/Fun.png"; 

export default function Fun() {
  const navigate = useNavigate();

  return (
    <img
      src={funImg}
      alt="Fun"
      className="absolute top-[69%] left-[30%] w-[100px] h-auto object-contain hover:scale-110 hover:rotate-6 transition-transform duration-500 ease-in-out cursor-pointer animate-breathe"
      onClick={() => navigate("/fun")}
    />
  );
}

