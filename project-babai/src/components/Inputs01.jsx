import { useState } from "react";

export default function components() {

    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [color, setColor] = useState();

    function handleChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;


        if (inputName === "nabin") {
            setName(inputValue);
        }

        if (inputName === "gender") {
            setGender(inputValue);
        }
        if (inputName === "color") {
            const isChecked = e.target.checked;
            if (isChecked) {
                setColor("red");
            } else {
                setColor("not red");
            }
        };

    };



    return (
        <div className="input">

            <input type="text" name="nabin" placeholder="Write here your name" onInput={handleChange} />
            <input type="radio" name="gender" value = "Male" onInput={handleChange} /> Male
            <input type="radio" name="gender" value = "Female" onInput={handleChange} /> Female

            <input type="checkbox" name="color" onInput={handleChange}/> Red

            {name && <h2> Your Name is {name} </h2>}
            {gender && <h2>Your gender is {gender}</h2>}
            {color && <h2>Your favourite color is {color}</h2>}

        </div>


    )
};