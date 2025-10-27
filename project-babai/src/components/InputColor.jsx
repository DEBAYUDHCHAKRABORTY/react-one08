import React, {useState} from 'react';

export default function InputColor() {

    const [TextColor, setTextColor] = useState("black");
    const [TextBackground, setTextBackgound] = useState("yellow");



    function Resethandler() {
        setTextColor("black");
        setTextBackgound("yellow");
    }


    return (
        <>
            <div>
                <h1 style={{ color: TextColor, backgroundColor: TextBackground}}>Good evening Everyone...
                    This is Nabin Kr Misra, wishing you a great evening!
                </h1>

                <button style={{ padding: "20px", width: "85px", backgroundColor: 'red', color: 'white' }} value="red" onClick={() => setTextColor("red")}> Red </button>


                <button style={{ padding: "20px", backgroundColor: 'green', color: 'white' }} value="green" onClick={() => setTextColor("green")}> Green </button>
                <button style={{ padding: "20px", backgroundColor: 'blue', color: 'white' }} value="background" onClick={Resethandler}> Reset ! </button>

            </div>

        </>
    );

}