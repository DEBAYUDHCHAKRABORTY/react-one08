import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [formvalues, setFormvalues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formvalues");
    const storedUser = localStorage.getItem("currentData");

    if (storedData) {
      setFormvalues(storedData);
    }
    if (storedUser) {
      setLoginUser(JSON.parse(storedUser));
    }
  }, []);

  function readData(e){
    e.preventDefault();
    localStorage.setItem('formvalues',formvalues);
    localStorage.setItem('currentData',JSON.stringify({ data: formvalues, role: 'user' }));
    setLoginUser({data: formvalues, role: 'user'});
  }

  function handlChange(e) {
    const inputName = e.target.name;
    const inputVal = e.target.value;
    setFormvalues({ ...formvalues, [inputName]: inputVal });
  }

  function handleSubmit(){
    let errors = validate(formvalues);
    setFormErrors(errors);
    let containsError = Object.keys(errors).length != 0;
    if (containsError) return;
    // readData();
    // navigate("/success");
  }

  function validate(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "*Email is required";
    }

    if (!values.password) {
      errors.password = "*Password is required";
    }

    return errors;
  }

  const inputTextStyles = {
    height: "30px",
    width: "300px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h2>
              <u>LOG IN</u>
            </h2>
          </div>

          <div>
            <input
              type="text"
              placeholder="ENTER EMAIL"
              name="email"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.email} />

          <div>
            <input
              type="passwoord"
              placeholder="ENTER PASSWORD"
              name="password"
              onInput={handlChange}
            />
          </div>
          <ErrorMsg message={formErrors.password} />

          <div>
            <button type="submit">LOG IN</button>
          </div>
        </div>
      </form>
    </>
  );

  function ErrorMsg({ message }) {
    return (
      <>
        <p>{message}</p>
      </>
    );
  }
}
