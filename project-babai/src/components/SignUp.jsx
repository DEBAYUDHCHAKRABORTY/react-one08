import { useState } from "react";

export default function SignUp() {



    const [form, setForm] = useState()
        firstName=""
        lastName=""
        gender=""
        contactNo=""
        email=""
        password=""
    
        
    };


    function handleNameChange(e) {
        setForm(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", { name, email, password });
    }




    return (

        <div>
            <h1> SignUp Page </h1>
            <div container type="Form">
                <input type="text" name="name1" placeholder="Enter your first Name" onInput={handleNameChange} />
                <input type="text" name="name2" placeholder="Enter Your last Name" onInput={handleNameChange} />
                <>
                <p>Genders :</p>
                <input type="radio" className="gender" name="male" onInput={handleChange} /> Male
                <input type="radio" className="gender" name="female" onInput={handleChange} /> Female
                <input type="radio" className="gender" name="other" onInput={handleChange} /> Other
                </>
                <input type="number" name="PhoneNo" placeholder="Enter your Contact No" onInput={handleEmailChange} />
                <input type="email" name="email" placeholder="Enter your Email" onInput={handleEmailChange} />
                <input type="password" name="password" placeholder="Enter your Password" />



                    <button type="submit" onClick={handleSubmit}> Submit </button>



            </div>

        </div>
    );
}
