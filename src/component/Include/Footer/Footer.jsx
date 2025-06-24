import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Logo from '../../../assets/images/logo.svg'
import Iso from '../../../assets/images/iso.svg'


const Footer = () => {
  return (
    <footer className="ckf-dark-bg text-white py-10 px-6 md:px-20">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/mobileapp">Mobile App</Link></li>
              <li><Link to="/services/cloudservice">Cloud Services</Link></li>
              <li><Link to="/services/ai">Artificial Intelligence</Link></li>
              <li><Link to="/services/migration">Migration</Link></li>
              <li><Link to="/services/devops">Dev Ops</Link></li>
              <li><Link to="/services/micro">Micro Services</Link></li>

            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/technology/react">React</Link></li>
              <li><Link to="/technology/magento">Magento</Link></li>
              <li><Link to="/technology/nodejs">Node Js</Link></li>
              <li><Link to="/technology/ui-figma">UI – Figma</Link></li>
              <li><Link to="/technology/laravel">Laravel</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/case-study">Case Study</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/recruitment-privacy-policy">Recruitment Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
              <li><Link to="/cookies-settings">Cookies Settings</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-6">
          <Col lg={6} md={12} className="mb-4">
            <div className="d-flex align-items-center">
              <a href="/" className="logo-footer"><img src={Logo} alt="Logo" className="h-10" /></a>
              <a href="/"><img src={Iso} alt="Logo" className="h-10" /></a>
            </div>
          </Col>
          <Col lg={6} md={12} className="text-right">
            <div className="d-flex justify-content-end social-icons-ftr">
              <a href="/">
              <svg id="social-footer-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 21">
              <title>Facebook</title>
                <path class="social-icon" d="M9.14.5A15.59,15.59,0,0,1,11.5.73v2.7l-1,0a3.65,3.65,0,0,0-2.66.82A3.51,3.51,0,0,0,7,6.85V8.76h4.19l-.55,3H7V20.5H3.21V11.78H.5v-3H3.21V6.54c0-2.17.5-3.65,1.43-4.6S7,.5,9.14.5Z"/></svg>
              </a>

               <a href="/">
              <svg id="social-footer-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>instagram</title>
              <path class="social-icon" d="M10,1c1,0,2.06,0,3.08,0l1,0h0a5.58,5.58,0,0,1,3.65,1.28l.2.19h0a5.23,5.23,0,0,1,1.45,3.57l0,.28h0c.07,1.37.07,2.71.07,4.1,0,1.22,0,2.41,0,3.59l0,.51h0a5.58,5.58,0,0,1-1.28,3.65l-.19.2h0a5.23,5.23,0,0,1-3.57,1.45l-.28,0h0C12.73,20,11.39,20,10,20c-1,0-2.06,0-3.08,0l-1,0h0l-.28,0a5.34,5.34,0,0,1-3.37-1.26L2,18.46H2l-.19-.2A5.3,5.3,0,0,1,.59,14.89l0-.28h0l0-1c0-1,0-2,0-3.08s0-2.06,0-3.08l0-1h0A5.58,5.58,0,0,1,1.85,2.74L2,2.54H2A5.23,5.23,0,0,1,5.61,1.09l.28,0h0C7.27,1,8.61,1,10,1Zm0,3.87a5.63,5.63,0,1,0,5.63,5.63A5.62,5.62,0,0,0,10,4.87Zm0,2.8A2.83,2.83,0,1,1,7.17,10.5,2.85,2.85,0,0,1,10,7.67Zm5.34-4.21a1.7,1.7,0,1,0,0,3.4h.21l0,0,.26,0L16,6.72a1.69,1.69,0,0,0,.55-.36h0A2.19,2.19,0,0,0,16.85,6l.07-.16A1.47,1.47,0,0,0,17,5.15h0A1.68,1.68,0,0,0,15.34,3.46Z" transform="translate(0 -0.5)"/></svg>
               </a>

               <a href="/">
              <svg id="social-footer-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.06 18">
              <title>linkedin</title>
              <path class="social-icon" d="M12.59,6.44a5.06,5.06,0,0,1,2.65-.28,3.87,3.87,0,0,1,2.31,1.25,4.69,4.69,0,0,1,1,3.16V18H15.61V11.93a3.6,3.6,0,0,0-.88-2.54,2.6,2.6,0,0,0-2-.83,3.11,3.11,0,0,0-2.87,3.37V18H6.9V6.48h3l0,1.17.94.25A3.41,3.41,0,0,1,12.59,6.44Zm-9,0V18h-3V6.48ZM2,1a1.5,1.5,0,1,1-.95,2.66l-.11-.1A1.5,1.5,0,0,1,.5,2.5V2.35a1.49,1.49,0,0,1,.33-.8l.1-.11A1.47,1.47,0,0,1,1.85,1Z" transform="translate(0 -0.5)"/></svg>
              </a>

               <a href="/">
              <svg id="social-footer-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.97 17">
              
              <title>twitter</title>
              <path class="social-icon" d="M16.06,5a3.7,3.7,0,0,1,2.79,1.2l.19.21.28-.06a8.93,8.93,0,0,0,1.45-.42,3.85,3.85,0,0,1-1,.83l.32.93A9.12,9.12,0,0,0,21,7.52a8,8,0,0,1-.94.8l-.22.16v.28c0,.17,0,.34,0,.53A11.71,11.71,0,0,1,3.63,20.08a9.11,9.11,0,0,0,4.63-1.9l1.09-.86L8,17.29a3.78,3.78,0,0,1-3.21-1.9,4.85,4.85,0,0,0,1-.1L6,15.22l0-1a3.8,3.8,0,0,1-3-3,4.37,4.37,0,0,0,1.37.22H6.08l-1.42-.92A3.72,3.72,0,0,1,3,7.44,3.67,3.67,0,0,1,3.19,6.2a12.68,12.68,0,0,0,8.68,4.07l.66,0-.14-.64a4.14,4.14,0,0,1-.1-.87A3.78,3.78,0,0,1,16.06,5Z" transform="translate(-1.66 -4.5)"/></svg>
              </a>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
