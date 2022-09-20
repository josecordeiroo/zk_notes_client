import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function DeleteNote({id, deleteNote, show, setShow}) {
  return (
      <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
     <Modal.Header closeButton>
          <Modal.Title>Tem certeza que deseja excluir a nota?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Esta ação não poderá ser desfeita.</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={() => {deleteNote(id); setShow(false)}}>
            Confirmar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}


export default DeleteNote;
