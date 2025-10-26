import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";


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


  return(
    <>
        <form>



            <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="name">Name</label>
                <InputText id="name" aria-describedby="name-help" />
                <small id="name-help">
                    Enter your complete name.
                </small>
            </div>
        </div>
        </form>
    </>
  );



}
