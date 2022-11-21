import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import SideNav from '../components/naipes'
import { MuiBreadcrumbs } from '../components/breadcrumbs'

export const SoonPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Título de la empresa</h1>
      <NavBar />
      <MuiBreadcrumbs/>
      <h2>Trabajo en proceso</h2>
      <SideNav />
      <img src={pronto} height={200} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default SoonPage