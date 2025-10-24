import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/login.jsx'
import Signup from './Components/signup.jsx'
import Dashboard from './Pages/dashboard.jsx'



function App() {


  return (
    <>
       <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
    </>
  )
}

export default App
