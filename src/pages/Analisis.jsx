import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage = () => {
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
            <div className='a'>Analisis de datos</div>
            <div className='a'>23/11/2022</div>
            <div className='a'>12 hrs. 00 mín.</div>
            <div className='a'>01 hrs. 20 mín.</div>
            <div className='a'>Datos, Planillas, Excel, Organización</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Juan Perez</li>
                <li>Pedro Parra</li>
                <li>Rosa Vasquez</li>
                <li>Susana Horia</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 01 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 02 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 05 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat cupiditate fuga asperiores excepturi vero aliquam quidem dolore? Exercitationem et laudantium natus optio accusamus dolor earum ut id ea aspernatur. Impedit, fugiat nostrum ipsum fugit voluptatum enim. Possimus, magni eaque recusandae fugiat ex, modi accusamus beatae incidunt veritatis nostrum saepe harum commodi. Dignissimos explicabo dicta dolorum, aliquam perspiciatis placeat similique iure reiciendis. Perferendis iusto obcaecati quam laboriosam ullam, accusantium adipisci tempora voluptatem quasi illum totam est quibusdam quis? Dolorem, tempore.
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage