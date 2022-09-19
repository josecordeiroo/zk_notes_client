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
          {note.body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShow(false)}>
            Fechar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}


export default ShowNote;
