import { useState } from "react"

export default function Change() {
    const [textcolor, setTextColor] = useState();
    
    function handleClick(e) {
        const color = e.target.value
        setTextColor(color)
    }

    function changeColor(color) {
        setTextColor(color)
    }


    return (
        <div>
            <h1 style={{ color: textcolor }}>change your color</h1>
            <div style={{margin: '10px'}}>
                <button value="red" onClick={handleClick}>red</button>
                <button value="green" onClick={handleClick}>green</button>
            </div>

            <div style={{margin: '10px'}}>
                <button onClick={()=> changeColor("red")}>red</button>
                <button onClick={() => changeColor("yellow")}>yellow</button>
            </div>

            <div style={{margin: '10px'}}>
                <button onClick={() => setTextColor("red")}>red</button>
                <button onClick={() => setTextColor("green")}>green</button>
            </div>
        </div>
    )
}