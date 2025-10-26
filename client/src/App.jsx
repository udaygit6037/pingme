import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import './index.css'

const App = () => {
  return (
    <div className='bg-[url("./src/assets/bgImage.svg")] bg-cover bg-no-repeat bg-center min-h-screen'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<div className="text-center text-red-500 mt-10">404 - Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App