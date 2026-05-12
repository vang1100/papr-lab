import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import ProtectedRoute from './ProtectedRoute'
import LogIn from './LogIn/LogIn'
import LoginForm from './LoginForm/LoginForm'
import Dashboard from './Dashboard/Dashboard';


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>

   
      <div>

   <Routes>
        <Route 
          path="/login" 
          element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        />
      </Routes>
      



      
      
      </div>
      
    </>
  )
}

export default App
