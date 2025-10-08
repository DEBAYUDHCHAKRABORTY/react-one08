import { useState } from "react"

function Greet() {
    const [name, setName] = useState();
    const [game, setGame] = useState();
    function handleC(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if (inputName === "name") {
            setName(inputValue);
        }
        if (inputName === "game") {
            setGame(inputValue);
        }

    }

    return (
        <div>
            <input type="text" name="name" placeholder="enter name" onInput={handleC} />
            <input type="radio" name="game" value="polo" onInput={handleC} />Polo
            <input type="radio" name="game" value="water polo" onInput={handleC} />Water polo

            {name && <h1>good morning {name}</h1>}
            {name && <h1>your sport is {game}</h1>}


        </div>
    )
}
export default Greet;