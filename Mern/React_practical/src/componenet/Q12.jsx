import React, { useState } from "react";

const Q12 = () => {
  const [isClick, setisClick] = useState(false);
  const toggleClick = () => {
    setisClick(!isClick);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isClick ? "Welcome to React, Sneha ohal...!" : "Click Me"}</h1>
      <button onClick={toggleClick}>{isClick ? "Exit" : "Click"}</button>
    </div>
  );
};

export default Q12;
