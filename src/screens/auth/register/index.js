import React, { Fragment } from "react";

import Header from "../../../components/header";
import RegisterForm from "../../../components/auth/register_form";

import { Column, Section, Title, Container, Card } from "rbx";

import "../../../styles/auth.scss";

import logoImage from '../../../assets/images/ZkNotes.png'

const Register = () => (
  <Fragment>
    <Fragment>
      <Header />
      <Section size="medium" className="auth">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card className="card">
                <Card.Content>
                  <img className="imagem"
                    src={logoImage}
                    alt=""
                    // role="presentation"
                     width="170"
                  />
                  <p style={{color:"gray", textAlign: "center", paddingBottom: "20px"}}>Crie sua conta gratuitamente</p>
                  <RegisterForm/>
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Fragment>
  </Fragment>
);

export default Register;
