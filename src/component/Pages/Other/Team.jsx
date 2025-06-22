import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import teamMembers from './teamData';

export default function OurTeam() {
  return (
    <>
      <Navbar />
      <section className="our-team-section py-5">
        <Container>
          <nav className="mb-3 small">
            <Link to="/" className="text-decoration-none opacity-75">Home</Link>
            <span className="mx-2">{'>'}</span>
            <span className="fw-semibold">Our Team</span>
          </nav>
          <h2 className="fw-bold mb-4">Meet Our Team <span className="orange-dot">.</span></h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="h-100 text-center shadow-sm">
                  <Card.Img variant="top" src={member.image} alt={member.name} />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <h6 className="text-muted">{member.position}</h6>
                    <p className="small text-secondary">{member.bio}</p>
                    {member.linkedin && (
                      <Button
                        variant="outline-primary"
                        href={member.linkedin}
                        target="_blank"
                        size="sm"
                      >
                        LinkedIn
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
