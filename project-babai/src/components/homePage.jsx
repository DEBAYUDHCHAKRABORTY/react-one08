import { Link } from "react-router-dom"
import { USER_SEARCH_PATH } from "../constant/routePath";

export default function HomePage() {

    return (<>

        <ol>
            <li><Link to="/inputs" > Inputs </Link></li>
            <li><Link to="/components" > Components </Link></li>
            <li><Link to="/newcomponent" > NewComponent </Link></li>
            <li><Link to="/mycomponent" > MyComponent </Link></li>
            <li><Link to="/praccompo" > PracCompo </Link></li>
            <li><Link to="/multiform" > MultiForm </Link></li>
            <li><Link to="/newapi" > NewApi </Link></li>
            <li><Link to="/projectcompo" > ProjectCompo </Link></li>
            <li><Link to="/colorpicker" > ColorPicker </Link></li>
            <li><Link to="/inputcolor" > InputColor </Link></li>
            <li><Link to="/greetings" > Greetings </Link></li>
            <li><Link to="/newapi" > NewApi </Link></li>
            <li><Link to="/signup" > SignUp </Link></li>
            <li><Link to="/login" > Login </Link></li>
            <li><Link to="/quotes" > Quotes </Link></li>
            <li><Link to= "/users"> ListUsers</Link></li>
            <li><Link to= "/users/create"> UserForm</Link></li>
            {/* <li><Link to= {USER_SEARCH_PATH}> Search </Link></li> */}
        </ol>

    </>);
}