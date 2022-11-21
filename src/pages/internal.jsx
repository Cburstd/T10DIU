import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/saul.png'
import SideNav from '../components/naipes'
import { MuiBreadcrumbs } from '../components/breadcrumbs'

export const InternalPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin and McGill</h1>
      <NavBar />
      <MuiBreadcrumbs/>
      <h2>Página Interna</h2>
      <SideNav />
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default InternalPage
