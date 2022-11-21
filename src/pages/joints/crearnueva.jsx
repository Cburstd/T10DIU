import React from 'react'


import NavBar from '../../components/nav_bar'
import LogoUSM from '../../assets/saul.png'
import Calendario from '../../assets/ejemplo.png'
import SideNav from '../../components/naipes'
import { MuiBreadcrumbs } from '../../components/breadcrumbs'

export const CrearNueva = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin and McGill</h1>
      <NavBar />
      <MuiBreadcrumbs/>
      <h2>Página Interna</h2>
      <SideNav />
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <div>Aqui debe ir el calendario </div>
      
      <img src={Calendario} height={100} alt='logo usm' /><br />
      <div>Aqui debe ir el menú de agendado</div>
    </div>
  )
}

export default CrearNueva