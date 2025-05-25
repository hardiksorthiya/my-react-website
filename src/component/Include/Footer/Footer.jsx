import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-[#1e0f28] text-white py-10 px-6 md:px-20">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/mobile-app">Mobile App</a></li>
              <li><a href="/services/micro-services">Micro Services</a></li>
              <li><a href="/services/cloud">Cloud Services</a></li>
              <li><a href="/services/migration">Migration</a></li>
              <li><a href="/services/devops">Dev Ops</a></li>
              <li><a href="/services/ai">Artificial Intelligence</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/technology/react">React</a></li>
              <li><a href="/technology/magento">Magento</a></li>
              <li><a href="/technology/nodejs">Node Js</a></li>
              <li><a href="/technology/ui-figma">UI – Figma</a></li>
              <li><a href="/technology/laravel">Laravel</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact">Contact</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/case-study">Case Study</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/recruitment-privacy-policy">Recruitment Privacy Policy</a></li>
              <li><a href="/cookies">Cookies</a></li>
              <li><a href="/cookies-settings">Cookies Settings</a></li>
              <li><a href="/feedback">Feedback</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-6">
          <Col lg={6} md={12} className="mb-4">
            <div className="d-flex">
              <a href="/"><img src="logo.png" alt="Logo" className="h-10 mr-4" /></a>
              <a href="/"><img src="logo.png" alt="Logo" className="h-10 mr-4" /></a>
            </div>
          </Col>
          <Col lg={6} md={12} className="text-right">
            <div className="flex justify-end space-x-4">
              <a href="/"><FaFacebookF className="text-white text-xl" /></a>
              <a href="/"><FaInstagram className="text-white text-xl" /></a>
              <a href="/"><FaLinkedinIn className="text-white text-xl" /></a>
              <a href="/"><FaTwitter className="text-white text-xl" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
