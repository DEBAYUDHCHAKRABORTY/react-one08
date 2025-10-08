import { useState } from "react";

function MultiInput() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [sports, setSports] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleName2(event) {
    setName2(event.target.value);
  }

  function handleGame(event) {
    setSports(event.target.value);
  }
  
  return (
    <div>
      <input type="text" placeholder="Enter your Name" onInput={handleName} />
      <input type="text" placeholder="Enter your bro's Name" onInput={handleName2}/>
      <div className="radio">
        <input type="radio" name="game" onInput={handleGame} value="cricket" />cricket
        <input type="radio" name="game" onInput={handleGame} value="football" />football
      </div>

      {name && <h3>your name is {name}</h3>}
      {name2 && <h3>your bro's name is {name2}</h3>}
      {sports && <h3>both loves {sports}</h3>}
    </div>
  );
}

export default MultiInput;
