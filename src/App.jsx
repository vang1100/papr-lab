import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './LogIn/LogIn'
import LoginForm from './LoginForm/LoginForm'
import Dashboard from './Dashboard/Dashboard';


function App() {


  return (
    <>

   
      <div>

        <Routes>
          <Route path="/login" 
          element={<LogIn />} />
          <Route
          path="/dashboard"
          element={<Dashboard/>}/>
        </Routes>
      



      
      
      </div>
      
    </>
  )
}

export default App
