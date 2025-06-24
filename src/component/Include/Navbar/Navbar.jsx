import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Navbar.Brand as={Link} to="/">
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
              <NavDropdown.Item as={Link} to="/services/mobileapp">Mobile App Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/cloudservice">Cloud Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/ai">Artificial intelligence</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/migration">Migration Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/devops">DevOps Solutions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/micro">Microservices Architecture</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Technology" id="technology-dropdown" >
              <NavDropdown.Item as={Link} to="/technology/react">React</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technology/vue">Vue</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/casestudies">Case Studies</Nav.Link>
            <Nav.Link as={Link} to="/career">Career</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
          </Nav>

          {/* CONTACT BUTTON RIGHT */}
          <div className="d-none d-lg-block">
            <Button as={Link} to="/contact" className="ms-3 ckf-button-dark">
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
              <NavDropdown.Item as={Link} to="/services/mobileapp">Mobile App Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/cloudservice">Cloud Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/ai">Artificial intelligence</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/migration">Migration Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/devops">DevOps Solutions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/micro">Microservices Architecture</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Technology" id="offcanvas-technology-dropdown">
              <NavDropdown.Item as={Link} to="/technology/react">React</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technology/vue">Vue</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/casestudies">Case Studies</Nav.Link>
            <Nav.Link as={Link} to="/career">Career</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Button as={Link} to="/contact" variant="warning" className="mt-3">
              Contact Us
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
// Removed duplicate export default statement
