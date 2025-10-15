import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Link to="/colortext"><h2>COLOR PICKER</h2></Link>
      <br/>
      <Link to="/signup"><h2>Sign Up</h2></Link>
      <br/>
      <Link to="/quotes"><h2>Quotes</h2></Link>
    </>
  );
}
