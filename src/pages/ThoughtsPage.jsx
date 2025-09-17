import { useEffect, useState } from "react";
import "../style.css";

export default function Thoughts() {
  const [quotes, setQuotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("floatingQuotes");
    if (stored) setQuotes(JSON.parse(stored));
  }, []);

  useEffect(() => {
    quotes.forEach((q, i) => {
      setTimeout(() => createFloatingQuote(q), i * 300);
    });
  }, [quotes]);

  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelectorAll(".quote").forEach((q) => {
        const driftX = (Math.random() - 0.5) * 100;
        const driftY = (Math.random() - 0.5) * 100;
        q.style.transform = `translate(${driftX}px, ${driftY}px)`;
      });
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      createFloatingQuote(input);
      const updatedQuotes = [...quotes, input];
      setQuotes(updatedQuotes);
      localStorage.setItem("floatingQuotes", JSON.stringify(updatedQuotes));
      setInput("");
    }
  };

  const createFloatingQuote = (text) => {
    const quote = document.createElement("div");
    quote.className = "quote";
    quote.textContent = text;
    const x = Math.random() * (window.innerWidth - 300);
    const y = Math.random() * (window.innerHeight - 100);
    quote.style.left = `${x}px`;
    quote.style.top = `${y}px`;
    document.body.appendChild(quote);
    const driftX = (Math.random() - 0.5) * 100;
    const driftY = (Math.random() - 0.5) * 100;
    quote.style.transform = `translate(${driftX}px, ${driftY}px)`;
  };

  return (
    <>
      <div className="release-box">
        <h2>release your thoughts</h2>
        <p className="release-subtext">
          write whatever’s been sitting on your mind. this is private, only I’ll see it.
        </p>
        <form className="quote-form" onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="let it out..."
            required
          />
          <button type="submit">release it</button>
        </form>
      </div>
      <a className="back-link" href="/">Back to home</a>
    </>
  );
}
