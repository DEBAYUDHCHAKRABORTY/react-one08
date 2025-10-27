import {useState} from "react"

export default function Greetings() {

    const [name, setName] = useState("");
    const [color, setColor] = useState("OffWhite");
    const [greeting, setGreeting] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function getRandomColor() {
            const colors = ["red", "maroon", "yellow", "green", "blue"]
            const randomIdx = Math.floor (Math.random() * color.length);
            return colors[randomIdx]; 
    }

    function handleSubmit(ç) {
        if (!name.trim()) {
            setGreeting("Name cannot be empty");
            console.log(greeting);
            return;
        }

        setColor(getRandomColor());
        setGreeting(`Hello ${name}! You are awesome !`);
        console.log(greeting);    
    }

    return (
        <div style={{ backgroundColor: color, color:"white", width:'700px', height:'400px', transition: 'background-color 0.5 ease'}}>
            <div/>

            <h2>Greetings card Generator 🎃...</h2>

            <h4 style={{textAlign:"center"}}>Your Name</h4>

            <input type="text" style={{width:"300px", marginBottom :"10px", borderWidth: "3px", borderBlockColor:"lightgrey", borderStyle:"groove",padding: "10px", boxShadow: "inherit", }} placeholder="Enter your Name" onInput={handleChange} />
            <div>
            <button style={{ width:"325px",padding: "10px", backgroundColor: 'purple', color: 'white' }} onClick={handleSubmit}> 💌 Get Greetings! </button>
            </div>

            {greeting && <h2 style={{color:"black"}}> {greeting} </h2>}

        </div>

    );
}