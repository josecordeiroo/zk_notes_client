import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function ShowNote({note, show, setShow}) {
  return (
      <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
    >
     <Modal.Header closeButton>
          <Modal.Title>{note.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{padding: "10px"}}>{note.body}</p>
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


export default ShowNote;
