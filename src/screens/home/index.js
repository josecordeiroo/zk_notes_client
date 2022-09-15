import React, { Fragment } from "react";

import Header from "../../components/header";

import { Column, Section, Title, Container } from "rbx";

import "../../styles/home.scss";

const Home = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="home">
      <Container>
        <Column.Group>
          <Column size={5}>
            <Title size={2} spaced className="has-text-white">
              Crie suas notas e tenha sempre a mão onde estiver
            </Title>
            <Title size={5} spaced className="has-text-light" subtitle>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
              <br />
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print.
            </Title>
            <a href="/" className="button is-outlined is-white is-large">
              <strong>Registre-se gratuitamente</strong>
            </a>
          </Column>
          <Column size={6} offset={1}>
          <img id="gadgets" src="https://images.pexels.com/photos/4300393/pexels-photo-4300393.png?cs=srgb&dl=pexels-dominika-roseclay-4300393.jpg&fm=jpg" alt=""/>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default Home;
