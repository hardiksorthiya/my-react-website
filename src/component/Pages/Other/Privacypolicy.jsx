import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Navbar from '../../Include/Navbar/Navbar';
import Footer from '../../Include/Footer/Footer';


export default function PrivacyPolicy() {
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

          <span className="fw-semibold">Privacy Policy</span>
        </nav>
        </Container>
        <Container>
          <h1 className="display-5 fw-bold mb-4">Understanding Our Privacy Policy <span className="orange-dot">.</span></h1>
          <p className="fs-5 text-muted mb-5">
            Your Data, Our Responsibility. At <strong>CloudKodeForm Technologies</strong>, your privacy is very important. We provide cloud services, app development, and digital solutions. Protecting your personal data and being clear about how we do it is our priority.
          </p>

          <h4 className="fw-semibold mt-4 mb-3">What Information We Collect</h4>
          <ul>
            <li><strong>Personal Information:</strong> Your name, email, phone number, or any contact details you give us voluntarily when filling out forms or making inquiries.</li>
            <li><strong>Non-Personal Data:</strong> Details like your browser type, IP address, device operating system, and links you visit before coming to our site. This helps us improve how the site works.</li>
            <li><strong>Cookies and Tracking:</strong> We use cookies to understand website trends, manage the site, track user activity, and collect basic demographic info.</li>
          </ul>

          <h4 className="fw-semibold mt-5 mb-3">How We Use Your Data</h4>
          <ul>
            <li><strong>Responding to you:</strong> Your contact details let us reply to your questions or requests.</li>
            <li><strong>Improving our site:</strong> Non-personal data helps us make our site faster and easier to use.</li>
            <li><strong>Marketing:</strong> With your permission, we may contact you with updates about our cloud, app development, and digital solutions.</li>
            <li><strong>Security and legal needs:</strong> Your data helps us prevent fraud, stay compliant with laws, and keep your experience safe.</li>
          </ul>

          <h4 className="fw-semibold mt-5 mb-3">Sharing Your Data</h4>
          <ul>
            <li><strong>With trusted service providers:</strong> We may hire partners for support, hosting, or analytics. They must keep your info private.</li>
            <li><strong>Legal reasons:</strong> We may share data if required by law or legal process.</li>
            <li><strong>Business changes:</strong> If we merge, sell assets, or buy another company, your data may be part of that transaction.</li>
          </ul>

          <h4 className="fw-semibold mt-5 mb-3">How We Protect Your Data</h4>
          <ul>
            <li>SSL encryption to secure data transfer</li>
            <li>Secure servers to store information</li>
            <li>Regular scans to find security problems</li>
            <li>Controls on who can access your data and logs of activity</li>
          </ul>

          <h4 className="fw-semibold mt-5 mb-3">Updates to Our Privacy Policy</h4>
          <p className="text-muted">
            We may change this policy at any time. Any updates will be posted here with a new date. Check this page often to see how we protect your data.
          </p>
        </Container>
      </section>
      <Footer/>
    </>
  );
}
