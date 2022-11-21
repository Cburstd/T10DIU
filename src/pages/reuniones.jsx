import React from 'react'
import { Button, Box } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import SideNav from '../components/naipes'
import { MuiBreadcrumbs } from '../components/breadcrumbs'

export const ReunionPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin and McGill</h1>
      <NavBar />
      <MuiBreadcrumbs/>
      <h2>Mis reuniones</h2>
      <SideNav />
      <img src={pronto} height={200} alt='logo usm' /><br />
      <Box textAlignt='center'>
      <a href='./crearnueva'>
      <Button variant='contained'>Crear una nueva reunión</Button>
      </a>
      </Box>
      <Button variant='contained'>Calendario</Button>
      <div className='contentContainer padding'>
        <div>Agenda tu reunion</div>
        <div clas>
            <div className='mydiv'>ete</div>
            <div className='mydiv'>eta</div>
            <div className='mydiv'>etu</div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
            <div className='mydiv'></div>
        </div>
      </div>
    </div> 
    
    
  );
};
//Style

export default ReunionPage