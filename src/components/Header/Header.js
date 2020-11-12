import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "rgb(14,54,90)" }} variant="dark">
      <Container>
        <Navbar.Brand>News Cafe</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
