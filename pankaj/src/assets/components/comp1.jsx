import { useState } from "react";

function Add() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('')
    function handleC(e) {
        const inpKey = e.target.name;
        const inpVal = e.target.value;
        if (inpKey==="userInput") {
            setName(inpVal);
        } else {}
            setGender(inpVal);
    }
    
    return (
        <div>
            <div>
                <input type="text" name="userInput" placeholder="enter name" onInput={handleC} />
            </div>
            <input type="radio" value="male" onChange={handleC} name="gender" /> Male
            <input type="radio" value="femle" onChange={handleC} name="gender" /> Female
            <input type="radio" value="other" onCanPlay={handleC} name="gender" />other
           {name && <h1>the name is{name}</h1>}
           { <h1>Gender is {gender}</h1>}
        </div>
    )
}
export default Add;