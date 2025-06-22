import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';


export default function RecruitmentPrivacyPolicy() {
  return (
    <>
      <Navbar />
      
      <section className="sorath-policy-wrapper py-5">
        <Container>
                <nav className="mb-3 small">
                  <Link to={"/"} className="text-decoration-none opacity-75">
                    Home
                  </Link>
                <span className="mx-2">{'>'}</span>
      
                <span className="fw-semibold">Recruitment Privacy Policy</span>
              </nav>
              </Container>
      <Container>
        <h1 className="display-5 fw-bold mb-4">
          Recruitment Privacy Policy <span className="orange-dot">.</span>
        </h1>
        <p className="fs-5 text-muted mb-5">
          <strong>Building Trust with Future Talent.</strong> At <strong>CloudKodeForm Technologies</strong>, we believe attracting top talent starts with honesty, integrity, and respect for privacy. As a provider of cloud solutions, mobile apps, and digital services, we understand that data privacy matters during hiring just as much as in our products.
        </p>

        <h4 className="fw-semibold mt-4 mb-3">What Information We Collect During the Hiring Process</h4>
        <ul>
          <li><strong>Personal Details:</strong> Name, contact info like email and phone, and your address.</li>
          <li><strong>Work History:</strong> Resume/CV, employment background, education, certifications, skills, references.</li>
          <li><strong>Application Files:</strong> Cover letter, portfolio, GitHub links, LinkedIn profile, etc.</li>
          <li><strong>Interview Notes:</strong> Comments or observations from interviews or assessments.</li>
          <li><strong>Test Results:</strong> From technical or case study evaluations.</li>
          <li><strong>Additional Data:</strong> Nationality, visa/work status, availability date.</li>
        </ul>
        <p className="text-muted">
          <em>We do not ask for sensitive personal information unless required by law or provided voluntarily for specific needs.</em>
        </p>

        <h4 className="fw-semibold mt-5 mb-3">Why We Collect This Data</h4>
        <ul>
          <li>Assess your suitability for the role</li>
          <li>Communicate application status</li>
          <li>Schedule interviews or evaluations</li>
          <li>Verify background and references with consent</li>
          <li>Create a talent pool for future roles</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
        <p className="text-muted"><em>We do not use candidate data for marketing purposes during the hiring process.</em></p>

        <h4 className="fw-semibold mt-5 mb-3">How We Protect Your Data</h4>
        <ul>
          <li>Secure, encrypted storage systems</li>
          <li>Access limited to authorized HR and managers</li>
          <li>Secure communication with candidates</li>
          <li>Routine security checks and compliance training</li>
        </ul>
        <p className="text-muted">
          If your application isn’t selected, your data will be retained for up to 12 months unless you request earlier deletion. If hired, data transitions to employee records.
        </p>

        <h4 className="fw-semibold mt-5 mb-3">Your Rights as a Job Candidate</h4>
        <ul>
          <li>Request access to your stored data</li>
          <li>Update or correct incorrect details</li>
          <li>Request deletion of your information</li>
          <li>Object to data usage unless legally required</li>
        </ul>
        <p className="text-muted">
          To exercise your rights, please contact our recruitment team at: <a href="mailto:info@cloudkodeform.com" className="text-primary fw-semibold">info@cloudkodeform.com</a>.
        </p>
      </Container>
    </section>
      <Footer/>
    </>
  );
}
