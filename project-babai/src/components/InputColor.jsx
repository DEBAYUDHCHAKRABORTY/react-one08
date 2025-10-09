import React, { useState } from 'react';

export default function InputColor() {

    const [TextColor, setTextColor] = useState("purple");










    return (
        <>
            <div>
                <h1 style={{color: TextColor}}>Good evening Everyone...</h1>

                <button style={{ padding: "20px", width:"85px", backgroundColor: 'red', color: 'white' }}value="red" onClick={()=> setTextColor("red")}> Red </button>


                <button style={{ padding: "20px", backgroundColor:'green', color:'white' }}value="green" onClick={()=> setTextColor("green")}> Green </button>

            </div>
 
        </>
    );

}