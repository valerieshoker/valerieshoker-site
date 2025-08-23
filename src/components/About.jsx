//About.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/About.png";

export default function About() {
  const navigate = useNavigate();
  const [shake, setShake] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShake(false), 4000); // shake ~4s then stop
    return () => clearTimeout(t);
  }, []);

  return (
    <img
      src={aboutImg}
      alt="About"
      className={`absolute top-[45%] left-[21%] w-[150px] h-auto object-contain transition-transform duration-300 ease-in-out cursor-pointer
        ${shake ? "shake-flowers" : "hover:scale-110"}`}
      onClick={() => navigate("/about")}
    />
  );
}