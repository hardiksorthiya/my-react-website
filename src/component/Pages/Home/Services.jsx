import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import MobileAppicon from "./../../../assets/images/mobileapp.svg";

const services = [
  {
    icon: MobileAppicon,
    title: "Artificial intelligence",
    link: "#ser",
    features: [
      "User-Friendly Interface",
      "Cloud Integration",
      "SEO & ASO Optimization",
      "Robust Security",
      "Custom Features",
    ],
  },
  {
    title: "Artificial intelligence",
    features: [
      "User-Friendly Interface",
      "Cloud Integration",
      "SEO & ASO Optimization",
      "Robust Security",
      "Custom Features",
    ],
  },
  {
    title: "Artificial intelligence",
    features: [
      "User-Friendly Interface",
      "Cloud Integration",
      "SEO & ASO Optimization",
      "Robust Security",
      "Custom Features",
    ],
  },
  {
    title: "Artificial intelligence",
    features: [
      "User-Friendly Interface",
      "Cloud Integration",
      "SEO & ASO Optimization",
      "Robust Security",
      "Custom Features",
    ],
  },
  {
    title: "Artificial intelligence",
    features: [
      "User-Friendly Interface",
      "Cloud Integration",
      "SEO & ASO Optimization",
      "Robust Security",
      "Custom Features",
    ],
  },
  {
    title: "Artificial intelligence",
    features: [
      "User-Friendly Interface",
      "Cloud Integration",
      "SEO & ASO Optimization",
      "Robust Security",
      "Custom Features",
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
              Accelerate time to market, maximise cost savings and realise
              growth ambitions
              <span className="orange-dot">.</span>
            </h2>
            <p className="right-about-content-home">
              Our team of skilled and motivated experts is committed to
              achieving excellence in every project. With a focus on quality,
              innovation, and customer satisfaction, we set ourselves apart in
              the industry.
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
