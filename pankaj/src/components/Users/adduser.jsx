import { useEffect, useState } from "react"
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';





export default function Adduser({ data }) {
    const [dates, setDates] = useState(null);
    const [update, setUpdate] = useState(false);
    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        phone: "",
        city: "",
        country: "",
    });

    useEffect(() => {
        if (data) {
            setUpdate(true);
            setForm(prevForm => ({ ...prevForm, ...data }));
        }
    }, [])
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    function getCityValues() {
        return cities.find(item => item.name === form.city)
    }

    function handleChange(fieldName, fieldValue) {
        let _newForm = { ...form }
        _newForm[fieldName] = fieldValue;
        setForm(_newForm);
    }
    return (
        <>
            <div className="bg-yellow-100 flex-col justify-center w-200 h-180 ">
                <div className="my-8 ">
                    {JSON.stringify(form)}
                </div>
                <div className="flex-col justify-center w-80 mx-auto">

                    <div className="card my-6">
                        <FloatLabel>
                            <InputText value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="p-inputtext-sm w-80" placeholder="Enter your name" />
                            <label htmlFor="username">Name</label>
                        </FloatLabel>
                    </div>
                    <div className="card my-6" >
                        <FloatLabel>
                            <InputText value={form.username} onChange={(e) => handleChange("username", e.target.value)} className="p-inputtext-sm w-80" placeholder="Enter username" />
                            <label htmlFor="username">Username</label>
                        </FloatLabel>
                    </div>
                    <div className="card my-6">
                        <FloatLabel>
                            <InputText value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="p-inputtext-sm w-80" placeholder="Enter your email" />
                            <label htmlFor="username">Email</label>
                        </FloatLabel>
                    </div>
                    <div className="card my-6">
                        <Password value={form.password} onChange={(e) => handleChange("password", e.target.value)} className="p-inputtext-sm w-80" inputClassName="w-full" placeholder="Enter your password" />
                        <label htmlFor="password"></label>
                    </div>
                    <div className="card my-6">
                        <FloatLabel>
                            <InputText value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="p-inputtext-sm w-80" placeholder="Enter phone no" />
                            <label htmlFor="phone">Phone no</label>
                        </FloatLabel>
                    </div>
                    <div className="flex flex-wrap-center gap-3"  >
                        <div className="flex align-items-center">
                            <RadioButton inputId="gender1" onChange={(e) => handleChange("gender", "male")} checked={form.gender === 'male'} />
                            <label htmlFor="gender1" className="ml-2">Male</label>
                        </div>
                        <div className="flex flex-wrap-center gap-3 justify-center">
                            <RadioButton inputId="gender2" onChange={(e) => handleChange("gender", "female")} checked={form.gender === 'female'} />
                            <label htmlFor="gender2" className="ml-2">Female</label>
                        </div>
                    </div>
                    <div className="card my-6">
                        <Dropdown value={getCityValues()} onChange={(e) => handleChange("city", e.value.name)} options={cities} optionLabel="name"
                            placeholder="Select a City" className="p-inputtext-sm w-80" />
                    </div>
                    <div className="card my-6">
                        <FloatLabel>
                            <InputText value={form.country} onChange={(e) => handleChange("country", e.target.value)} className="p-inputtext-sm w-80" placeholder="Enter Country" />
                            <label htmlFor="country">Country</label>
                        </FloatLabel>
                    </div>
                    <div className="card flex-wrap gap-3 my-6 flex justify-center">
                        <Button label={update ? "Update": "Submit"} icon="pi pi-check" onChange={(e) => handleChange("submit", e.target.value)} className="p-inputtext-sm " />
                    </div>
                </div>
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