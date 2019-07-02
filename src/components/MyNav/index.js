import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import "./style.css";

function MyNav(props) {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
      <Nav.Item >
        Message Win or Lose
      </Nav.Item>
      <Nav.Item >
          Score:{props.score} Top Score: {props.topScore}
      </Nav.Item>
    </Navbar>
  );
}

export default MyNav;
