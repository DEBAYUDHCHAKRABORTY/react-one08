import { useState } from "react"

export default function Greetings(){

    const [name, setName] = useState ();
    const [color, setColor] = useState();
    const [greetings, setGreetings] = useState ("yellow");

 
    function handleChange(e){
        setGreetings(greetings);
        setGreetings(e.target.name)
        console.log("hello greetings");
    }




    return(
            <div>

                <h1 style={{backgroundColor:"lightGray", color:"maroon", padding:"50px",textAlign:"center", fontSize:"70px", textDecorationColor:"ActiveBorder",}}>Greetings card Generator 🎃...</h1>

                <input type="text" style={{ padding: "10px", boxShadow: "inherit", }} name="greetings" placeholder="Enter your Name" onInput={handleChange}/>

                <button style={{ padding: "10px", backgroundColor: 'Green', color: 'white' }} onClick={handleChange}> Submit </button>
                <button style={{ padding: "10px", backgroundColor: 'red', color: 'white' }}>Reset</button>
                

                {greetings && <h2 style={{textDecoration:"bold"}}>  Hello Mr. ➤ {handleChange} ╾╾╤デ╦︻(•⤙•) ,wishing you a lovely evening..👊🙋🏻‍♂️👊</h2>}

            </div>

    );
}