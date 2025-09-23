// import React, { useState } from "react";
// // Import CSS file

// function UsesatetEx() {
//   const [color, setColor] = useState("white");

//   return (
//     <div className="container">
//       <h2 style={{ color: color }}>{color} is my favourite color</h2>
//       <div className="btn-group">
//         <button onClick={() => setColor("red")} className="btn red">Red</button>
//         <button onClick={() => setColor("green")} className="btn green">Green</button>
//         <button onClick={() => setColor("blue")} className="btn blue">Blue</button>
//         <button onClick={() => setColor("yellow")} className="btn yellow">Yellow</button>
//       </div>
//     </div>
//   );
// }

// export default UsesatetEx;

import { useState } from "react";

function UsesatetEx() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>count = {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default UsesatetEx;
