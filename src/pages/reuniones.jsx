import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'

export const ReunionPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin and McGill</h1>
      <NavBar />
      <h2>Trabajo en proceso</h2>
      <img src={pronto} height={200} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default ReunionPage