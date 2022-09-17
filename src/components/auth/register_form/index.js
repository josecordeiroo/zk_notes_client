import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

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

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.register({
        name: name,
        email: email,
        userName: userName,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin) return <Navigate to={{ pathname: "/login" }} />;

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <Field>
          <Label>Nome:</Label>
          <Control iconLeft>
            <Input
              type="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              //   color="success"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              defaultValue=""
              placeholder="Nome de usuário"
              type="text"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faUser} />
            </Icon>
            {/* <Icon size="small" align="right">
              <FontAwesomeIcon icon={faCheck} />
            </Icon> */}
          </Control>
          {/* <Help color="success">Este nome de usuário está disponível</Help> */}
        </Field>

        <Field>
          <Label>E-mail:</Label>
          <Control iconLeft iconRight>
            <Input
              //   color="danger"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite seu e-mail"
              type="email"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>
            {/* <Icon size="small" align="right">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </Icon> */}
          </Control>
          {/* <Help color="danger">This email is invalid</Help> */}
        </Field>

        <Field>
          <Label>Senha:</Label>
          <Control iconLeft iconRight>
            <Input
              //   color="danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite sua senha"
              type="text"
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faLock} />
            </Icon>
            {/* <Icon size="small" align="right">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </Icon> */}
          </Control>
          {/* <Help color="danger">This email is invalid</Help> */}
        </Field>

        {/* <Field>
          <Label>Gênero:</Label>
          <Control>
            <Select.Container fullwidth>
              <Select>
                <Select.Option value="dropdown">Masculino</Select.Option>
                <Select.Option value="options">Feminino</Select.Option>
              </Select>
            </Select.Container>
          </Control>
        </Field> */}

        <Field kind="group" align="centered">
          <Control>
            <Label>
              <Checkbox /> Eu aceito os <a href="#terms">termos de uso</a>.
            </Label>
          </Control>
        </Field>

        {/* <Field>
          <Control>
            {['Yes', 'No'].map(value => (
              <Label key={value}>
                <Radio name="question" value={value} /> {value}
              </Label>
            ))}
          </Control>
        </Field> */}

        <Field kind="group" align="centered">
          <Control>
            <Button color="link">Cadastrar</Button>
          </Control>
          {/* <Control>
            <Button text>Cancelar</Button>
          </Control> */}
        </Field>
        {error && <Help color="danger">E-mail ou senha inválidos</Help>}
      </form>
      <br />
      <Field kind="group" align="centered">
        <Control align="center">
          <a href="/login">
            <Button text>Deseja fazer login?</Button>
          </a>
        </Control>
      </Field>
    </>
  );
};

export default RegisterForm;
