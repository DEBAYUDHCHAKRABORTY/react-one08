import {useState} from "react";

export default function ColorPicker() {

 const [color, setColor] = useState("");  

    function handleChange(e) {
        const colorValue = e.target.value;
        setColor(colorValue);

    }





    return (
        <>
            <div style={{backgroundColor: color, height: '50vh', width: '50vh', textAlign: 'center'}}>
                <h1>Here is your Background Color </h1>
                <input type="color" style={{height: '50px', width: '100px', border: 'bold' }} name="ColorPicker" onInput={handleChange} />
            </div>
        </>

    );
}
