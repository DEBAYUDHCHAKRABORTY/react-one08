import Adduser from "./adduser";


const data = {
    "name": "Pankaj"
}
export default function EditUser() {
    return (<>
    
        <Adduser data={data}/>
    </>);
}