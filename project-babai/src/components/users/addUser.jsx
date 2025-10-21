import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
    const navigate = useNavigate()




    function handleSubmit() {
        console.log("submit button clicked")

    };

    return (

        <div className="forms">
            <h1 className="heading">Add User Details</h1>
            <>
                <div>
                    <h5>Enter your name*</h5>
                    <input type="text" name="name" placeholder="Name" />
                </div>

                <div>
                    <h5>Enter your User Name*</h5>
                    <input type="text" name="username" placeholder="UserName" />
                </div>

                <div>
                    <h5>Enter your Email address*</h5>
                    <input type="email" name="email" placeholder="Email" />
                </div>

                <div>
                    <h5>Enter your password*</h5>
                    <input type="password" name="password" placeholder="Password" />
                </div>

                <div>
                    <h5>Enter your Age*</h5>
                    <input type="number" value="age" placeholder="Age" />
                </div>

                <div>
                    <h5>Select your Gender*</h5>
                    <input type="radio" name="male" />Male
                    <input type="radio" name="female" />Female
                    <input type="radio" name="others" /> Others
                </div>

                <div>
                    <h5>Enter your Contact No.*</h5>
                    <input type="number" id="contact" placeholder="Contact No" />
                </div>

                <div>
                    <h5>Enter your City Name*</h5>
                    <input type="text" name="city" placeholder="City" />
                </div>

                <div>
                    <h5>Enter your Country Name*</h5>
                    <input type="text" name="country" placeholder="Country " />
                </div>

                <button className="submitButton" onClick={handleSubmit}>Submit</button>
            </>


        </div>
    );
}