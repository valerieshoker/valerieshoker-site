import { useState, useEffect } from "react";
import croissantImg from "../assets/Croissant.png";

export default function Croissant() {
  const [eaten, setEaten] = useState(false);

  useEffect(() => {
    let timeout;
    if (eaten) {
      timeout = setTimeout(() => {
        setEaten(false);
      }, 4000); // reappear after 4 seconds
    }
    return () => clearTimeout(timeout);
  }, [eaten]);

  return (
    <img
      src={croissantImg}
      alt="Croissant"
      onClick={() => setEaten(true)}
      className={`absolute bottom-[213px] left-[59%] w-[80px] object-contain cursor-pointer transition-opacity duration-700 ease-in-out ${
        eaten ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}
