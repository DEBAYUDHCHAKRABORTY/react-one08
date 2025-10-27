import {useState} from "react"

export default function NewComponent() {

    const [name, setName] = useState();
    const [gender, setGender] = useState();

    function handleChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;


        if (inputName === "name") {
            setName(inputValue);
        };

        if (inputName === "gender") {
            setGender(inputValue);
        };

    };

    return (
        <div className="container">
            <input type="text" name="name" placeholder="write something here" onInput={handleChange} />
            <input type="radio" name="gender" value="Male" onInput={handleChange} />Male
            <input type="radio" name="gender" value="Female" onInput={handleChange} />Female

            {name && <h1>Pleased to meet you Mr. {name}</h1>}
            {gender && <h1>Your gender is {gender}</h1>}
        </div>

    );

}