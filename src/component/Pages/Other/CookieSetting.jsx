import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';

export default function CookieSettings() {
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
            <span className="fw-semibold">Cookie Settings</span>
          </nav>

          <h1 className="display-5 fw-bold mb-4">
            Manage Your Cookie Preferences <span className="orange-dot">.</span>
          </h1>

          <p className="fs-5 text-muted mb-4">
            At <strong>CloudKodeForm Technologies</strong>, we value your privacy and give you control over the data we collect. Use the settings below to manage how cookies are used while you browse our site.
          </p>

          <Form>
            <Form.Check
              type="switch"
              id="essential-cookies"
              label="Essential Cookies (Required)"
              checked
              disabled
              className="mb-3"
            />
            <p className="text-muted small mb-4">
              These cookies are necessary for the website to function and cannot be turned off.
            </p>

            <Form.Check
              type="switch"
              id="performance-cookies"
              label="Performance Cookies"
              className="mb-3"
            />
            <p className="text-muted small mb-4">
              These help us understand how visitors interact with the site by collecting analytics data.
            </p>

            <Form.Check
              type="switch"
              id="functional-cookies"
              label="Functional Cookies"
              className="mb-3"
            />
            <p className="text-muted small mb-4">
              Enable enhanced features like remembering user preferences or settings.
            </p>

            <Form.Check
              type="switch"
              id="marketing-cookies"
              label="Marketing & Targeting Cookies"
              className="mb-3"
            />
            <p className="text-muted small mb-4">
              These cookies may be set by advertising partners to show you relevant ads on other sites.
            </p>

            <Button variant="primary" className="mt-3">Save Preferences</Button>
          </Form>

          <p className="mt-5 text-muted">
            You can also control cookies through your browser settings at any time. Learn more in our <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>
        </Container>
      </section>

      <Footer />
    </>
  );
}
