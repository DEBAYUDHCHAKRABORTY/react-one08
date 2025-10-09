import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inputs from './components/Inputs'
import Components from './components/Inputs01' 
import NewComponent from './components/NewComponent' 
import MyComponent from './components/MyComponents'
import PracCompo from './components/PracCompo'
import MultiForm from './components/MultiForm'
import NewApi from './components/NewAPI'
import ProjectCompo from './components/Project-compo'
import ColorPicker from './components/ColorPicker'
import InputColor from './components/InputColor'




function App() {
  const [count, setCount] = useState(0)

  return (
      <>
    {/* <Inputs/>
     <Components/>
     <NewComponent/>
     <MyComponent/>
     <PracCompo/>
      <MultiForm/> 
      <NewApi/> */}
      {/* <ProjectCompo/> */}
      <ColorPicker/>
      <InputColor/>

    </>
  )
}

export default App
