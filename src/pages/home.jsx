import React from 'react'

import NavBar from '../components/nav_bar'
import Logocomp from '../assets/HHMlogo.png'
import SideNav from '../components/naipes'
import { MuiBreadcrumbs } from '../components/breadcrumbs'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin and McGill</h1>
      <NavBar />
      <MuiBreadcrumbs/>
      <h2>Página de Inicio</h2>
      <SideNav />
      <img src={Logocomp} height={300} alt='logo usm' /><br />
      <div>Texto de ejemplo</div>
      
    </div>
  )
}

export default HomePage
