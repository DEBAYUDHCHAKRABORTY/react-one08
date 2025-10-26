import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {InputText} from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";



export default function CreateUser() {
    const emptyUser = {
        name: "",
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        phone: "",
        city: "",
        country: "",
    };
    const navigate = useNavigate();
    const [formvalues, setFormvalues] = useState(emptyUser);
    const [formErrors, setFormErrors] = useState({});


    return (
        <>
            <h1 className="text-center text-6xl my-2 underline underline-offset-8">Add Users</h1>
        <form className="my-4 bg-red-300 flex justify-center">
            <div className="card flex justify-content-center w-10/12 bg-amber-400">
                <FloatLabel className="w-full">
                    <InputText className="p-inputtext-sm w-full"  id="name" />
                    <label htmlFor="name">Name</label>
                </FloatLabel>
            </div>

        </form>
        </>
    );


}
