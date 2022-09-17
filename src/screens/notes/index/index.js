import React, { Fragment } from "react";

import { Navigate } from "react-router-dom";
import HeaderLogged from "../../../components/header_logged";

import { Column, Section, Title, Container } from "rbx";

import logoImage from "../../../assets/images/principal.jpg";

const Notes = () => {
  if (!localStorage.getItem("user")) {
    return (
      <Navigate
        to={{
          pathname: "/login"
        }}
      />
    );
  }

  return (
    <>
    <HeaderLogged/>
    <Fragment>
    <Section size="medium" className="notes">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
              Crie sua primeira nota agora mesmo!
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              Aqui você pode salvar as suas senhas, seus compromissos e suas datas importantes.
              <br />
              <br />
              Tendo tudo à mãos em qualquer lugar.<br /> Seja pelo computador, tablet ou celular.
            </Title>
            <a href="/notes" className="button is-outlined is-white is-large">
              <strong>Criar nota</strong>
            </a>
          </Column>
          <Column size={6} offset={1}>
          <img id="gadgets" src={logoImage} alt=""/>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
    </>
  );
};

export default Notes;
