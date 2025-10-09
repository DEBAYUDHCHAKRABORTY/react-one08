import { useState } from "react";

export default function ClrPick() {
  const [clr, setClr] = useState("red");

  function hanldeInpt(e) {
    setClr(e.target.value);
  }

  return (
    <>
      <div style={{backgroundColor:clr, height:'100px'}}>
        <h1>Colour Picker App</h1>
      </div>
        <input type="color" name="colour" onInput={hanldeInpt} />
      
    </>
  );
}
