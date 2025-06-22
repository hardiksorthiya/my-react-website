import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ServiceTopSection({ data }) {
  return (
    <section className="service-top-wrapper py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <h2 className="fw-bold display-5">
              {data.heading} <span className="orange-dot">.</span>
            </h2>
            <p className="mt-3 fs-5 text-dark">{data.description}</p>
            <Button to={data.link} className="me-3 ckf-button-dark">
                            <span className="me-2">{data.buttonLabel}</span> 
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="13"
                              viewBox="0 0 24 13"
                            >
                              <path
                                className="cloud_point_white"
                                d="M19.64,4.62h-.3a4.09,4.09,0,0,0-4.07-3.31,4.17,4.17,0,0,0-2.49.81A4.39,4.39,0,0,0,9,0,4.28,4.28,0,0,0,4.63,4.19a3.25,3.25,0,0,0,0,.44h-.3A4.27,4.27,0,0,0,0,8.81,4.28,4.28,0,0,0,4.36,13H19.64A4.28,4.28,0,0,0,24,8.81,4.27,4.27,0,0,0,19.64,4.62Z"
                                transform="translate(0)"
                              />
                            </svg>
                          </Button>
            
          </Col>
          <Col lg={6} md={6} className="text-center mt-4 mt-md-0">
            <img src={data.image} alt="Service" className="img-fluid sevices-sorath-img-page" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
