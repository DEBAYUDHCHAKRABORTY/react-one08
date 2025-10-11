// import { useState } from "react";

// function Sports() {

//     const [box, setName] = useState("")
//     const [dj, setDj] = useState("")
//     const [sound, setSound] = useState("")

//     function handleName(event) {
//         setName(event.target.value);
//     }
//     function handleSound(event) {
//         setSound(event.target.value);
//     }
//     function handel(event) {
//         setDj(event.target.value)
//     }
//     return (
//         <div>
//             <input type="box" placeholder="Enter Your Name" onInput={handleName} />
//             <input type="box" placeholder="Last Name" onInput={handleName} />
//             <div className="sound"></div>
//             <input type="sound" name="play" onInput={handleSound} value="boy" />
//             <input type="" name="playpro" onInput={handleSound} value="girl" />

//             {box && <h2>{box}</h2>}
//             {dj && <h4> {dj}</h4>}
//             {sound && <h3>{sound}</h3>}
//         </div>

//     )
// }

// export default Sports;