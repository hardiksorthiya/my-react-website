import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import men from "../../../assets/images/men.svg";
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';


export default function ContactSection() {
  return (
    <>
    <Navbar />
    <section className="contact-info-map-section bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-2">CONTACT US</h2>
        <p className="text-center text-muted mb-5">
          We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.
        </p>

        <Row className="gx-5">
          {/* Left Info Box */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="bg-dark text-white p-4 rounded h-100">
              <div className="mb-4">
                <FaMapMarkerAlt className="me-2" />
                <strong>ADDRESS:</strong>
                <p className="ms-4 mb-0">104, Crystal Avenue, Kathodara, Surat, Gujarat 395006, India</p>
              </div>

              <div className="mb-4">
                <FaEnvelope className="me-2" />
                <strong>EMAIL:</strong>
                <p className="ms-4 mb-0">
                  <a href="mailto:info@cloudkodeform.com" className="text-white text-decoration-none">info@cloudkodeform.com</a>
                </p>
              </div>

              <div className="mb-4">
                <FaPhoneAlt className="me-2" />
                <strong>CALL US:</strong>
                <p className="ms-4 mb-0">+91 96507 92424</p>
              </div>

              <div>
                <strong>FOLLOW US:</strong>
                <div className="d-flex gap-3 ms-2 mt-2">
                  <a href="#" className="text-white"><FaFacebookF /></a>
                  <a href="#" className="text-white"><FaTwitter /></a>
                  <a href="#" className="text-white"><FaInstagram /></a>
                  <a href="#" className="text-white"><FaPinterestP /></a>
                </div>
              </div>
            </div>
          </Col>

          {/* Google Map */}
          <Col lg={6}>
            <div className="rounded overflow-hidden shadow-sm h-100">
              <iframe
                title="CloudKodeForm Location"
                src="https://maps.google.com/maps?q=104,%20Crystal%20Avenue,%20Kathodara,%20Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          {/* Form Side */}
          <Col lg={6} md={12} className="mb-4">
          <h2 className="left-about-content-home">
              Let’s Talk About Your Next Big Move
              <span className="orange-dot">.</span>
            </h2>
            <p className="right-about-content-home">
             From strategy to execution, we help organizations unlock value through technology.
Tell us what you need — we’re listening and ready to deliver.</p>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Reason for inquiry *</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message *</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      I agree to receive communications from Cloudkodeform. <br />
                      <small>You can unsubscribe at any time. Check our <a href="/">Privacy</a>.</small>
                    </>
                  }
                />
              </Form.Group>
              <Button className="orange-button" type="submit">SEND MESSAGE</Button>
            </Form>
          </Col>

          {/* Image Side */}
          <Col lg={6} md={12} className="text-center">
            <img
              src={men}
              alt="Man with Laptop"
              className="img-fluid contact-img"
            />
          </Col>
        </Row>
      </Container>

    </section>

    
    <Footer />
    </>
  );
}
