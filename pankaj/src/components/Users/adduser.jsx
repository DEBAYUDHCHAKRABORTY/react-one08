import { useState } from "react"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";



export default function Adduser() {
    const [dates, setDates] = useState(null);



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

    function handleChange(fieldName, fieldValue) {
        let _newForm = { ...form }
        _newForm[fieldName] = fieldValue;
        setForm(_newForm);
    }
    return (
        <>
            <div className="my-4">
                {JSON.stringify(form)}
            </div>

            <div className="card flex justify-content-center">
                <FloatLabel>
                    <InputText value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="p-inputtext-sm" placeholder="Enter your name" />
                    <label htmlFor="username">Name</label>
                </FloatLabel>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <RadioButton inputId="gender1" onChange={(e) => handleChange("gender", "male")} checked={form.gender === 'male'} />
                    <label htmlFor="gender1" className="ml-2">Male</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="gender2" onChange={(e) => handleChange("gender", "female")} checked={form.gender === 'female'} />
                    <label htmlFor="gender2" className="ml-2">Female</label>
                </div>
            </div>

            <div className="card flex justify-content-center">
                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput  />
            </div>




            {/*         
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
            </div> */}


        </>
    )
}