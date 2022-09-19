import React from 'react';
import { Button, Modal } from "react-bootstrap";

function Dialog(show, setShow) {
  return (
    <>
      <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Título
        </Modal.Title>
        
      </Modal.Header>
      <Modal.Body>Filho</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button
          variant="success"
          onClick={() => setShow(false)}
        >
          Label
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}


export default Dialog;
