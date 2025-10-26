import "./App.css";
import BtnClr from "./components/colorText/btnClr";
import HomePage from "./components/homePage";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/signUpLoadPage/SignUp";
import LogIn from "./components/login/logIn";
import Success from "./components/success/success";
import ListUsers from "./components/users/users";
import QuoteDetails from "./components/quotes/quoteDetails";
import {QUOTE_DETAIL_PATH, USER_ADD_PATH, USER_PATH, USER_SEARCH_PATH,} from "./constants/routeconstants";
import Search from "./components/users/search";
import CreateUser from "./components/USERS/addUser";

function App() {
    return (
        <div className="container mx-auto px-4">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/colortext" element={<BtnClr/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path={QUOTE_DETAIL_PATH} element={<QuoteDetails/>}></Route>
                <Route path={USER_PATH} element={<ListUsers/>}></Route>
                <Route path={USER_ADD_PATH} element={<CreateUser/>}></Route>
                <Route path={USER_SEARCH_PATH} element={<Search/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
