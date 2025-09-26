import { useState } from "react";

export default function Multi() {
    const [myName, setMyName] = useState();
    const [myFriendsName, setMyFriendsName] = useState();
    const [game, setGame] = useState();


    function handleChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (inputName === "myName") {
            setMyName(inputValue);
        }

        if (inputName === "friendsName") {
            setMyFriendsName(inputValue);
        }

        if (inputName === "game") {
            setGame(inputValue)
        }


    }

    return (
        <>
            <div className="inputs">
                <input type="text" name="myName" placeholder="Enter your name" onInput={handleChange}/>
            </div>
            <div className="inputs">
                <input type="text" name="friendsName" placeholder="Enter your friends name" onInput={handleChange}/>
            </div>

            <div className="radios">
                <input type="radio" name="game" value="cricket" onChange={handleChange}/> Cricket
                <input type="radio" name="game" value="football" onChange={handleChange}/> Football
            </div>

            <div className="result">
                {myName && <h1>Your name is {myName}</h1> }
                {myFriendsName && <h1>Your friends name is {myFriendsName}</h1> }
                {game && <h1>Both loves to play {game}</h1> }
            </div>
        
        </>

    );
}