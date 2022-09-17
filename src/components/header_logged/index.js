import React from "react";

import { Link, Navigate } from "react-router-dom";

import { Navbar, Button, Container } from "rbx";

import logoImage from "../../assets/images/ZkNotes.png";

import UsersService from "../../services/users";

const HeaderLogged = (props) => {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <a href="/notes">
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
        <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
            <Navbar.Item as="div">
              <Button
                className="open-button"
                outlined
                onClick={() => props.setIsOpen(true)}
              >
                Clique aqui
              </Button>
            </Navbar.Item>
          </Navbar.Segment>
          <Navbar.Segment align="start">
            <Navbar.Item dropdown>
              <Navbar.Link>Bem vindo, Zeca Cordeiro</Navbar.Link>

              <Navbar.Dropdown>
                <Navbar.Item>Editar seus dados</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Sair</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Button.Group>
              <Link to="/">
                <Button color="light">Minha Conta</Button>
              </Link>
              &nbsp;
              <Link to="/login">
                <Button onClick={() => UsersService.logout()} color="danger">
                  <strong>Sair</strong>
                </Button>
              </Link>
            </Button.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
};

export default HeaderLogged;