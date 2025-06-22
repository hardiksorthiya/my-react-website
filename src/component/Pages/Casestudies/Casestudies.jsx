import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import caseStudies from './caseStudiesData'; // ✅ Correct path to data file

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      
      <section className="sorath-policy-wrapper py-5">
        {/* Breadcrumb */}
        <Container>
          <nav className="mb-3 small">
            <Link to="/" className="text-decoration-none opacity-75">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="fw-semibold">Case Studies</span>
          </nav>
        </Container>

        <Container>
          <h2 className="mb-4 fw-bold">Our Case Studies <span className="orange-dot">.</span></h2>
          <Row>
            {caseStudies.map((study, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={study.image} alt={study.title} />
                  <Card.Body>
                    <Link to={`/case-studies/category/${study.category}`} className="text-decoration-none">
                      <Badge bg="secondary" className="mb-2 text-capitalize">
                        {study.category}
                      </Badge>
                    </Link>
                    <Card.Title>{study.title}</Card.Title>
                    <Card.Text>{study.excerpt}</Card.Text>
                    <Link to={`/case-studies/${study.id}`} className="btn btn-outline-primary">
                      Read More
                    </Link>
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
