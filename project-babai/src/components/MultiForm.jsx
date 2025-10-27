import {useState} from 'react';

export default function MultiForm() {

    const [show, setShow] = useState(false);

    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [resumeFile, setResumeFile] = useState(null); 
    const [favSub, setFavSub] = useState([]);
    const [address, setAddress] = useState();
    

    function handleSubmit(e) {
        console.log("Form Submitted");
        console.log(name);
        console.log(gender);
        console.log(email);
        console.log(resumeFile);
        console.log(favSub);
        console.log(address);

        setShow(true);
        e.preventDefault();
    }

    function handleReset(e) {
        console.log("Form Reset");
        setName("");
        setGender("");
        setEmail("");
        setPassword("");
        setCpassword("");
        setResumeFile("null");
        setFavSub([]);
        setAddress("");
        
        setShow(false);
        e.preventDefault();
    }

    function handleChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;

    
        if (inputName === "name") {
            setName(inputValue);
        }

        if (inputName === "gender" ) {
            setGender(inputValue);
        }
          if (inputName === "email") {
            setEmail(inputValue);
        }
        if (inputName === "password") {
            setPassword(inputValue);
        }
        if (inputName === "cpassword") {
            setCpassword(inputValue);
        }
        if (inputName === "resume") {
            setResumeFile(inputValue);
        }

        if (inputName === "Math" || inputName === "Science" || inputName === "History") {
            if (e.target.checked) {
                setFavSub([...favSub, inputValue]);
            } else {
                setFavSub(favSub.filter(sub => sub !== inputValue));
            }
        }
        if (inputName === "address") {
            setAddress(inputValue);
        }
    }
            

    return (
        <div className="FormContainer">
            <h2>This is a MultiForm Component</h2>

            <div>
                <label htmlFor="name">Client Name* </label>
                <input type="text" name="name" id="name" placeholder=" EnterYour your Name" onInput={handleChange}/>
                
            </div>

            <div>
                <label htmlFor="gender">Gender* </label>
                <input type="radio" name="gender" value="male" id="male" onInput={handleChange}/>Male
                <input type="radio" name="gender" value="female" id="female" onInput={handleChange}/>Female
                <input type="radio" name="gender" value="others" id="others" onInput={handleChange}/>Others
            </div>



            <div>
                <label htmlFor="email">Email* </label>
                <input type="email" name="email" placeholder="Enter Your Email" onInput={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password* </label>
                <input type="password"  name="password" placeholder="Type Your Password" onInput={handleChange}/>
            </div>
            <div>
                <label htmlFor="cpassword">Confirm Password* </label>
                <input type="password" name="cpassword" placeholder="Please Confirm your Password" onInput={handleChange}/>
            </div>
            
            
            <div>
                <label htmlFor="resume">Upload your Resume* </label>
                <input type="file" name="resumeFile" id="resume" onInput={handleChange} />
            
            </div>
            <div>
                <label htmlFor="FavSub">Your fav Subjects* </label>
            
                <input type="checkbox" name="Math" id="sub1" value="math" onInput={handleChange}/>Math

                <input type="checkbox" name="Science" id="sub2" value="science" onInput={handleChange}/>Science

                <input type="checkbox" name="History" id="sub3" value="history" onInput={handleChange}/>History
            </div>
            
            <div>
                <label htmlFor="address">Address* </label>
                <textarea name="address" placeholder="Your Address" onInput ={handleChange}></textarea>
            </div>
         
            <div>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {show && (
                <>
                {name && <h1>Gd Evening Mr. {name}</h1>}
                {gender && <h1> Your gender is {gender}</h1>}
                {email && <h1>Your email is {email}</h1>}
                {resumeFile && <h1>Your resume is uploaded</h1>}
                {favSub.length > 0 && <h1>You have choosen {favSub.join(", ")} as your fav Sujects</h1>}
                {address && <h1>Your current address is {address}</h1>}
                </>


            )}

        </div>
    );
}