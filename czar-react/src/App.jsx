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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
