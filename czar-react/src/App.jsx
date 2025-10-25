import { useState } from "react";
import "./App.css";
import MultiInput from "./components/texRad";
import InRadChe from "./components/inRadCheck";
import Weather from "./components/weather";
import Terad from "./components/textRadio";
import Btnwtr from "./components/wetrbtn";
import ClrPick from "./components/clrpick";
import BtnClr from "./components/colorText/btnClr";
import Emoji from "./components/emoji";
import HomePage from "./components/homePage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp&LoadPage/SignUp";
import LogIn from "./components/login/logIn";
import Success from "./components/success/success";
import Quotes from "./components/QUOTES/quotes";
import FrntPg from "./components/USERS/frontPage";
import AddUsers from "./components/USERS/addUsers";
import QuoteDetails from "./components/QUOTES/quoteDetails"
import ListUsers from "./components/USERS/frontPage"
import CreateUser from "./components/USERS/addUsers"
import {
  QUOTE_DETAIL_PATH,
  USER_ADD_PATH,
  USER_PATH,
  USER_SEARCH_PATH,
} from "./constants/routeconstants";
import Search from "./components/USERS/search";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colortext" element={<BtnClr />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/success" element={<Success />} />
        <Route path={QUOTE_DETAIL_PATH} element={<QuoteDetails />}></Route>
        <Route path={USER_PATH} element={<ListUsers />}></Route>
        <Route path={USER_ADD_PATH} element={<CreateUser />}></Route>
        <Route path={USER_SEARCH_PATH} element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
