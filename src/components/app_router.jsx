import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import SoonPage from '../pages/soontm'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />}  />
        /*<Route path='/soontm' element={<SoonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
