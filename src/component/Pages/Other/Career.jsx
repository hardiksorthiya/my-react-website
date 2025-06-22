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
    <section className="contact-section">
      <Container>
        <Row className="align-items-center">
          {/* Form Side */}
          <Col lg={6} md={12} className="mb-4">
            <h2 className="left-about-content-home">
              Apply for Your Next Opportunity <span className="orange-dot">.</span>
            </h2>
            <p className="right-about-content-home">
              Ready to take the next step in your career? Fill out the form and join our growing team at CloudKodeForm Technologies.
            </p>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number *</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Position Applying For *</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload Resume *</Form.Label>
                <Form.Control type="file" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Cover Letter / Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      I agree to CloudKodeForm’s recruitment privacy terms. <br />
                      <small>You can read our <a href="/recruitment-privacy-policy">Recruitment Privacy Policy</a>.</small>
                    </>
                  }
                  required
                />
              </Form.Group>
              <Button className="orange-button" type="submit">Submit Application</Button>
            </Form>
          </Col>

          {/* Image Side */}
          <Col lg={6} md={12} className="text-center">
            <img
              src={men}
              alt="Apply for Job"
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
