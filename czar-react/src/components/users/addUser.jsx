import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from "primereact/password";

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
      <form className="flex flex-col bg-blue-300 rounded-lg p-4 mt-10">
        <h1 className="text-center text-6xl my-10 underline underline-offset-8">
          Add Users
        </h1>

        <div className="flex flex-col items-center space-y-5">
          <div className="card w-10/12">
            <FloatLabel className="w-full">
              <InputText className="p-inputtext-sm w-full" id="name" />
              <label htmlFor="name">Name</label>
            </FloatLabel>
          </div>

          <div className="card w-10/12">
            <FloatLabel className="w-full">
              <InputText className="p-inputtext-sm w-full" id="username" />
              <label htmlFor="username">Username</label>
            </FloatLabel>
          </div>

          <div className="card w-10/12">
            <FloatLabel className="w-full">
              <InputText className="p-inputtext-sm w-full" id="email" />
              <label htmlFor="email">Email</label>
            </FloatLabel>
          </div>

          <div className="card w-10/12 mx-auto">
            <FloatLabel className="w-full bg-amber-300">
              <Password
                inputId="password"
                inputStyle={{ background: "yellow" }}
                inputClassName="w-full"
                toggleMask
              />
              <label htmlFor="password">Password</label>
            </FloatLabel>
          </div>
        </div>
      </form>
    </>
  );
}
