import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function DeleteUser({ HandleDelete, show, setShow}) {
  return (
      <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
     <Modal.Header closeButton>
          <Modal.Title>Tem certeza que deseja excluir definitivamente sua conta?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><p>Esta ação não poderá ser desfeita.</p> Todos os seus dados e suas notas serão apagadas e não poderão ser recuperadas.</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={() => {HandleDelete(); setShow(false)}}>
            Confirmar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}


export default DeleteUser;
