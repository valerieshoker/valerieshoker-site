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
      {/* Steam Blobs */}
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 flex gap-1 z-20">
    <span className="steam"></span>
    <span className="steam delay-200"></span>
    <span className="steam delay-400"></span>
  </div>
      {/* Espresso Image */}
      <img
        src={espressoImg}
        alt="Espresso"
        className="w-full object-contain"
      />
    </div>
  );
}
