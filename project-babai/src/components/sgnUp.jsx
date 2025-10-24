import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";



export default function SignUp() {

    const [action, setAction] = useState("SignUp");


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




    return (
        <div >
            <div >
                <div >
                    <h1>{action}</h1>
                </div>

                <div ></div>
                {action === "LogIn" ? <div></div> : <div className="input">
                    <InputText name="name" placeholder="Name" onInput={handleNameChange} /></div>}

                <InputText name="name" placeholder="Name" onInput={handleNameChange} />


                <p>Genders :</p>
                <div className="input">
                    <input type="radio" className="gender" name="gender" value="male" onInput={handleChange} /> Male
                    <input type="radio" className="gender" name="gender" value="female" onInput={handleChange} /> Female
                    <input type="radio" className="gender" name="gender" value="other" onInput={handleChange} /> Other
                </div>

                <div className="input">
                    {/* <img src={emailIcon} alt="" /> */}
                    <input type="email" name="email" placeholder="Enter Email" />
                </div>
                <div className="input">
                    {/* <img src={passwordIcon} alt="" /> */}
                    <input type="password" name="password" placeholder="Enter Password" />
                </div>
                <div className="input">
                    {/* <img src={phoneIcon} alt="" /> */}
                    <input type="number" name="PhoneNo" placeholder="Enter Phone No" />
                </div >
                {action === "SignUp" ? <div></div> : <div className="forgot-password">Forgot password? <span>Click Here</span></div>}



                <div className="submit-container">

                    <Button>Submit </Button>

                    <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={() => { setAction("SignUp") }}>
                        SingUp
                    </div>

                    <div className={action === "LogIn" ? "submit gray" : "submit"} onClick={() => { setAction("LogIn") }}>
                        LogIn
                    </div>

                </div>
            </div>
        </div>
    );
}
