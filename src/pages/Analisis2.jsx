import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage2 = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin and McGill</h1>
      <NavBar />
      <h2>Analisis de reunión</h2>
      <div className='anal'>
        <div>
            <ul>
                <li><b>Nombre reunión:</b></li>
                <li><b>Fecha reunión:</b></li>
                <li><b>Hora reunión:</b></li>
                <li><b>Duración:</b></li>
                <li><b>Temas tratados:</b></li>
            </ul>
        </div>
        <div>
            <div className='a'>Resumen mes</div>
            <div className='a'>21/11/2022</div>
            <div className='a'>14 hrs. 00 mín.</div>
            <div className='a'>00 hrs. 40 mín.</div>
            <div className='a'>Revisión, Proyectos, Nuevos Trabajadores</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Juan Perez</li>
                <li>Walter White</li>
                <li>Pedro Parra</li>
                <li>Rosa Vasquez</li>
                <li>Susana Horia</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 14 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 14 hrs. 01 min. </div>
            <div className='a'> <b>Hora conexión:</b> 14 hrs. 03 min. </div>
            <div className='a'> <b>Hora conexión:</b> 14 hrs. 04 min. </div>
            <div className='a'> <b>Hora conexión:</b> 14 hrs. 08 min. </div>
            <div className='a'> <b>Hora conexión:</b> 14 hrs. 09 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci placeat inventore voluptate sunt nisi hic obcaecati, amet minima vitae debitis in ea harum recusandae voluptates quia quaerat? At blanditiis ad ea sapiente, a reprehenderit voluptatum! Vero iusto nostrum placeat architecto assumenda rerum et! Optio modi repudiandae, deleniti et vitae perspiciatis odit dolorem maxime praesentium, facere iure, tempora repellendus. Libero harum corrupti eius doloremque earum.
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage2