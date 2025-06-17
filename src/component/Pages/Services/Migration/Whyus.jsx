// src/components/Sections/Whyus.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Whyus({ data }) {
  if (!data) return null;

  const { title, subtitle, services } = data;

  return (
    <section className="why-us-section">
      <Container>
        <Row>
          <Col lg={9}>
            <h2>{title}<span className="orange-dot"> ?</span></h2>
            <p>{subtitle}</p>
          </Col>
        </Row>
        <Row className="mt-4 row-gap-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} sm={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="service-card h-100 shadow-sm">
                <Card.Body>
                  <div className="icon mb-3">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
