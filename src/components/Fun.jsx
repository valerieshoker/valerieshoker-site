//Fun.jsx
import { useNavigate } from "react-router-dom";
import funImg from "../assets/Fun.png"; 

export default function Fun() {
  const navigate = useNavigate();

  return (
    <img
      src={funImg}
      alt="Fun"
      className="absolute top-[67%] left-[52%] w-[90px] h-auto object-contain hover:scale-110 hover:rotate-6 transition-transform duration-500 ease-in-out cursor-pointer"
      onClick={() => navigate("/fun")}
    />
  );
}

