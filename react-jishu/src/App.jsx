import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rong from './component/Colour'
import Emoji from './component/Emoj'
import Pubg from './component/Game'
import SignUp from './component/Sign'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Sports/>
      <Pubg/> */}
      {/* <Rong/> */}
      {/* <Emoji/> */}
      {/* <GreetingApp/> */}
      <SignUp />
    </>
  )
}

export default App
