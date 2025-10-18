import { useState } from "react";

function SignUp() {

    const [sign, setSign] = useState("event");
    const [data, setData] = useState("")

    function handleChange(event) {
        setSign(sign)
        setSign(event.target.value);
    }
    function handleSubmit(event) {
        setData(data)
        setData(event.target.value)

    }

    return (
        <>
            <div>
                <h2>Signup Page</h2>
                <div>
                    <input type="text" name="firstName" placeholder="First Name" onInput={handleChange} />
                </div >

                <input type="text" name="lastName" placeholder="Last Name" onInput={handleChange} />
                <input type="text" name="Gender" placeholder="Gender" onInput={handleChange} />
                <input type="text" name="Contact Number" placeholder="Contact" onInput={handleChange} />
                <input type="text" name="Email" placeholder="Email" onInput={handleChange} />
                <input type="text" name="Password" placeholder="Password" onInput={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default SignUp;