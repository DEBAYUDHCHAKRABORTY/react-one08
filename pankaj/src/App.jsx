import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Add from './components/comp1'
import Multi from './components/comp2'
import RadioCity from '../../czar-react/src/radioCities'
import InRadChe from './components/Radiocheck'
import Greet from './components/comp4'
import './App.css'
import FFF from './components/comp3'
import Call from './components/api'
import Getdata from './components/api2'
import Weather from './components/aoi3'


function App() {

  return (  
    <>
      {/* <Add/>
      <Multi/>
      <FFF/>
      <RadioCity/>
      <InRadChe/>
      <Greet/>

      <Call/> */}
      {/* <Getdata/> */}
      <Weather/>
      <Call/>
    </>
  )
}

export default App
