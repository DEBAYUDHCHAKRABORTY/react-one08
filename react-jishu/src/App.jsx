import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rong from './component/Colour'
// import Sports from './component/From'
// import Pubg from './component/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Sports/>
      <Pubg/> */}
      <Rong/>
    </>
  )
}

export default App
