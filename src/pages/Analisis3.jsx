import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage3 = () => {
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
            <div className='a'>Retroalimentación proyecto</div>
            <div className='a'>12/11/2022</div>
            <div className='a'>09 hrs. 00 mín.</div>
            <div className='a'>01 hrs. 30 mín.</div>
            <div className='a'>Proyectos, Fallas, Mockups, Testing</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Walter White</li>
                <li>Pedro Parra</li>
                <li>Rosa Vasquez</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 02 min. </div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 04 min. </div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 05 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis, unde vel accusantium maxime, atque quod aperiam minima doloremque iure, doloribus tempore cumque sapiente facere nostrum. Illum suscipit autem inventore neque hic exercitationem eum fugiat nihil, atque, reiciendis assumenda voluptatem unde magni a quaerat, esse dicta cupiditate provident quia aliquid placeat? Cum aperiam nostrum mollitia voluptatum. Tempore vel hic molestiae, aliquam eaque alias ducimus, explicabo laboriosam sunt veniam eos perferendis voluptas culpa! Qui earum dicta incidunt dolores tempore expedita dolorem atque autem, et sapiente consequuntur ad sequi harum id perspiciatis maiores ea rerum minima nesciunt sed velit doloremque. Autem laboriosam officia suscipit ducimus, nulla harum fuga cumque voluptas maiores voluptate in sint aliquid provident at sequi et? Alias, animi quia!
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage3