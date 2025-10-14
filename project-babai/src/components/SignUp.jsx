import { useState } from "react";
import './SignUp.scss';
import 


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
        <div className="Container">
            <div className="Header">
                <div className="Text">
                    <h1>{action}</h1>
                </div>

                <div className="inputs"></div>
                {action=== "LogIn"?<div></div>:<div className="input">{/* <img src={nameIcon} alt="" /> */}
                    <input type="text" name="name" placeholder="Name" onInput={handleNameChange} /></div>}
            

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
                {action=== "SignUp"? <div></div>: <div className="forgot-password">Forgot password? <span>Click Here</span></div>}

                

                <div className="submit-container">

                    <div className={action=== "SignUp" ? "submit gray" : "submit"}onClick={()=>{setAction("SignUp")}}>
                        SingUp
                    </div> 

                    <div className={action=== "LogIn" ? "submit gray" : "submit"} onClick={()=>{setAction("LogIn")}}> 
                        LogIn
                    </div>

                </div>
            </div>
        </div>
    );
}
