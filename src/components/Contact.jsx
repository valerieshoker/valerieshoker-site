import { useNavigate } from "react-router-dom";
import contactImg from "../assets/Contact.png";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <img
      src={contactImg}
      alt="Contact"
      className="absolute top-[59%] left-[34%] w-[120px] h-auto object-contain hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate("/contact")}
    />
  );
}

