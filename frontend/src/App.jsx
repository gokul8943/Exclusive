import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import SignupPage from './pages/SignUpPage'
import global from './styles/global.module.scss'

const App = () => {
  return (
    <div>
      <div className={global.container}>
        <Navbar />
      </div>
      <div className={global.container_part}>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
