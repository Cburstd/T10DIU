import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import contacto from '../assets/contacto.jpg'

export const ContactoPage = () => {
    return (
        <div className='page'>
            <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
            <NavBar />
            <h2>Su caso es importante para nosotros</h2>
            <img src={contacto} height={200} alt='imgen de contacto' /><br />
            <Button variant='contained' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Llame a una sucursal</Button>
        </div>
    )
}

export default ContactoPage