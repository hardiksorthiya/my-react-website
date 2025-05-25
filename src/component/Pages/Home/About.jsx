import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function About() {
  return (
    <section className="about-home">
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <h2 className="left-about-content-home">
              Clients say working with us is like having a compass
              <span className="orange-dot">.</span>
            </h2>
          </Col>
          <Col lg={6} md={12}>
            <p className="right-about-content-home">
              Our team of skilled and motivated experts is committed to
              achieving excellence in every project. With a focus on quality,
              innovation, and customer satisfaction, we set ourselves apart in
              the industry.
            </p>
            <Button className="third-button">
              <span className="me-2">MORE ABOUT US</span>
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
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
