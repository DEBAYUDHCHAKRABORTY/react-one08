import { useEffect, useState } from "react";

export default function Emoji() {
  const [name, setName] = useState();
  const [greet, setGreet] = useState("");
  const [card, setCard] = useState("red");

  function handleGreet() {
    setGreet("Good Morning " + name);
    

    const randomclr = () => {
      const hex = "0123456789ABCDEF";
      let randclr = "#";
      for (let i = 0; i < 6; i++) {
        randclr += hex[Math.floor(Math.random() * 16)];
      }
      return randclr;
    };

    setCard(randomclr);
  }

  function handlename(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div style={{ backgroundColor: card }}>
        <h1>Emoji Generator</h1>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onInput={handlename}
            id=""
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={handleGreet} name="click">Get Greeting</button>
        </div>
        {greet && <h2> {greet} 😁👌
        </h2>}
      </div>
    </>
  );
}
