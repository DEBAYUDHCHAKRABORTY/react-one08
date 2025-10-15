import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        firstName: "",
        lastname: "",
        gender: "",
        contactNumber: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const validfirstName = (firstName) => {
        if (!firstName || firstName.length < 2 || firstName.length > 10) return false;
        const pattern = /^[a-zA-Z.]/;
        return pattern.test(firstName);
    };
    const validlastName = (lastName) => {
        if (!lastName || lastName.length < 2 || lastName.length > 10) return false;
        const pattern = /^[a-zA-Z.]/;
        return pattern.test(lastName);
    };
    const validcontactNumber = (contactNumber) => {
        if (!contactNumber || contactNumber.length !== 10 || contactNumber.length > 10) return false;
        const pattern = /^[0-9]/;
        return pattern.test(contactNumber);
    };
    const validemailId = (emailId) => {
        if (!emailId || emailId.length < 10 || emailId.length > 30) return false;
        const pattern = /^@[a-zA-Z0-9.-]/;
        return pattern.test(emailId);
    };
    const validpassWord = (passWord) => {
        if (!passWord || passWord.length < 7 || passWord.length > 20) return false;
        const pattern = /^@[a-zA-Z0-9.-]/;
        return pattern.test(emailId);
    };

    function handleSubmit(e) {
        e.preventDefault();
        let newErrors = {};
        if (!validfirstName(form.firstName)) {
            newErrors.firstName =
                "Invalid First Name. Must be alphabatic and 2-10 characters."
        }
        if (!validlastName(form.lastname)) {
            newErrors.lastName =
                "Invalid Last Name. Must be alphabatic and 2-10 characters."
        }
        if (!validcontactNumber(form.contactNumber)) {
            newErrors.contactNumber =
                "Invalid Contact Number. Must be numerical and 10 characters."
        }
        if (!validemailId(form.emaild)) {
            newErrors.emailId =
                "Invalid Email Id. Must be alphanumerical and 10-30 characters."
        }
        if (!validpassWord(form.passWord)) {
            newErrors.passWord =
                "Invalid Password. Must be  alphanumerical and 8-20 characters."
        }
        if (!form.genderAccepted) {
            newErrors.gender =
                "You must accept the gender"
        }
        setErrors(newErrors);
        console.log("Errors set");
        console.log(newErrors);

        let checkIfErrorExists = Object.keys(newErrors).length > 0
        if (checkIfErrorExists) return;

        // save to local storage

        navigate("/login");

    };

    function handleChange(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        if (targetName === "firstName") {
            setForm({ ...form, firstName: targetValue })

        let targetName  = e.target.name;
        let targetValue = e.target.value;

        if (targetName === "firstName") {
            setForm({...form, firstName: targetValue})
        }
    }


    return (
        <>
            <div style={{ backgroundColor: '#acc8ebff', borderRadius: "10px", height: "780px", width: '650px', padding: '5px' }}>
                <h2 style={{ fontSize: "45px" }} > <u> SIGN UP </u></h2>
                <div style={{ padding: '20px' }}>
                    <input style={{ height: '27px', width: '80%', padding: "2px 10px", borderRadius: "5px" }} name="firstName" type="text" placeholder="ENTER FIRST NAME" onInput={handleChange} />
                    {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                </div>
                <div>
                    <input style={{ height: '27px', width: '75%', padding: "2px 10px", borderRadius: "5px" }} name="lastName" type="text" placeholder="ENTER LAST NAME" onInput={handleChange} />
                    {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
                </div>
                <div style={{ padding: '27px' }}>
                    <input type="text" placeholder="CONTACT NUMBER" style={{ height: '30px', width: '82%', padding: "2px 10px", borderRadius: "5px" }} name="contactNumber" onInput={handleChange} />
                    <input style={{ height: '27px', width: '75%', padding: "2px 10px", borderRadius: "5px" }} name="lastName" type="text" placeholder="ENTER LAST NAME" onInput={handleChange}/>
                    {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
                </div>
                <div style={{ padding: '27px' }}>
                    <input type="text" placeholder="CONTACT NUMBER" style={{ height: '30px', width: '82%', padding: "2px 10px", borderRadius: "5px" }} name="contactNumber" onInput={handleChange}/>
                    {errors.contactNumber && <div style={{ color: "red" }}>{errors.contactNumber} </div>}
                </div>
                <div>
                    <h2>Select Your Gender</h2>
                </div>
                <div style={{ paddingBottom: "15px", }}>
                    <input type="radio" name="Gender" />
                    MALE
                    <input type="radio" name="Gender" />
                    FEMALE
                    <input type="radio" name="Gender" />
                    OTHERS
                    {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
                </div>

                <div>
                    <input type="text" placeholder="EMAIL" style={{ height: '30px', width: '76%', padding: "2px 10px", borderRadius: "5px" }} name="email" onInput={handleChange}/>
                    {errors.emailId && <div style={{ color: "red" }}>{errors.emailId}</div>}
                </div >
                <div style={{ padding: '27px' }}>
                    <input type="password" placeholder="ENTER PASSWORD" style={{ height: '30px', width: '83%', padding: "2px 10px", borderRadius: "5px"  }} name="password" onInput={handleChange} />
                    <input type="text" placeholder="EMAIL" style={{ height: '30px', width: '76%', padding: "2px 10px", borderRadius: "5px" }} />
                    {errors.emailId && <div style={{ color: "red" }}>{errors.emailId}</div>}
                </div >
                <div style={{ padding: '27px' }}>
                    <input type="password" placeholder="ENTER PASSWORD" style={{ height: '30px', width: '83%', padding: "2px 10px", borderRadius: "5px" }} />
                    {errors.passWord && <div style={{ color: "red" }}>{errors.passWord}</div>}
                </div>
                <div >
                    <button style={{ backgroundColor: "green", color: "white" }} onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>
        </>


    )

}}