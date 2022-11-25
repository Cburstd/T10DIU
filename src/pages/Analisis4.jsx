import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage4 = () => {
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
            <div className='a'>Practicas</div>
            <div className='a'>05/11/2022</div>
            <div className='a'>11 hrs.  00 mín.</div>
            <div className='a'>01 hrs.  57 mín.</div>
            <div className='a'>Practicas, Estudiantes, Recursos Humanos, Proyecto</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Susana Horia</li>
                <li>Pedro Parra</li>
                <li>Mario Neta</li>
                <li>Elvis tek</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 11 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 11 hrs. 01 min. </div>
            <div className='a'> <b>Hora conexión:</b> 11 hrs. 03 min. </div>
            <div className='a'> <b>Hora conexión:</b> 11 hrs. 04 min. </div>
            <div className='a'> <b>Hora conexión:</b> 11 hrs. 06 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente culpa modi! Beatae numquam est assumenda vero sit? Quas expedita nostrum libero perspiciatis optio inventore iure fugiat, architecto nobis! Aperiam minus earum atque! Fugit accusamus voluptatibus doloribus excepturi architecto? Fuga magni cupiditate veniam velit itaque vel et ullam ea, error exercitationem adipisci maiores ipsum? Repudiandae laborum repellat temporibus, asperiores voluptas, libero excepturi iure dolorem blanditiis odit optio reiciendis consequatur in.
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage4