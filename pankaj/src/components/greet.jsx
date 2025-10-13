import { useState } from "react"

export default function Greeting() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("white");
    const [greeting, setGreeting] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    function getRandomColor() {
        const colors = ["#C589C6","#FFD700","#90EE90","#FF6347","#87CEEB","#DA70D6","#F0E68C","#00FFFF","#FF4500","#ADFF2F","#BA55D3","#7B68EE","#FF8C00","#AFEEEE","#DDA0DD","#6A5ACD","#FFDAB9","#20B2AA","#FFA07A","#E0FFFF"];
        const randomIdx = Math.floor(Math.random() * colors.length);
        return colors[randomIdx];
    }

    function handleSubmit() {
        if (!name.trim()) {
            setGreeting("Name cannot be empty");
            console.log(greeting);
            return;
        }
        setColor(getRandomColor());
        setGreeting(`Hello ${name}! How are you?`);
    }


    return (<>

        <div style={{ backgroundColor: color, width:'800px', height:'300px', transition: 'background-color 0.3s ease'}}>
            <div>
                <input style={{padding: '10px 20px', width: "300px", marginBottom: "20px", marginTop: "10px"}} type="text" onInput={handleChange} />
            </div>
            <button onClick={handleSubmit}>Get Greeting</button>
            {greeting && <h4 style={{color:"black"}}>{greeting}</h4>}
        </div>

    </>)
}