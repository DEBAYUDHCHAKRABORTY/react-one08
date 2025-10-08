import { useState } from "react"

export default function NewComponent() {

    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [show, setShow] = useState(false);

    function handleSubmit(e) {
        console.log("Button clicked");
        console.log(show);
        console.log(name);
        console.log(gender)


            setShow(true);

        e.preventDefault();
    }


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
            <div><input type="text" name="name" placeholder="Your Name" onInput={handleChange} /></div>
            <div>
                <input type="radio" name="gender" value="Male" onClick={handleChange} />Male
                <input type="radio" name="gender" value="Female" onClick={handleChange} />Female
                <input type="radio" name="gender" value="Female" onClick={handleChange} />Others

            </div>

            <div>
                <button onClick={handleSubmit}> Submit </button>
            </div>

            {show && (
                <>
                    {name && <h1>Pleased to meet you Mr. {name}</h1>}
                    {gender && <h1>Your gender is {gender}</h1>}
                </>
                )}
        </div>

    );

}