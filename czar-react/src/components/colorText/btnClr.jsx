import { useState } from "react";

export default function BtnClr() {
  const [text, setText] = useState();

  function handleClr(e) {
    const color = e.target.value;
    if (color === "red") {
      setText("red");
    }
    if (color === "yellow") {
      setText("yellow");
    }
  }

  function changeColor(color) {
    setText(color);
  }

  return (
    <>
      <h1 style={{ color: text }}>Change My Colour</h1>
      <div>
        <div>
          <button value="red" onClick={handleClr}>
            RED
          </button>
          <button value="yellow" onClick={handleClr}>
            YELLOW
          </button>
        </div>

        <div>
          <button onClick={() => setText("red")}>RED</button>
          <button onClick={() => setText("yellow")}>YELLOW</button>
        </div>

        <div>
          <button onClick={() => changeColor("red")}>RED</button>
          <button onClick={() => changeColor("yellow")}>YELLOW</button>
        </div>
      </div>
    </>
  );
}
