import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import men from "../../../assets/images/men.svg";


export default function ContactSection() {
  return (
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          {/* Form Side */}
          <Col lg={6} md={12} className="mb-4">
          <h2 className="left-about-content-home">
              Let’s discuss how we can help with your journey
              <span className="orange-dot">.</span>
            </h2>
            <p className="right-about-content-home">
             From project-specific support to managed services, we help you become stronger, fitter and faster with public cloud.
            </p>
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
  );
}
