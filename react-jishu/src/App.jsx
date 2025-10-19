import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rong from './component/Colour'
import Emoji from './component/Emoj'
import Pubg from './component/Game'
import SignUp from './component/Sign'
import Terad from './component/Ret1'
import { Route, Routes } from 'react-router-dom'
import Data1 from './component/Data'
function App() {

  return (
    <>

    <Routes>
      <Route path = "/pubg" element= {<Pubg/>} />
      <Route path = "/signUp" element= {<SignUp />} />
      <Route path="/rong"element={<Rong/>} />
      <Route path="/emoji"element={<Emoji/>}/>
      <Route path='/terad'element={<Terad/>}/>
      <Route path='/data1'element={<Data1/>}
      
      


    </Routes>
    </>
  )
}

export default App
