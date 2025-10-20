import { useState } from "react";
import { useNavigate } from "react-router-dom";

const userUrl = "http://localhost:9090/api/v1/users";

export default function AddUsers() {
  const initialValues = {
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
  const [formvalues, setFormvalues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  function handlChange(e) {
    const inputName = e.target.name;
    const inputVal = e.target.value;
    setFormvalues({ ...formvalues, [inputName]: inputVal });
  }

  const addData = async () => {
    console.log(formvalues);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      ...formvalues,
      age: +formvalues.age,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(userUrl, requestOptions);
      if (response.ok) {
        alert("User Data Saved Successfully");
        navigate("/users");
      }
    } catch (e) {
      console.error("Error Encountered " + e);
      alert("Data Cannot be saved");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    let errors = validate(formvalues);
    setFormErrors(errors);
    let containsError = Object.keys(errors).length != 0;
    if (containsError) return;
    addData();
  }

  function validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "*Name is required";
    }

    if (!values.username) {
      errors.username = "*Username is required";
    }

    if (!values.email) {
      errors.email = "*Email is required";
    }

    if (!values.password) {
      errors.password = "*Password is required";
    }

    if (!values.age) {
      errors.age = "*Age is required";
    }

    if (!values.gender) {
      errors.gender = "*Gender is required";
    }

    if (!values.phone) {
      errors.phone = "*Phone is required";
    }

    if (!values.city) {
      errors.city = "*City is required";
    }

    if (!values.country) {
      errors.country = "*Country is required";
    }

    return errors;
  }

  const inputTextStyles = {
    height: "35px",
    width: "400px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
  };

  function ErrorMsg({ message }) {
    return (
      <>
        <p style={{ color: "red" }}>{message}</p>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: "#F3F2EC",
            padding: "50px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "red" }}>
            <u>ADD NEW USER</u>
          </h1>

          <div style={{ padding: "5px" }}>
            <label>Enter Your Name</label>
            <br />
            <input
              type="text"
              placeholder="Name"
              style={inputTextStyles}
              name="name"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.name} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your UserName</label>
            <br />
            <input
              type="text"
              placeholder="UserName"
              style={inputTextStyles}
              name="username"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.username} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your Email</label>
            <br />
            <input
              type="text"
              placeholder="Email"
              style={inputTextStyles}
              name="email"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.email} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              style={inputTextStyles}
              name="password"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.password} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your Age</label>
            <br />
            <input
              type="text"
              placeholder="Age"
              style={inputTextStyles}
              name="age"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.age} />

          <div style={{ padding: "5px" }}>
            <label>
              <b>Enter Your Gender </b>
            </label>
            <br />
            <input type="radio" name="gender" onInput={handlChange} />
            Male
            <input type="radio" name="gender" onInput={handlChange} />
            Female
            <input type="radio" name="gender" onInput={handlChange} />
            Others
          </div>
          <ErrorMsg message={formErrors.gender} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your PhoneNo.</label>
            <br />
            <input
              type="text"
              placeholder="PhoneNo."
              style={inputTextStyles}
              name="phone"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.phone} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your City</label>
            <br />
            <input
              type="text"
              placeholder="City"
              style={inputTextStyles}
              name="city"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.city} />

          <div style={{ padding: "5px" }}>
            <label>Enter Your Country</label>
            <br />
            <input
              type="text"
              placeholder="Country"
              style={inputTextStyles}
              name="country"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.country} />

          <br />

          <button type="submit" style={{ width: "200px" }}>
            ADD
          </button>
        </div>
      </form>
    </>
  );
}
