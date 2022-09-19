import { Icon, Title } from "rbx";
import React, { Fragment, useState } from "react";
import Moment from "moment";

import { Modal, Button,  Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";

import Dialog from "../dialog";

const ListNotes = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    ;
  };

  return (
    <>
      <div className="headerNotes">
        <div className="headerTexts">
          <h1>Seja bem vindo as suas notas, Zeca</h1>
          {props.notes.length == 0 ? (
            <p size={6}>Você não possui notas ainda. Clique em criar nota.</p>
          ) : props.notes.length == 1 ? (
            <p size={6}>{props.notes.length} nota criada até o momento.</p>
          ) : (
            <p size={6}>{props.notes.length} notas criadas até o momento.</p>
          )}
        </div>
        <button
          state="active"
          color="custom-purple"
          outlined
          size="small"
          onClick={() => props.createNote()}
        >
          Criar nota
        </button>
      </div>
      <div className="boxNotes">
        {props.notes.map((item, key) => (
          <div className="boxNote" key={key}>
            <div className="boxTop">
              <button onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faFilePen} color="success" />
              </button>
              <button onClick={() => props.deleteNote(item._id)}>
                <FontAwesomeIcon icon={faTrash} color="red" />
              </button>
            </div>
            <div className="boxInfos">
              <Title as="p">{item.title}</Title>
              {item.body.length >= 30 ? (
                <p>{item.body.substring(0, 200)}... (clique para ver mais)</p>
              ) : (
                <p>{item.body}</p>
              )}
            </div>
          </div>
        ))}
      </div>

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
    </>
  );
};

export default ListNotes;
