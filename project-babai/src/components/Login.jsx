import {useState} from "react";

export default function Login() {

    const [username, setUsername]= useState();



    function handleChange(){
        setUsername(username);
        console.log("Inputs submitted")
    }

    function handleSubmit (){
        console.log("Form Submitted")
    }



    return(

            <>
            <h1>LogIn Page</h1>
            <div>
            <input type="text" name="username" placeholder="Enter username" onInput={handleChange}/>
            <input type="password" name="password" placeholder="Enter password" onInput={handleChange}/>
            <div/>
            <div className="forgot-password">Forgot password?</div>


            <div>
                <button type="submit" onClick={handleSubmit}> Submit </button> 
            </div>

            </div>  
            </>
    );
}