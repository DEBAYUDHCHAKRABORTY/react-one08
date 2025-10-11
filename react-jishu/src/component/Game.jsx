import { useState } from "react";

function Pubg() {
    const [name, setName] = useState("");
    const [game, setGame] = useState("");

    function handleInput(event) {
        setName(event.target.value);
    }
    function handleBgm(event) {
        setGame(event.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="text input" onInput={handleInput} />
            <br />
            <label>
                <input
                    type="bgm"
                    name="myGame"
                    onInput={handleBgm}
                    value="green"
                />
                green
            </label>

            <label>
                <input
                    type="bgm"
                    name="myGame"
                    onInput={handleBgm}
                    value="blue"
                />
                blue
            </label>
            <ul>
                {name && (
                    <li>
                        <h2>Your name is {name}</h2>
                    </li>
                )}
                {game && (
                    <li>
                        <h4>Your favourite game is {game}</h4>
                    </li>
                )}
            </ul>

        </div>
    );
}



export default Pubg;