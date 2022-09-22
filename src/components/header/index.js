import React from "react";

import { Link, Navigate } from "react-router-dom";

import { Navbar, Button, Container } from "rbx";

import logoImage from "../../assets/images/ZkNotes.png";

const Header = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <a href="/">
            <img
              src={logoImage}
              alt=""
              // role="presentation"
              // width="112"
              // height="28"
              style={{
                width: "110px",
              }}
            />
          </a>

          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item href="/">Sobre</Navbar.Item>
            <Navbar.Divider />
            <Navbar.Item href="/">Contato</Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Button.Group>
              <Link to="/register">
                <Button color="primary">
                  <strong>Criar conta</strong>
                </Button>
              </Link>
              <Link to="/login">
                <Button color="light">Entrar</Button>
              </Link>
            </Button.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
};

export default Header;
