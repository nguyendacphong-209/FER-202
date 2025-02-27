import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" className="header-navbar">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#" className="d-flex align-items-center">
              <img
                src="https://www.quizappen.no/wp-content/uploads/2020/03/quizapp_logo.png"
                alt="Logo"
                className="logo-img me-2"
              />
              Quiz App
            </Navbar.Brand>
            <div className="d-flex align-items-center">
              <Button variant="outline-light" className="me-3">Home</Button>
              <span className="text-light">Đắc Phong</span>
            </div>
          </Container>
        </Navbar>
      );
}

export default Header;
