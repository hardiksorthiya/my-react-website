import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import men from "../../../assets/images/men.svg";


export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real implementation, handle POST here
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      

      <section className="feedback-wrapper py-5">
        <Container>
          <nav className="mb-3 small">
            <a href="/" className="text-decoration-none opacity-75">
              Home
            </a>
            <span className="mx-2">{'>'}</span>
            <span className="fw-semibold">Feedback</span>
          </nav>
          </Container>
        <Container>
        <Row className="align-items-center">
          {/* Form Side */}
          <Col lg={6} md={12} className="mb-4">
          <h1 className="display-5 fw-bold mb-4">
            We'd Love Your Feedback <span className="orange-dot">.</span>
          </h1>

          <p className="fs-5 text-muted mb-4">
            Your thoughts help us improve. Whether it’s about our website, services, or your experience with CloudKodeForm — we want to hear from you.
          </p>

          {submitted ? (
            <Alert variant="success" className="mt-4">
              Thank you for your feedback! We appreciate your input and will use it to improve our services.
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit} className="feedback-form">
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
                <Form.Group controlId="type" className="mb-3">
                <Form.Label>Feedback Type</Form.Label>
                <Form.Select required>
                  <option value="">Select type</option>
                  <option value="website">Website Experience</option>
                  <option value="service">Service Quality</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </Form.Select>
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
          )}
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
