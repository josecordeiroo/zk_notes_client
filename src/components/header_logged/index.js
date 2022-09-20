import React from "react";

import { Link, Navigate } from "react-router-dom";

import { Navbar, Button, Container, Icon } from "rbx";

import logoImage from "../../assets/images/ZkNotes.png";

import UsersService from "../../services/users";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const HeaderLogged = (props) => {
  return (
      <Navbar >
        <Navbar.Brand >
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
          <Navbar.Segment
            as="div"
            className="navbar-item navbar-start"
            align="start"
          >
          </Navbar.Segment>
          <Navbar.Segment align="start">
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Button.Group>
            <Navbar.Item dropdown>
              <Navbar.Link>Bem vindo, Zeca Cordeiro</Navbar.Link>

              <Navbar.Dropdown>
                <Navbar.Item>Editar seus dados</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item>Suporte</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
              &nbsp;&nbsp;&nbsp;
              {/* <Link to="/login">
                <Button onClick={() => UsersService.logout()} color="danger">
                  <strong>Sair</strong>
                </Button>
              </Link> */}
            </Button.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
  );
};

export default HeaderLogged;
