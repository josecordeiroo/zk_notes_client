import React, { Fragment } from "react";

import Header from "../../../components/header";
import RegisterForm from "../../../components/auth/register_form";

import { Column, Section, Title, Container, Card } from "rbx";

import "../../../styles/auth.scss";

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
                    src="https://see.fontimg.com/api/renderfont4/eZlEp/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WmtOb3Rlcw/tourism-days.png"
                    alt=""
                    // role="presentation"
                     width="170"
                  />
                  <p style={{color:"gray", textAlign: "center", paddingBottom: "20px"}}>Suas notas sempre na sua mão.</p>
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
