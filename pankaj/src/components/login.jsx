import { useState } from "react"

export default function Login() {


    const [form, setForm] = useState({
            email: "",
            password: ""
        });
    const [errors, setErrors] = useState({});


    function handleSubmit(e) {
        e.preventDefault();
        let newErrors = {};
        if (!validemailId(form.email)) {
            newErrors.email =
                "Invalid Email Id. Must be alphanumerical and 10-30 characters."
        }
        if (!validpassWord(form.password)) {
            newErrors.password =
                "Invalid Password. Must be  alphanumerical and 8-20 characters."
        }
        setErrors(newErrors);

        // 1. Read from localStorage
        // 2. Convert to json object using JSON.parse
        // 3. Compare the value with form.password

        form.password
    };

    return (
        <>
            <div style={{ backgroundColor: "#3a59cbff", borderRadius: "8px", width: '500px', padding: '30px' }}>
                <div>
                    <h1 style={{ color: "white" }}><u>LOG IN</u></h1>
                </div>
                <div style={{ padding: '25px' }}>
                    <input type="text" placeholder="ENTER EMAIL" style={{ height: '33px', width: '260px', borderRadius: "6px" }} />
                    {errors.emailId && <div style={{ color: "red" }}>{errors.emailId}</div>}
                </div>
                <div>
                    <input type="passwoord" placeholder="ENTER PASSWORD" style={{ height: '33px', width: '260px', borderRadius: "6px" }} />
                    {errors.passWord && <div style={{ color: "red" }}>{errors.passWord}</div>}
                </div>
                <div style={{ padding: '25px' }}>
                    <button style={{ backgroundColor: "#1cc94aff", color: "white" }} onClick={handleSubmit}>LOG IN</button>
                </div>
            </div>
        </>
    )
}