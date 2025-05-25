import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Offcanvas } from 'react-bootstrap';
import Logo from '../../../assets/images/logo.svg'

export default function HNavbar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

  return (
    <>
    <Navbar expand="lg" className="navbar-dark ckf-dark-bg py-3">
        <Container>
          {/* LOGO LEFT */}
          <Navbar.Brand href="#">
            <img
              src={Logo} // replace with your logo path
              alt="CloudKodeForm"
              height="50"
              className="d-inline-block align-top"
            />
            {' '}
          </Navbar.Brand>

          {/* HAMBURGER BUTTON */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

          {/* CENTER MENU */}
          <Nav className="mx-auto d-none d-lg-flex" id='navbar-ckf'>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Technology" id="technology-dropdown">
              <NavDropdown.Item href="#tech1">Tech 1</NavDropdown.Item>
              <NavDropdown.Item href="#tech2">Tech 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#casestudies">Case Studies</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>

          {/* CONTACT BUTTON RIGHT */}
          <div className="d-none d-lg-block">
            <Button href="#contact" className="ms-3 ckf-button-dark">
              Contact Us
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* OFFCANVAS SIDEBAR MENU */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavDropdown title="Services" id="offcanvas-services-dropdown">
              <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Technology" id="offcanvas-technology-dropdown">
              <NavDropdown.Item href="#tech1">Tech 1</NavDropdown.Item>
              <NavDropdown.Item href="#tech2">Tech 2</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#casestudies">Case Studies</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Button href="#contact" variant="warning" className="mt-3">
              Contact Us
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
// Removed duplicate export default statement
