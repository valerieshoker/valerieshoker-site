import { useNavigate } from "react-router-dom";
import sandboxImg from "../assets/Sandbox.png"; 

export default function SandboxIcon() {
  const navigate = useNavigate();

  return (
    <img
      src={sandboxImg}
      alt="Sandbox"
      className="absolute top-[61%] left-[24%] w-[90px] h-auto object-contain hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
      onClick={() => navigate("/journal")}
    />
  );
}