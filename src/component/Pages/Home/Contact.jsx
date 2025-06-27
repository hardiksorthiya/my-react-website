import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import men from "../../../assets/images/men.svg";


export default function ContactSection() {
  return (
    <section className="contact-section mt-4">
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
              <Button className="me-3 ckf-button-dark" type='submit'>
                <span className="me-2">Book A Consultation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="13"
                  viewBox="0 0 24 13"
                >
                  <path
                    className="cloud_point_white"
                    d="M19.64,4.62h-.3a4.09,4.09,0,0,0-4.07-3.31,4.17,4.17,0,0,0-2.49.81A4.39,4.39,0,0,0,9,0,4.28,4.28,0,0,0,4.63,4.19a3.25,3.25,0,0,0,0,.44h-.3A4.27,4.27,0,0,0,0,8.81,4.28,4.28,0,0,0,4.36,13H19.64A4.28,4.28,0,0,0,24,8.81,4.27,4.27,0,0,0,19.64,4.62Z"
                    transform="translate(0)"
                  />
                </svg>
              </Button>
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
  );
}
