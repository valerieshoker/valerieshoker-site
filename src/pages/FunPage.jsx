import { useState } from "react";

export default function Fun() {
  const books = [
    "*Before We Were Strangers* by Renée Carlino",
    "*A Tale for the Time Being* by Ruth Ozeki",
    "*When We Were Orphans * by Kazuo Ishiguro",
    "*Butter* by Asako Yuzuki",
  ];

  // bookstore rec map...next project??

  const [book, setBook] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * books.length);
      setBook(books[randomIndex]);
      count++;
      if (count > 15) {
        clearInterval(interval);
        setSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="page-wrapper wheel-wrapper" style={{ textAlign: "center", padding: "60px" }}>
      <h1>
        <a href="/fairygarden" style={{ textDecoration: "none" }}>😼</a> Spin the Wheel
      </h1>
      <p>Click below to get a book recommendation from my current reading list:</p>
      <button
        className="wheel-btn"
        onClick={spinWheel}
        style={{
          fontSize: "1.2em",
          padding: "14px 28px",
          backgroundColor: "#dfd4c7",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}
      >
        🎡 Spin
      </button>

      <div
        id="bookResult"
        style={{
          marginTop: "30px",
          fontSize: "1.4em",
          fontStyle: "italic",
          color: "#5a4a42",
          minHeight: "2em",
          opacity: spinning ? 0.5 : 1,
          transition: "opacity 0.3s ease"
        }}
      >
        {book}
      </div>

      <a href="/" style={{ display: "block", marginTop: "30px", color: "#5a4a42" }}>Back to home</a>
    </div>
  );
}