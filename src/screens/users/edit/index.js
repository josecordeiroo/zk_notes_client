import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";
import NotesServices from "../../../services/notes";

import HeaderLogged from "../../../components/header_logged";

import ChangePassword from "../../../components/notes/modals/change_password";
import DeleteUser from "../../../components/notes/modals/delete_user";

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
  Button,
  Container,
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

const UserEdit = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSucces] = useState(false);
  const [passwordSuccess, setPasswordSucces] = useState(false);
  const [id, setId] = useState("");
  const [editShow, setEditShow] = useState(false);
  const [editShowDelete, setEditShowDelete] = useState(false);

  async function fetchUser() {
    const response = await UsersService.index();
    setId(response.data._id);
    setName(response.data.name);
    setUserName(response.data.userName);
    setEmail(response.data.email);
    // setPassword(response.data.password);
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UsersService.put({
        _id: id,
        name: name,
        email: email,
        userName: userName,
      });
      setSucces(true);
    } catch (error) {
      setError(true);
    }
  };

  const HandleSubmitPassword = async (e) => {
    try {
      await UsersService.updatePassword(id, {
        password: password,
      });
      setPasswordSucces(true);
      setTimeout(() => {
        UsersService.logout();
        window.location.reload(false);
      }, 5000);
    } catch (error) {
      setError(true);
    }
  };

  const HandleDelete = async (e) => {
    try {
      await UsersService.delete(id);
      UsersService.logout();
      window.location.reload(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchUser();
  }, {});

  if (!localStorage.getItem("user")) {
    return (
      <Navigate
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <Container>
      <HeaderLogged />
      <Field kind="group" align="right">
        <h1>
          Alteração de dados <FontAwesomeIcon icon={faUser} />
        </h1>
      </Field>

      <Field kind="group" align="left">
        <Control>
          <a href="/notes">
            <p style={{ color: "gray" }} color="danger">
              Voltar
            </p>
          </a>
        </Control>
      </Field>
      <form onSubmit={HandleSubmit}>
        <Field>
          <Label>Nome:</Label>
          <Control iconLeft>
            <Input
              type="name"
              //   placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faSignature} />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label>Nome de Usuário:</Label>
          <Control iconLeft iconRight>
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              defaultValue=""
              placeholder="Nome de usuário"
              type="text"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faUser} />
            </Icon>
          </Control>
        </Field>

        <Field>
          <Label>E-mail:</Label>
          <Control iconLeft iconRight>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue=""
              placeholder="Digite seu e-mail"
              type="email"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
          </Control>
        </Field>

        <Field kind="group" align="right">
          <Control>
            <Button color="success">Atualizar cadastro</Button>
          </Control>
        </Field>
        {error && <Help color="danger">Não foi possível atualizar</Help>}
        {success && (
          <Help color="success">Cadastro atualizado com sucesso</Help>
        )}
        {passwordSuccess && (
          <Help color="success">
            Sua senha foi alterada. Você está sendo desconectado. Por favor,
            faça o login novamente...
          </Help>
        )}
      </form>
      <br />
      <Field>
        <Control>
          <Button onClick={() => setEditShow(true)}>Alterar senha</Button>
        </Control>
      </Field>
      <Field>
        <Control>
          <Button color="danger" onClick={() => setEditShowDelete(true)}>
            Excluir conta
          </Button>
        </Control>
      </Field>

      <DeleteUser
        HandleDelete={HandleDelete}
        show={editShowDelete}
        setShow={setEditShowDelete}
      />

      <ChangePassword
        HandleSubmitPassword={HandleSubmitPassword}
        password={password}
        setPassword={setPassword}
        show={editShow}
        setShow={setEditShow}
      />
    </Container>
  );
};

export default UserEdit;
