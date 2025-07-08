// pages/Home.jsx
import Hotspot from "../components/Hotspot";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f4ef]">
      <div className="scale-[0.85] md:scale-[1] origin-top">
        <Hotspot />
      </div>
    </div>
  );
}