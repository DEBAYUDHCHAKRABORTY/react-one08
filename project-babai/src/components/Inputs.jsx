import { useState } from "react"

export default function Inputs() {

    const [name, setName] = useState();
    const [color, setColor] = useState();


    function handleChange(e) {
        const inpKey = e.target.name
        const inpVal = e.target.value


        if (inpKey === "userInput") {
            setName(inpVal);
        } else { }
        setColor(inpVal);

    }


    return (
        <div>
            <input type="text" name="name" placeholder="enter your first name" onInput={handleChange} />
            <input type="text" vaule="name" placeholder=" enter your last name " onInput={handleChange} />
            <input type="radio" value="color" /> Red
            <input type="radio" value="color" /> Blue
            {name && <h2>Your name is{name} </h2>}
            {color && <h2>Your fav color is {color} </h2>}

        </div>
    );

}