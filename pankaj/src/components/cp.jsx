import { useState } from "react"

export default function Color() {
    const [bgColor, setBgColor] = useState("red");


    function changeColor(e){
        setBgColor(e.target.value);

    }
   
    return (
        <div style={{backgroundColor: bgColor, textAlign: "center" }}>
            <h1> Selec Background colour </h1>
            <input type="color" style={{padding: '0px',margin:'0px', width: '100px', height:'50px'}} onInput={changeColor} />
        </div>
    )
}