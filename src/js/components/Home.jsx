import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const SecondsCounter = ({ seconds }) => {
  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      fontSize: "2rem", fontFamily: "monospace", background: "black",
      color: "white", padding: "20px", borderRadius: "10px"
    }}>
      <span>⏳ {seconds} segundos</span>
    </div>
  );
};

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
