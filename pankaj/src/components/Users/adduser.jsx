import { useState } from "react"

export default function Adduser() {
    const [form, setForm] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        phone: "",
        city: "",
        country: "",
        create_at: ""
    });
    return (
        <>
            <div style={{backgroundColor:"#C48325", height:"750px", width:"600px", borderRadius:"10px", padding:"5px"}}>
                <h1 style={{fontSize:"45px"}} ><u>Add New User</u></h1>
                <div style={{padding:"10px"}} >
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter name" />
                </div> 
                <div style={{padding:"10px"}}>
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter username" />
                </div>
                <div style={{padding:"10px"}}> 
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter email" />
                </div>
                <div style={{padding:"10px"}} >
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter password" />
                </div>
                <div style={{padding:"10px"}}>
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter your age" />
                </div>
                <div>
                    <h2>Select Your Gender</h2>
                </div>
                <div>
                        <input type="radio" name="Gender" />
                        MALE
                        <input type="radio" name="Gender" />
                        FEMALE
                        <input type="radio" name="Gender" />
                        OTHERS
                </div>
                <div style={{padding:"10px"}}>
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter phone no" />
                </div>
                <div style={{padding:"10px"}}>
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter city" />
                </div>
                <div style={{padding:"10px"}}>
                    <input style={{ height: '27px', width: '68%', padding: "2px 10px", borderRadius: "5px" }} type="text" placeholder="enter country" />
                </div>
                <div style={{padding:"20px"}}>
                <button>Submit</button>
                </div>
            </div>


        </>
    )
}