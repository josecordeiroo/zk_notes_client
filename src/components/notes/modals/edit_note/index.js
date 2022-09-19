import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function EditNote({show, setShow}) {
  return (
      <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
     <Modal.Header closeButton>
          <Modal.Title>Editar Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título:</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Texto:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="success">
            Confirmar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}


export default EditNote;
