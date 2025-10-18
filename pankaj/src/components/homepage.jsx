import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <ol>

            <li><Link to="/quotes" > Get Quotes </Link></li>
            <li><Link to="/users" > Show User Data </Link></li>
            <li><Link to="/comp1" > Add </Link></li>
            <li><Link to="/comp2" > Multi</Link></li>
            <li><Link to="/Radiocheck" > InRadChe</Link></li>
            <li><Link to="/comp4" > Greet</Link></li>
            <li><Link to="/comp3" > FFF </Link></li>
            <li><Link to="/api" > Call</Link></li>
            <li><Link to="/api2" > Getdata</Link></li>
            <li><Link to="/aoi3" > Weather</Link></li>
            <li><Link to="/api4" > QuoteGenerator</Link></li>
            <li><Link to="/api6" > Userdata</Link></li>
            <li><Link to="/cp" > Clior</Link></li>
            <li><Link to="/butt" > TextChange</Link></li>
            <li><Link to="/single" > Change</Link></li>
            <li><Link to="/greet" > Greeting</Link></li>
            <li><Link to="/signup" > Signup</Link></li>
            <li><Link to="/login" > Login</Link></li>



        </ol>
    );
}