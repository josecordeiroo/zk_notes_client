import React, { useState } from "react";
import { redirect } from "react-router-dom";

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
  faSignature
} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  return (
    <>
      <form>
        <Field>
          <Label>Nome:</Label>
          <Control iconLeft>
            <Input type="text" placeholder="Digite seu nome" />
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

        <Field>
          <Label>Gênero:</Label>
          <Control>
            <Select.Container fullwidth>
              <Select>
                <Select.Option value="dropdown">Masculino</Select.Option>
                <Select.Option value="options">Feminino</Select.Option>
              </Select>
            </Select.Container>
          </Control>
        </Field>

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
            <Button color="link">Criar cadastro</Button>
          </Control>
          {/* <Control>
            <Button text>Cancelar</Button>
          </Control> */}
        </Field>
      </form>
    </>
  );
};

export default RegisterForm;
