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
      setCheck(inputVal);
    }

    if (inputName === "agree") {
        const isChecked = event.target.checked
        if(isChecked){
            setCheck(rad)
        }else{
            setCheck()
        }
    }
  }

  return (
    <div>
      <input type="text" name="myName" placeholder="Enter your Name" onInput={handleBtn}/>

      <div>
        <input type="radio" name="food" value="Chicken" onInput={handleBtn} />Chicken
        <input type="radio" name="food" value="Mutton" onInput={handleBtn} />Mutton
      </div>

      <input type="checkbox" name="agree" onInput={handleBtn} />Lover

      {name && <h3>Your Name is {name}</h3>}
      {rad && <h3>Your fav dish {rad} ? </h3>}
      {check && <h3>I agree ! I'm a {check} lover</h3>}

    </div>
  );
}

export default InRadChe;
