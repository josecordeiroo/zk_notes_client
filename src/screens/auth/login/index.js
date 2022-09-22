import React, { Fragment } from "react";

import Header from "../../../components/header";
import RegisterForm from "../../../components/auth/login_form";

import { Column, Section, Title, Container, Card } from "rbx";

import "../../../styles/auth.scss";

import logoImage from "../../../assets/images/ZkNotes.png";

const Register = () => (
  <Fragment>
    <Fragment>
      <Header />
      <Section size="small" className="auth">
        <Container>
          <Column.Group centered>
            <Column size={3}>
              <Card className="card">
                <Card.Content className="cardContent">
                  <div className="logoZk">
                    <img src={logoImage} alt="" />
                  </div>

                  <p
                    style={{
                      color: "gray",
                      textAlign: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    Acesse sua conta
                  </p>
                  <RegisterForm />
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
