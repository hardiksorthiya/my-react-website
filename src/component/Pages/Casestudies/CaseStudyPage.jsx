import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';
import caseStudies from './caseStudiesData';

export default function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <>
        <Navbar />
        <Container className="py-5 text-center">
          <h2 className="fw-bold text-danger">Case Study Not Found</h2>
          <p className="mt-3">
            <Link to="/case-studies" className="btn btn-outline-primary">
              Back to Case Studies
            </Link>
          </p>
        </Container>
        <Footer />
      </>
    );
  }

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
            <Link to="/case-study" className="text-decoration-none opacity-75">
              Case Studies
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="fw-semibold text-dark">{caseStudy.title}</span>
          </nav>

          <h1 className="fw-bold mb-4">{caseStudy.title} <span className="orange-dot">.</span></h1>
          <img src={caseStudy.image} alt={caseStudy.title} className="img-fluid rounded mb-4" />
          <div className="markdown-body" style={{ whiteSpace: 'pre-line' }}>
            {caseStudy.content}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

