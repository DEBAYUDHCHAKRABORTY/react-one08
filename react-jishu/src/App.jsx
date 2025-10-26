import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rong from './component/colour'
import Emoji from './component/emoj'
import Pubg from './component/game'
import SignUp from './component/sign'
import Terad from './component/ret1'
import { Route, Routes } from 'react-router-dom'
import Data1 from './component/quote'
import  Calender  from './component/calendar'
function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Pubg />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/rong" element={<Rong />} />
        <Route path="/emoji" element={<Emoji />} />
        <Route path='/terad' element={<Terad />} />
        <Route path='/Data1' element={<Data1 />} />
        <Route path='/Calender'element={<Calender/>}/>




      </Routes>
    </>
  )
}

export default App
