import { useState } from "react";

function Emoji() {

    const [emoji, setEmoji] = useState("");


    function handleInput(event) {
        setEmoji(emoji)
        setEmoji(event.target.value);
    }
    return (
        <div>
            <h1>Good By Guys</h1>
            <input type="text" name="emoji" style={{padding:'10px', backgroundColor:'white' }} placeholder="Text You Name" onInput={handleInput} />
            <button style={{ padding: '5px', backgroundColor: 'white', color: 'black' }}>Touch</button>

        </div>
    )
}

export default Emoji;