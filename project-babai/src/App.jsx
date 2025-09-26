import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inputs from './components/Inputs'
import Components from './components/Inputs01'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inputs/>
      <Components/>


    </>
  )
}

export default App
