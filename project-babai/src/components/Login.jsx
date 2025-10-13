import { useState } from "react";

export default function Login() {

    const [username, setUsername]= useState();
    function handleChange(){
        console.log("Inputs submitted")
    }

    function handleSubmit (){
        console.log("Form Submitted")
    }



    return(

            <>
            <h1>LogIn Page</h1>
            <div>
            <input type="text" name="username" placeholder="Enter your username" onInput={handleChange}/>
            <input type="password" name="password" placeholder="Enter your password" onInput={handleChange}/>
            <div/>

            <div>
                <button type="submit" onClick={handleSubmit}> Submit </button> 
            </div>

            </div>  
            </>
    );
}