import React, { Fragment } from "react";

import Header from "../../../components/header";

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
                  <img
                    src="https://see.fontimg.com/api/renderfont4/eZlEp/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WmtOb3Rlcw/tourism-days.png"
                    alt=""
                    role="presentation"
                    width="112"
                    height="28"
                  />
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
