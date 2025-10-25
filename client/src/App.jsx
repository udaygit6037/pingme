import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

const App = () => {
  return (
    <div className='bg-grey-500
    '>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>


      </Routes>
    </div>
  )
}

export default App
