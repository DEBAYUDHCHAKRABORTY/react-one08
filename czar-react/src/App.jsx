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
import QuoteDetail from "./components/QUOTES/quoteDetails";
import FrntPg from "./components/USERS/frontPage";
import AddUsers from "./components/USERS/addUsers";

function App() {
  return (
    <>
      {/* <Terad/>
      <MultiInput/>
      <InRadChe/> 
      <Weather/>
      <Btnwtr/>
      <ClrPick/>
      <BtnClr/>
      <Emoji/>*/}
      {/* <HomePage/> */}
      {/* {<SignUp/>} */}
      {/* <LogIn/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colortext" element={<BtnClr />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/success" element={<Success />} />
        <Route path={QUOTE_PATH} element={<Quotes />}></Route>
        <Route path={QUOTE_DETAIL_PATH} element={<QuoteDetails />}></Route>
        <Route path={USER_PATH} element={<ListUsers />}></Route>
        <Route path={USER_ADD_PATH} element={<CreateUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
