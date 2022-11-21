import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import ReunionPage from '../pages/reuniones'
import SoonPage from '../pages/soontm'
import CrearNueva from '../pages/joints/crearnueva'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />}  />
        <Route path='/soontm' element={<SoonPage />} />
        <Route path='/reuniones' element={<ReunionPage />} />
        <Route path='/crearnueva' element={<CrearNueva />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
