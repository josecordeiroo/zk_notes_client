import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Button, Container } from "rbx";

const Header = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/eZlEp/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WmtOb3Rlcw/tourism-days.png"
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
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
                &nbsp;
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
