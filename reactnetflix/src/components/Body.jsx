import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
const Body = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/browse' element={<Browse/>} />
      </Routes>
     
     </BrowserRouter>
  )
}

export default Body