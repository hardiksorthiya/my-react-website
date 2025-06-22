import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import MobileAppicon from "./../../../assets/images/mobileapp.svg";
import Cloudserviceicon from "./../../../assets/images/cloud-c.svg";
import Aiserviceicon from "./../../../assets/images/aiicon.svg";
import Migration from "./../../../assets/images/migrationserv.svg";
import DevOpsicon from "./../../../assets/images/devops.svg";
import MicroService from "./../../../assets/images/micro.svg";

const services = [
  {
    icon: MobileAppicon,
    title: "Mobile App Development",
    link: "#ser",
    features: [
      "Custom Android & iOS apps tailored to your business",
      "Scalable, secure, and user-friendly interfaces",
      "Native & cross-platform solutions",
      "Fast development with clean UI/UX",
      "Custom Features",
    ],
  },
  {
    icon: Cloudserviceicon,
    title: "Cloud Services",
    features: [
      "Scalable cloud server setups & migration",
      "Secure and reliable cloud infrastructure",
      "Cost-effective resource management",
      "High uptime & data accessibility",
      "Integration with AWS, Azure, Google Cloud",
    ],
  },
  {
    icon: Aiserviceicon,
    title: "Artificial intelligence",
    features: [
      "Smart data-driven business solutions",
      "AI-powered analytics and insights",
      "Automation for workflows & processes",
      "Machine learning models tailored to industry",
      "Enhance user experience with intelligent features",
    ],
  },
  {
    icon: Migration,
    title: "Migration Services",
    features: [
      "Hassle-free migration to modern platforms",
      "Minimal downtime & secure data transfer",
      "Cloud migration from legacy systems",
      "Improved scalability & system performance",
      "Full post-migration support",
    ],
  },
  {
    icon: DevOpsicon,
    title: "DevOps Solutions",
    features: [
      "Continuous Integration & Deployment (CI/CD)",
      "Automated testing & build pipelines",
      "Infrastructure as Code (IaC) setup",
      "Faster delivery with fewer errors",
      "Improved collaboration between dev & ops",
    ],
  },
  {
    icon: MicroService,
    title: "Microservices Architecture",
    features: [
      "Lightweight, independent service modules",
      "Easy scaling & maintenance",
      "Faster time to market for new features",
      "Technology-agnostic development",
      "Robust & flexible architecture",
    ],
  },
];

export default function Services() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={7} md={7}>
            <h2 className="left-about-content-home">
              Build Smarter. Launch Faster. Grow Stronger
              <span className="orange-dot">.</span>
            </h2>
            <p className="right-about-content-home">
              We combine innovation, technology, and expertise to build reliable, custom IT solutions that help businesses move faster, scale smarter, and grow stronger.
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col
              lg={4}
              md={6}
              sm={12}
              className="mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="service-card h-100 shadow-sm">
                <Card.Body>
                  <div className="icon mb-3">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <ul className="list-unstyled mt-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="13"
                          viewBox="0 0 24 13"
                          className="me-2"
                        >
                          <path
                            className="cloud_point_secondary"
                            d="M19.64,4.62h-.3a4.09,4.09,0,0,0-4.07-3.31,4.17,4.17,0,0,0-2.49.81A4.39,4.39,0,0,0,9,0,4.28,4.28,0,0,0,4.63,4.19a3.25,3.25,0,0,0,0,.44h-.3A4.27,4.27,0,0,0,0,8.81,4.28,4.28,0,0,0,4.36,13H19.64A4.28,4.28,0,0,0,24,8.81,4.27,4.27,0,0,0,19.64,4.62Z"
                            transform="translate(0)"
                          />
                        </svg>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className="third-button-in-white p-0">
                    <span className="me-2">Read More</span>{" "}
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.5"
                        height="13.5"
                        viewBox="0 0 16.5 13.5"
                      >
                        <path
                          className="arrow-primary"
                          d="M4.5,12.5h15m0,0-5.62-6m5.62,6-5.62,6"
                          transform="translate(-3.75 -5.75)"
                        />
                      </svg>
                    </span>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
