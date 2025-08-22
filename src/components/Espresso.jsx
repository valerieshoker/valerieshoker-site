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
      {/* Steam “hi” */}
      {steaming && (
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          <span className="steamText">h</span>
          <span className="steamText delay-200">i</span>
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

