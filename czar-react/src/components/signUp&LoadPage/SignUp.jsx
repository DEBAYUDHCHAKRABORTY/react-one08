import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
    gender: "",
  };

  const navigate = useNavigate();
  const [formvalues, setFormvalues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  function saveData() {
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    registrations.push(isSubmit);
    localStorage.setItem("registrations", JSON.stringify(registrations));
    alert("Registration Done");
  }

  function handlChange(e) {
    const inputName = e.target.name;
    const inputVal = e.target.value;
    setFormvalues({ ...formvalues, [inputName]: inputVal });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errors = validate(formvalues);
    setFormErrors(errors);
    let containsError = Object.keys(errors).length === 0
    if (containsError) return;
    saveData()
    navigate("/login")
  }

  function validate(values) {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "*First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "*Last name is required";
    }

    if (!values.email) {
      errors.email = "*Email is required";
    }

    if (!values.password) {
      errors.password = "*Password is required";
    }

    if (!values.contactNumber) {
      errors.contactNumber = "*Contact number is required";
    }

    if (!values.gender) {
      errors.gender = "*Gender is required";
    }

    return errors;
  }

  const inputTextStyles = {
    height: "30px",
    width: "250px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black"
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: "#FFCF71",
            borderRadius: "10px",
            width: "400px",
            padding: "20px",
          }}
        >
          <h2>
            <u> SIGN UP </u>
          </h2>
          <div style={{ padding: "20px" }}>
            <input
              style={inputTextStyles}
              type="text"
              value={formvalues.firstName}
              placeholder="ENTER FIRST NAME"
              name="firstName"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.firstName} />
          <div>
            <input
              style={inputTextStyles}
              type="text"
              placeholder="ENTER LAST NAME"
              name="lastName"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.lastName} />
          <div>
            <p>
              <b>Select Gender:</b>
            </p>
          </div>
          <div>
            <input type="radio" name="gender" onInput={handlChange} />
            MALE
            <input type="radio" name="gender" onInput={handlChange} />
            FEMALE
            <input type="radio" name="gender" onInput={handlChange} />
            OTHERS
          </div>
          <ErrorMsg message={formErrors.gender} />

          <div style={{ padding: "20px" }}>
            <input
              type="text"
              placeholder="CONTACT NUMBER"
              style={inputTextStyles}
              name="contactNumber"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.contactNumber} />

          <div>
            <input
              type="text"
              placeholder="EMAIL"
              style={inputTextStyles}
              name="email"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.email} />

          <div style={{ padding: "20px" }}>
            <input
              type="password"
              placeholder="ENTER PASSWORD"
              style={inputTextStyles}
              name="password"
              onInput={handlChange}
            />
            <ErrorMsg message={formErrors.password} />
          </div>

          <div>
            <button
              type="submit"
              style={{ backgroundColor: "chocolate" }}            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

function ErrorMsg({ message }) {
  return (
    <>
      <p style={{ color: "red" }}>{message}</p>
    </>
  );
}
