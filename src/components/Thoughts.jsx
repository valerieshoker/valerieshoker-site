// Thoughts.jsx
export default function ShelfItem({ src, alt, style, onClick }) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ${style}`}
        onClick={onClick}
      />
    );
  }