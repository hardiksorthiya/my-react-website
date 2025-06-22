// Portfolio.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import portfolioData from './portfolioData';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section className="portfolio-wrapper py-5">
        <Container>
          <nav className="mb-3 small">
            <Link to="/" className="text-decoration-none opacity-75">
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="fw-semibold text-dark">Portfolio</span>
          </nav>

          <h2 className="mb-4 fw-bold">
            Our Work <span className="orange-dot">.</span>
          </h2>

          <Row>
            {portfolioData.map((item, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={item.image} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    {item.link && (
                      <Button
                        variant="outline-primary"
                        as="a"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
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
