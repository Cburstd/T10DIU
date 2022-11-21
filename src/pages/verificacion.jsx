import React from 'react'
import { Button } from 'react-bootstrap'

export const VerificacionPage = () => {
    return(
    <div className='page'>
        <h1>Reunión creada!!!</h1>
        <div>
            <Button variant='primary' size='lg' href='/'>Volver a inicio</Button>
        </div>
    </div>
    )    
}

export default VerificacionPage