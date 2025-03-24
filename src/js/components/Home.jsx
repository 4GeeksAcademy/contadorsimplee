import React, { useEffect, useState } from "react";

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="counter">
      <span>⏳ {seconds} segundos</span>
    </div>
  );
};

const Home = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

export default Home;