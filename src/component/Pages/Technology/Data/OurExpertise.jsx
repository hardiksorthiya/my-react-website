import React, { useState } from 'react';
import { Container, Nav, Row, Col, Card } from 'react-bootstrap';
import expertiseData from './expertiseData'; // separate data file

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState('Languages & Platforms');

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold mb-4">Our Expertise <span className="orange-dot">.</span></h2>

        <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)} className="mb-4">
          {Object.keys(expertiseData).map((category) => (
            <Nav.Item key={category}>
              <Nav.Link eventKey={category}>{category}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Row>
          {expertiseData[activeTab].map((tech, index) => (
            <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="text-center shadow-sm border-0 h-100">
                <Card.Body>
                  <img src={tech.image} alt={tech.name} className="mb-3" style={{ height: '50px' }} />
                  <Card.Text>{tech.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
