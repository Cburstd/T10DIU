import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/saul.png'

export const InternalPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Título de la empresa</h1>
      <NavBar />
      <h2>Página Interna</h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default InternalPage
