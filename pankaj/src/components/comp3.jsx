import { useState } from "react"

function FFF() {
    const [name, setName] = useState();
    const [play, setPlay] = useState();
    const [food,setFood] = useState();
    function handleDD(e){
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if (inputName === "name"){
            setName(inputValue);
        }
        if (inputName ==="play"){
            setPlay (inputValue);
        }
        if (inputName === "chicken"){
            if (e.target.checked) {
                setFood("veg")
            } else {
                setFood("non - veg")
            }
            setChicken(inputValue);
        }



    }

    return (
        <div>
            <input type="text" name="name" placeholder="enter name" onInput={handleDD} />
            <input type="radio" name="play" value="game" onInput={handleDD} />cricket
            <input type="radio" name="play" value="game" onInput={handleDD} />football

            <input type="checkbox" name="chicken" onInput={handleDD} />veg

           {name && <h1>name is {name}</h1>}
           {play && <h1>game is {play}</h1>}
           {food && <h1>food is {food}</h1>}

        </div>
    )
}
export default FFF;