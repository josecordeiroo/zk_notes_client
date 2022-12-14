import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

import {
  Field,
  Label,
  Control,
  Input,
  Help,
  Select,
  Textarea,
  Icon,
  Checkbox,
  Radio,
} from "rbx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCheck,
  faEnvelope,
  faExclamationTriangle,
  faLock,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

import UsersService from "../../../../services/users";

function ChangePassword({ HandleSubmitPassword, password, setPassword, show, setShow }) {
  
  const handleSubmit = () => {
    HandleSubmitPassword()
    setShow(false)
    setPassword(" ")
  }
  
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Digite sua nova senha:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Field>
          <Label>Senha:</Label>
          <Control iconLeft iconRight>
            <Input
              //   color="danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite sua nova senha"
              type="text"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faLock} />
            </Icon>
          </Control>
        </Field>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Cancelar
        </Button>
        <Button onClick={() => handleSubmit()} variant="success">Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangePassword;
