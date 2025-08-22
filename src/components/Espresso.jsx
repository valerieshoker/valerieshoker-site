import { useState } from "react";
import espressoImg from "../assets/espresso.png";

export default function Espresso() {
  const [steaming, setSteaming] = useState(false);

  return (
    <div
      className="absolute bottom-[213px] left-[53.5%] w-[65px] cursor-pointer flex flex-col items-center"
      onMouseEnter={() => setSteaming(true)}
      onMouseLeave={() => setSteaming(false)}
    >
{steaming && (
  <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 z-20">
    {[0, 1, 2].map((i) => (
      <div key={i} className={`steamWord delay-${i}`}>
        hi
      </div>
    ))}
  </div>
)}
      {/* Espresso Image */}
      <img
        src={espressoImg}
        alt="Espresso"
        className="w-full object-contain"
      />
    </div>
  );
}

