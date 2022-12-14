import React, { useState, useEffect } from "react";

import { Link, Navigate } from "react-router-dom";

import { Navbar, Button, Container, Icon } from "rbx";

import logoImage from "../../assets/images/ZkNotes.png";

import UsersService from "../../services/users";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const HeaderLogged = (props) => {
  const [name, setName] = useState("");

  async function fetchUser() {
    const response = await UsersService.index();
    setName(response.data.name);
  }

  useEffect(() => {
    fetchUser();
  }, {});

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
                width: "110px",
              }}
            />
          </a>

          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment
            as="div"
            className="navbar-item navbar-start"
            align="start"
          ></Navbar.Segment>
          <Navbar.Segment align="start"></Navbar.Segment>

          <Navbar.Segment align="end">
            <Button.Group>
              <Navbar.Item dropdown>
                <Navbar.Link>Bem vindo, {name}</Navbar.Link>

                <Navbar.Dropdown>
                <Link to="/notes">
                    <Navbar.Item>Suas notas</Navbar.Item>
                  </Link>
                  <Link to="/users/edit">
                    <Navbar.Item>Editar seus dados</Navbar.Item>
                  </Link>
                  <Link to="/">
                    <Navbar.Item>Página Inicial do Site</Navbar.Item>
                  </Link>
                  <Navbar.Divider />
                  <Link to="/suporte">
                    <Navbar.Item>Suporte</Navbar.Item>
                  </Link>
                  <Link onClick={() => UsersService.logout()}>
                    <Navbar.Item>Sair</Navbar.Item>
                  </Link>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Button.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
};

export default HeaderLogged;
