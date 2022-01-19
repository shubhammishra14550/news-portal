import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#bulletin">News Express</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#bulletin">Bulletin</Nav.Link>
          <Nav.Link href="#addNews">Add News</Nav.Link>
          <Nav.Link href="#filterNews">Filter News</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
