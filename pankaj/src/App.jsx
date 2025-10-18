import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Add from './components/comp1'
import Multi from './components/comp2'
import InRadChe from './components/Radiocheck'
import Greet from './components/comp4'
import './App.css'
import FFF from './components/comp3'
import Call from './components/api'
import Getdata from './components/api2'
import Weather from './components/aoi3'
import QuoteGenerator from './components/api4'
// import Quote from './components/api5'
import Userdata from './components/api6'
import Color from './components/cp'
import TextChange from './components/butt'
import Change from './components/single'
import Greeting from './components/greet'
import Signup from './components/signup'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homepage'
import Login from './components/login'
import Quotes from './components/quotes'
import Usedata from './components/api7'
import QuoteDetail from './components/quotesDetail'


function App() {

  return (
    <>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/comp1" element={<Add />} />
        <Route path="/comp2" element={<Multi />} />
        <Route path="/Radiocheck" element={<InRadChe />} />
        <Route path="/comp4" element={<Greet />} />
        <Route path="/comp3" element={<FFF />} />
        <Route path="/api" element={<Call />} />
        <Route path="/api2" element={<Getdata />} />
        <Route path="/aoi3" element={<Weather />} />
        <Route path="/api4" element={<QuoteGenerator />} />
        <Route path="/api6" element={<Userdata />} />
        <Route path="/cp" element={<Color />} />
        <Route path="/butt" element={<TextChange />} />
        <Route path="/single" element={<Change />} />
        <Route path="/greet" element={<Greeting />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:id" element={<QuoteDetail />} />

        <Route path="/users" element={<Usedata />} />




      </Routes>









      {/* 
      <Multi />
      <FFF />
      <RadioCity />
      <InRadChe />
      <Greet />

      <Call />
      <Getdata />
      <QuoteGenerator />
      <Weather />
      <Call />
      <Quote />
      <Userdata />
      <Color />
      <TextChange />
      <Change />
      <Greeting />
      <Login />

      <Quote />
      <Routes /> */}
      {/* <Add/>
      <Multi/>
      <FFF/>
      <RadioCity/>
      <InRadChe/>
      <Greet/>

      <Call/> */}
      {/* <Getdata/> */}
      {/* <QuoteGenerator/>
      <Weather/>
      <Call/> */}
      {/* <Quote/> */}
      {/* <Userdata/> */}
      {/* <Color/> */}
      {/* <TextChange/> */}
      {/* <Change/> */}
      <Greeting />

      {/* <Quote/> */}
    </>
  )
}

export default App
