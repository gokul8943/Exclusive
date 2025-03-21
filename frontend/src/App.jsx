import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import SignupPage from './pages/SignUpPage'
import global from './styles/global.module.scss'
import ContactPage from './pages/ContactPage'
import Login from './pages/Login'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <div className={global.container}>
        <Navbar />
      </div>
      <div className={global.container_part}>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
     
        </Routes>
      </div>
    </div>
  )
}

export default App
