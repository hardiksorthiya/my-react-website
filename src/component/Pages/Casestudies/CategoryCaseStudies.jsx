import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import caseStudies from './caseStudiesData';

export default function CategoryCaseStudies() {
  const { category } = useParams();

  const filteredStudies = caseStudies.filter(
    (study) => study.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <Navbar />
      <section className="sorath-policy-wrapper py-5">
        <Container>
          {/* Breadcrumb */}
          <nav className="mb-3 small">
            <Link to="/" className="text-decoration-none opacity-75">
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="fw-semibold text-dark">{category} Case Studies</span>
          </nav>

          <h2 className="mb-4 fw-bold text-capitalize">
            {category} Case Studies <span className="orange-dot">.</span>
          </h2>

          <Row>
            {filteredStudies.length > 0 ? (
              filteredStudies.map((study, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Img variant="top" src={study.image} alt={study.title} />
                    <Card.Body>
                      <Card.Title>{study.title}</Card.Title>
                      <Card.Text>{study.excerpt}</Card.Text>
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="btn btn-outline-primary"
                      >
                        Read More
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No case studies found for this category.</p>
            )}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
