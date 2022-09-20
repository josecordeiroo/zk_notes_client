import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function EditNote({ updateNote, title, setTitle, body, setBody, id, show, setShow }) {
 
  const HandleSubmit = () => {
    updateNote(id, {
      title: title,
      body: body
    });
    setShow(false);
    setTitle("")
    setBody("")
  };

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Texto:</Form.Label>
            <Form.Control
              onChange={(e) => setBody(e.target.value)}
              as="textarea"
              defaultValue={body}
              rows={10}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button onClick={() => HandleSubmit()} variant="success">
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditNote;
