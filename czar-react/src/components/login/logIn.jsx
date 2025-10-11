export default function LogIn(){
    return(
        <>
            <div style={{backgroundColor:"#BADFDB" , borderRadius:"10px" , width:'400px' , padding:'20px'}}>
                <div>
                    <h2><u>LOG IN</u></h2>
                </div>
                <div style={{padding:'20px'}}>
                    <input type="text" placeholder="ENTER EMAIL" style={{height:'30px' , width:'250px', borderRadius:"5px"}}/>
                </div>
                <div>
                    <input type="passwoord" placeholder="ENTER PASSWORD" style={{height:'30px' , width:'250px', borderRadius:"5px"}}/>
                </div>
                <div style={{padding:'20px'}}>
                    <button style={{backgroundColor:"#FFA4A4"}}>LOG IN</button>
                </div>
            </div>
        </>
    )
}