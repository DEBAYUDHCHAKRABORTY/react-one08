import { useState } from "react";

function Rong() {

    const [textColor, setTextcolor] = useState('');

    function handleChange() {
        setTextcolor('blue')
    }
    function handleBgm() {
        setTextcolor('red')
    }
    function handleInput(){
        setTextcolor('yellow')
    }


    return (
        <div>
            <h1 style={{color:textColor}}>Good Night Everybody,,,,,,</h1>
            <button style={{ padding: '30px', backgroundColor: 'blue', color: 'white' }} onClick={handleChange}></button>
            <button style={{ padding: '30px', backgroundColor: 'red', color: 'white' }} onClick={handleBgm}></button>
            <button style={{ padding: '30px', backgroundColor: 'yellow', color: 'white' }} onClick={handleInput}></button>

        </div>
    )
}


export default Rong;