import { useState } from "react";
import Sentiment from "sentiment";

export default function JournalPage() {
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const sentiment = new Sentiment();

  // customize these messages
  const encouragingMessages = {
    positive: [
      "Look deep enough into any person and you will find something shining within. - H.K., KC",
      "I'm sure she barely knew the meaning of loneliness with you here. - K.I., KATS",
      "Tell the sun and stars hello for me. - R.R., THOH",
      "People are strange, Jun. They know nothing lasts forever, but still find time to laugh and cry and get upset, laboring over things and breaking things apart. I know it seems like none of it makes sense. But son, these things make life worth living. So don’t let anything get you down. - M.K., BAE"
    ],
    neutral: [
      "Now I have neither happiness nor unhappiness. Everything passes. - O.D., NLH",
      "It's not time to worry yet. - H.L., TKAM",
      "It's a great privilege, after all, to have been given a part to play, however small, on the world's stage. - K.I., TROTD"
    ],
    negative: [
      "Memory can give warmth to time.- H.K., KC",
      "Behind every exquisite thing that existed, there was something tragic.- O.W., TPDG",
      "What happens when people open their hearts? They get better.-H.K., NW",
      "Things are always better in the morning. - H.L., TKAM" 
    ]
  };

  const handleSubmit = async () => {
    if (!entry) return;

    setLoading(true); 

    const { score } = sentiment.analyze(entry);
    let mood = "neutral";
    if (score >= 2) mood = "positive";
    else if (score <= -1) mood = "negative";
  
    // override if certain keywords are present
    const negativeKeywords = ["sad", "depressed", "angry", "upset", "anxious", "overwhelmed"];
    if (negativeKeywords.some((w) => entry.toLowerCase().includes(w))) {
      mood = "negative";
    }

    const randomMessage =
      encouragingMessages[mood][
        Math.floor(Math.random() * encouragingMessages[mood].length)
      ];

      try {
        const res = await fetch("/api/saveJournalEntry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: entry, mood }),
        });
    
        if (!res.ok) {
          throw new Error("Failed to save entry");
        }
    
        setResponse(randomMessage);
        setEntry(""); // clear box
      } catch (err) {
        setResponse("Oops — something went wrong. Try again later.");
        console.error(err);
    } finally {
        setLoading(false);
      }
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        backgroundColor: "#fefaf5",
        color: "#2e2b29",
        textAlign: "center",
        padding: "60px 30px"
      }}
    >
      <div
        style={{
          backgroundColor: "#f7f1eb",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "500px",
          margin: "0 auto 40px",
          boxShadow: "0 3px 8px rgba(0, 0, 0, 0.05)"
        }}
      >
        <h2>release your thoughts</h2>
        <p>
          write whatever’s been sitting on your mind. this is private, only I’ll
          see it.
        </p>
        <textarea
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "1em",
            margin: "15px 0",
            fontFamily: "Georgia, serif",
            resize: "vertical",
            minHeight: "120px"
          }}
          placeholder="let it out..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button
          style={{
            fontSize: "1em",
            padding: "10px 22px",
            backgroundColor: "#dfd4c7",
            color: "#2e2b29",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer", 
            opacity: loading ? 0.7 : 1
          }}
          onClick={handleSubmit}
          disabled={loading}
        >
             {loading ? "saving..." : "release it"}
        </button>
        {response && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#fffaf5",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontStyle: "italic",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
            }}
          >
            {response}
          </div>
        )}
      </div>

      <a
        className="back-link"
        href="/"
        style={{
          display: "block",
          marginTop: "40px",
          fontSize: "0.95em",
          color: "#5a4a42",
          textDecoration: "none"
        }}
      >
        Back to home
      </a>
    </div>
  );
}
