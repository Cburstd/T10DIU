import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'

export const SoonPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Título de la empresa</h1>
      <NavBar />
      <h2>Trabajo en proceso</h2>
      <img src={pronto} height={200} alt='logo usm' /><br />
      <Button variant='contained' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Material UI Button</Button>
    </div>
  )
}

export default SoonPage