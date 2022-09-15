import React from "react";

import { Navbar, Button } from "rbx";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item href="#">
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
          <Navbar.Item>Início</Navbar.Item>
          <Navbar.Item>Sobre</Navbar.Item>

          <Navbar.Item dropdown>
            <Navbar.Link>Mais</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item>About</Navbar.Item>
              <Navbar.Item>Jobs</Navbar.Item>
              <Navbar.Item>Contact</Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item>Report an issue</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Segment>

        <Navbar.Segment align="end">
          <Navbar.Item>
            <Button.Group>
              <Button color="primary">
                <strong>Criar conta</strong>
              </Button>
              <Button color="light">Entrar</Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Header;
