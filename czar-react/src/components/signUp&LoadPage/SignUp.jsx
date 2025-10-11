import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

    const navigate = useNavigate();


    function submitForm(){
        navigate("/login")
    }

  return (
    <>
      <div style={{backgroundColor:'#FFCF71' , borderRadius:"10px" , width:'400px' , padding:'20px'}}>
        <h2><u> SIGN UP </u></h2>
        <div style={{padding:'20px'}}>
          <input style={{height:'30px' , width:'250px', borderRadius:"5px"}} type="text" placeholder="ENTER FIRST NAME" />
        </div>
        <div>
          <input style={{height:'30px' , width:'250px', borderRadius:"5px"}} type="text" placeholder="ENTER LAST NAME" />
        </div>
        <div>
            <p><b>Select Gender:</b></p>
        </div>
        <div>
          <input type="radio" name="Gender" />
          MALE
          <input type="radio" name="Gender" />
          FEMALE
          <input type="radio" name="Gender" />
          OTHERS
        </div>
        <div style={{padding:'20px'}}>
            <input type="text" placeholder="CONTACT NUMBER" style={{height:'30px' , width:'250px', borderRadius:"5px"}}/>
        </div>
        <div>
            <input type="text" placeholder="EMAIL" style={{height:'30px' , width:'250px', borderRadius:"5px"}}/>
        </div >
        <div style={{padding:'20px'}}>
            <input type="password" placeholder="ENTER PASSWORD" style={{height:'30px' , width:'250px', borderRadius:"5px"}}/>
        </div>
        <div >
            <button style={{backgroundColor:"chocolate"}} onClick={submitForm}>SUBMIT</button>
        </div>
      </div>
    </>
  );
}
