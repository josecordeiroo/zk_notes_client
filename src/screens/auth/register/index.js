import React, { Fragment } from "react";

import Header from "../../../components/header";
import RegisterForm from "../../../components/auth/register_form";

import { Column, Section, Title, Container, Card } from "rbx";

import "../../../styles/auth.scss";

import logoImage from "../../../assets/images/ZkNotes.png";

const Register = () => (
  <>
    <Header />
    <Section size="small" className="auth">
        <Column.Group centered>
          <Column size={3}>
            <Card className="card">
              <Card.Content>
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
                  Crie sua conta gratuitamente
                </p>
                <RegisterForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
    </Section>
  </>
);

export default Register;
