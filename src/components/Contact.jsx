import { useNavigate } from "react-router-dom";
import contactImg from "../assets/Contact.png";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <img
      src={contactImg}
      alt="Contact"
      className="absolute top-[32%] left-[50%] w-[110px] h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate("/contact")}
    />
  );
}

