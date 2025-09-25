import { useState } from "react";

function Terad() {
  const [name, setName] = useState("");
  const [fav, setFav] = useState("");

  function handleRadio(event) {
    setFav(event.target.value);
  }

  function handleInput(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="text input" onInput={handleInput} />
      <br />
      <label>
        <input
          type="radio"
          name="myColorGroup"
          onInput={handleRadio}
          value="red"
        />
        red
      </label>
      <label>
        <input
          type="radio"
          name="myColorGroup"
          onInput={handleRadio}
          value="blue"
        />
        blue
      </label>
      <ul>
        {name && (
          <li>
            <h3>your name is {name}</h3>
          </li>
        )}
        {fav && (
          <li>
            <h3>your favourite color is {fav}</h3>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Terad;
