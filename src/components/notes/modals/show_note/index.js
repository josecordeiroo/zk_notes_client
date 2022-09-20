import React from 'react';
import { Button, Modal, Form } from "react-bootstrap";

function ShowNote({title, body, show, setShow}) {
  return (
      <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
    >
     <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{padding: "10px"}}>{body}</p>
        </Modal.Body>
    </Modal>
  );
}

export default ShowNote;
