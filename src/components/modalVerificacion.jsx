import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalVerificacion = ({ show, handleClose }) =>{    
    return(
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header>
                <Modal.Title>Crear reunión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                La reunión ha sido creada exitosamente
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" href='/'>Volver a inicio</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalVerificacion