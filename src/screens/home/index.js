import React, { Fragment } from "react";

import Header from "../../components/header";

import { Column, Section, Title, Container } from "rbx";

import "../../styles/home.scss";

import logoImage from "../../assets/images/principal.jpg";

import UsersService from "../../services/users";

const Home = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
              Crie suas notas e tenha em mãos onde estiver.
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              Aqui você pode salvar as suas senhas, seus compromissos e suas datas importantes.
              <br />
              <br />
              Tendo tudo à mãos em qualquer lugar.<br /> Seja pelo computador, tablet ou celular.
            </Title>
            <a  href="/notes" className="button is-outlined is-white is-large">
              <strong>Registre-se gratuitamente</strong>
            </a>
          </Column>
          <Column size={6} offset={1}>
          <img id="gadgets" src={logoImage} alt=""/>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default Home;
