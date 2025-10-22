import React, { useState } from "react";

function Lesson1() {
  const [name, setName] = useState("User");
  const [name1, setName1] = useState("User1");
  const [array, setArray] = useState([2, 3, 4, 5]);
  const [Counter, setCounter] = useState(0);

  return (
    <div>
      <h1>
        Welcome {name} <br />
      </h1>
      <h2>{name1}</h2>

      <h1>{array}</h1>

      <button onClick={() => setName("Janmajay")}>Login</button>
      <input
        onChange={(e) => setName1(e.target.value)}
        type="text"
        placeholder="name"
      />

      <button onClick={() => setArray([...array, 6])}>add 6</button>

      <div className="counter">
        <h1 className="display">{Counter}</h1>
        <button onClick={() => setCounter(Counter + 1)} className="btn">
          increse
        </button>
        <button onClick={() => setCounter(Counter - 1)} className="btn">
          decrese
        </button>
      </div>
    </div>
  );
}

export default Lesson1;
