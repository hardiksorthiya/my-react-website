import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';

export default function CookiePolicy() {
  return (
    <>
      <Navbar />

      <section className="sorath-policy-wrapper py-5">
        <Container>
          <nav className="mb-3 small">
            <Link to="/" className="text-decoration-none opacity-75">
              Home
            </Link>
            <span className="mx-2">{'>'}</span>
            <span className="fw-semibold">Cookie Policy</span>
          </nav>

          <h1 className="display-5 fw-bold mb-4">
            How We Use Cookies <span className="orange-dot">.</span>
          </h1>
          <p className="fs-5 text-muted mb-5">
            At <strong>CloudKodeForm Technologies</strong>, we use cookies to make browsing better, understand how visitors use our site, and offer personalized content. Cookies are tiny text files saved on your device when you visit us. They help us see how users navigate our platform and help us improve the experience.
          </p>

          <h4 className="fw-semibold mt-4 mb-3">Types of Cookies We Use</h4>
          <ul>
            <li><strong>Essential Cookies:</strong> Needed for basic functions and navigation.</li>
            <li><strong>Performance Cookies:</strong> Track how well the website works and how users behave.</li>
            <li><strong>Functional Cookies:</strong> Enable features like saving your preferences.</li>
            <li><strong>Targeting Cookies:</strong> May be used by third parties to show relevant ads.</li>
          </ul>

          <h4 className="fw-semibold mt-5 mb-3">Your Choices</h4>
          <p className="text-muted">
            By visiting <a href="https://cloudkodeform.com" target="_blank" rel="noreferrer">cloudkodeform.com</a>, you agree to our cookie policy. You can change or turn off cookies in your browser settings at any time. However, disabling cookies might limit some website features.
          </p>

          <h4 className="fw-semibold mt-5 mb-3">Transparency & Contact</h4>
          <p className="text-muted">
            We value honesty and your privacy choices. For more information on how we handle data, please review our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
          <p className="text-muted">
            If you have questions about this cookies policy, contact us at: <a href="mailto:info@cloudkodeform.com" className="text-primary fw-semibold">info@cloudkodeform.com</a>.
          </p>
        </Container>
      </section>

      <Footer />
    </>
  );
}
