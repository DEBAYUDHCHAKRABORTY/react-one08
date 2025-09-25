import { useState } from "react";

export default function Forms() {

    const [name, setName] = useState();
    const [gender, setGender] = useState();

    function handleInputChange(e) {
        const inpKey = e.target.name;
        const inpVal = e.target.value;

        if (inpKey === "userInput") {
            setName(inpVal);
        } else {
            setGender(inpVal);
        }
    }


    return (
        <div className="container">
            <h1>This is a react form</h1>

            <input type="text" name="userInput" placeholder="enter your name" onInput={handleInputChange} />
            <div>
                <input type="radio" value="male" onChange={handleInputChange} name="Gender" /> Male
                <input type="radio" value="female" onChange={handleInputChange} name="Gender" /> Female
                <input type="radio" value="others" onChange={handleInputChange} name="Gender" /> Others
            </div>
            {name && <h3>The name is {name}</h3>} 
            {gender && <h3>Gender is {gender}</h3>}

        </div>

    );

}   