import { useState } from "react";

export default function SignUp() {

    const [form, setForm] = useState({
        name: "",
        gender: "",
        PhoneNo: "",
        email: "",
        password: ""
    });

    function handleNameChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log("name Inputs ");
    }

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log("gender Inputs ");
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted");
    } 

    



    return (
        <div className="container">
            <div className="Header">
                <div className="Text">
                    <u><h1>SignUp Page</h1></u>
                </div>
                <div className="underline"></div>

                <div>
                    <input type="text" name="name" placeholder="Name" onInput={handleNameChange} />
                </div>

                <p>Genders :</p>
                <div>
                    <input type="radio" className="gender" name="gender" value="male" onInput={handleChange} /> Male
                    <input type="radio" className="gender" name="gender" value="female" onInput={handleChange} /> Female
                    <input type="radio" className="gender" name="gender" value="other" onInput={handleChange} /> Other
                </div>
                
                <div>
                    <input type="email" name="email" placeholder="Enter Email" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Enter Password" />
                </div>
                <div>
                    <input type="number" name="PhoneNo" placeholder="Enter Phone No" />
                </div>

                <div className="submit-container">
                    <button type="submit" onClick={handleSubmit}> Submit </button>
                </div>

            </div>
        </div>
    );
}
