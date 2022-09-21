import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";

import { Field, Label, Control, Input, Help, Icon, Button } from "rbx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordText, setPasswordText] = useState("Mostrar Senha")

  

  const togglePassword = () => {
    setPasswordShown(!passwordShown);

    passwordShown ? setPasswordText("Mostrar Senha") : setPasswordText("Esconder Senha")
    
  };

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.login({
        email: email,
        password: password,
      });
      setRedirectToNotes(true)
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToNotes) return <Navigate to={{ pathname: "/notes" }} />;

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <Field>
          <Label>E-mail:</Label>
          <Control iconLeft iconRight>
            <Input
              //   color="success"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite seu E-mail"
              type="email"
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
          <Label>Senha:</Label>
          <Control iconLeft>
            <Input
              //   color="danger"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              defaultValue=""
              placeholder="Digite sua Senha"
              type={passwordShown ? "text" : "password"}
            />
            <Icon size="small" align="left">
              <FontAwesomeIcon icon={faLock} />
            </Icon>
            
            
          </Control>
          
          
        </Field>
        <div style={{cursor: "pointer", textAlign: "right", marginBottom: "15px", fontSize: "13px"}} onClick={() => togglePassword()}>{passwordText}</div>

        <Field kind="group" align="centered">
          <Control>
            <Button color="link">Entrar</Button>
          </Control>
        </Field>

        {error && <Help color="danger">E-mail ou senha inválidos</Help>}
      </form><br/>
      <Field kind="group" align="centered">
        <Control align="center">
          <a href="/register">
            <Button text>Ainda não tem uma conta?</Button>
          </a>
        </Control>
      </Field>
    </>
  );
};

export default LoginForm;
