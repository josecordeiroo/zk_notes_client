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
                width: "130px",
                margin: "10px 10px 0 20px",
              }}
            />
          </a>

          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item href="/">Início</Navbar.Item>
            <Navbar.Item dropdown>
              <Navbar.Link>Mais</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>Sobre</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Contato</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
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
