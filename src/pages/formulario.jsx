import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';

export const FormularioPage = () => {
    return(
        <div className='page'>
            <h1 className='page__title'>Crear Reunión</h1>
            {/* formulario */}
            <div>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="fecha">
                        <Form.Label column sm="2">Fecha seleccionada</Form.Label>
                        <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="29 de noviembre de 2022" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="nombreReunion">
                        <Form.Label column sm="2">Nombre de la reunión</Form.Label>
                        <Col sm="4">
                            <Form.Control type='textarea' />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="temas">
                        <Form.Label column sm="2">Temas a tratar</Form.Label>
                        <Col sm="10">
                            <Form.Control type="textarea" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="participantes">
                        <Form.Label column sm="2">Participantes</Form.Label>
                        <Col sm="10">
                            <Form.Control type="textareaa" />
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            {/* botones */}
            <div style={formStyle}> 
                <Button variant='danger' color='error' size='lg' href='/horario'>Cancelar</Button>
                <span>&nbsp;</span>
                <Button variant='primary' size='lg' href='/verificacion'>Crear</Button>
            </div>
        </div>
    )
}

const formStyle={
    diplay: "inline-block",
    // width: "750px",
    position: "relative",
    top: "0",
    right: "0",
    textAlign: "right",
};

export default FormularioPage