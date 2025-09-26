import { useState } from "react";

function InRadChe() {
  const [name, setName] = useState();
  const [rad, setRad] = useState("");
  const [check, setCheck] = useState();

  function handleBtn(event) {
    const inputName = event.target.name;
    const inputVal = event.target.value;

    if (inputName === "myName") {
      setName(inputVal);
    }

    if (inputName === "food") {
      setRad(inputVal);
    }

    if (inputName === "agree") {
      setCheck(inputVal);
    }
  }

  return (
    <div>
      <input
        type="text"
        name="myName"
        placeholder="Enter your Name"
        onInput={handleBtn}
      />

      <br />

      <input type="radio" name="food" value="Chicken" onInput={handleBtn} />
      Chicken

      <input type="radio" name="food" value="Mutton" onInput={handleBtn} />
      Mutton

      <br />

      <input type="checkbox" name="agree" value="agree" onInput={handleBtn} />
      agrred

      {name && <h3>Your Name is {name}</h3>}
      {rad && <h3>Your fav dish {rad} ? </h3>}
      {check && <h3>I agree ! I'm a {rad} lover</h3>}

    </div>
  );
}

export default InRadChe;
