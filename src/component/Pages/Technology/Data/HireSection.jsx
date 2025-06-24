import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Tech.css'; // Custom CSS

export default function TechCTASection() {
  return (
    <section className="tech-cta-wrapper my-5">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={8}>
            <div className="cta-left">
              <div className="cta-line"></div>
              <h3 className="text-white fw-bold mb-0">
                Get started with the best staff augmentation
              </h3>
            </div>
          </Col>
          <Col md={4} className="text-md-end text-center mt-3 mt-md-0">
            <Button className="cta-btn">Hire today</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
