import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactoPage from '../pages/contacto'
import FormularioPage from '../pages/formulario'


import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import ReunionPage from '../pages/reuniones'
import SoonPage from '../pages/soontm'
import VerificacionPage from '../pages/verificacion'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />}  />
        <Route path='/soontm' element={<SoonPage />} />
        <Route path='/reuniones' element={<ReunionPage />} />
        <Route path='/formulario' element={<FormularioPage />} />
        <Route path='/verificacion' element={<VerificacionPage />} />
        <Route path='/contacto' element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
