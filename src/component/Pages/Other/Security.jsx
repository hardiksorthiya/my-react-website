import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';

export default function SecurityPolicy() {
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
            <span className="fw-semibold">Security Policy</span>
          </nav>

          <h1 className="display-5 fw-bold mb-4">
            Our Commitment to Security <span className="orange-dot">.</span>
          </h1>

          <p className="fs-5 text-muted mb-4">
            At <strong>CloudKodeForm Technologies</strong>, security is a top priority. As a trusted provider of cloud services, mobile apps, and digital solutions, we work hard to keep your data safe.
          </p>

          <p>
            We use strong security measures including:
          </p>
          <ul>
            <li>SSL encryption</li>
            <li>Firewalls</li>
            <li>Multi-factor authentication (MFA)</li>
            <li>Regular vulnerability scans</li>
          </ul>

          <p className="text-muted">
            These steps protect our systems and your information whether you're visiting our website or using our cloud platforms.
          </p>

          <p>
            Our infrastructure is built to be dependable and secure, following industry best practices. We actively monitor potential threats and update our security protocols to address new cyber risks. Access to sensitive data is strictly limited and governed by internal policies.
          </p>

          <p>
            We believe transparency is key. If a security issue arises, our incident response team acts swiftly and keeps affected users informed.
          </p>

          <p className="mt-4">
            For details on how we manage your data, view our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>

          <p className="mb-5">
            If you have any security-related questions or concerns, feel free to contact us anytime at{' '}
            <a href="mailto:info@cloudkodeform.com" className="text-primary fw-semibold">info@cloudkodeform.com</a>.
          </p>

          <p className="fw-bold">
            Your safety is always our main focus.
          </p>
        </Container>
      </section>

      <Footer />
    </>
  );
}
