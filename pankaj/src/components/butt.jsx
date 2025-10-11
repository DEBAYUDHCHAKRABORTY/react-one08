import { useState } from "react"

export default function TextChange() {
    const [textcolor, setTextColor] = useState("");
    function handleClick() {
        setTextColor("red")

    }
    function handleChange() {
        setTextColor("green")
    }


    return (
        <div >
            <h1 style={{ color: textcolor }}>change you text </h1>
            <button onClick={handleClick}>red</button>
            <button onClick={handleChange}>green</button>
        </div>
    )
} 