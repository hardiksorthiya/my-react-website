import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Planet from "../../../assets/images/hero.svg";
import Cloud from "../../../assets/images/cloud1.svg";
import Cloud2 from "../../../assets/images/cloud2.svg";
import Cloud3 from "../../../assets/images/cloud3.svg";
import Cloud4 from "../../../assets/images/cloud4.svg";
import Planspace from "../../../assets/images/airspace.svg";

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center ckf-dark-bg position-relative">
      {/* cloud image */}
      <img
        src={Cloud} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-one img-fluid"
      />
      <img
        src={Cloud2} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-two img-fluid"
      />
      <img
        src={Cloud3} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-three img-fluid"
      />
      <img
        src={Cloud4} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-four img-fluid"
      />

      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE: TEXT */}
          <Col lg={6} md={12} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
            <h1 className="hero-title text-white">
              Boost your cloud <br />
              journey with our <br />
              certified teams.
            </h1>
            <div className="hero-buttons mt-4">
              <Button className="me-3 ckf-button-dark">
                <span className="me-2">Book A Consultation</span> 
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
              <Button className="ckf-button-line">About Us</Button>
            </div>
          </Col>

          {/* RIGHT SIDE: IMAGE */}
          <Col
            lg={6}
            md={12}
            className="text-center position-relative"
            id="image-circle-section"
          >
            {/* Optional: Add a background circle or any other design element here */}
            <div className="hero-circle position-relative"  data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="800">
              {/* circle one */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="622"
                height="622"
                viewBox="0 0 622 622"
                className="circle-one-svg"
              >
                <circle className="circle-one" cx="311" cy="311" r="310.5" />
              </svg>
              {/* circle second */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="550"
                height="550"
                viewBox="0 0 550 550"
                className="circle-second-svg"
              >
                <circle className="circle-second" cx="275" cy="275" r="274.5" />
              </svg>
              {/* circle Third */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="498"
                height="498"
                viewBox="0 0 498 498"
                className="circle-third-svg"
              >
                <circle className="circle-third" cx="249" cy="249" r="249" />
              </svg>
              {/* circle fourth */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="416"
                height="416"
                viewBox="0 0 416 416"
                className="circle-fourth-svg"
              >
                <circle className="circle-fourth" cx="208" cy="208" r="207.5" />
              </svg>
              {/* circle fifth */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="334"
                height="334"
                viewBox="0 0 334 334"
                className="circle-fifth-svg"
              >
                <circle className="circle-fifth" cx="167" cy="167" r="166.5" />
              </svg>
              {/* circle sixth */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="290"
                height="290"
                viewBox="0 0 290 290"
                className="circle-six-svg"
              >
                <circle className="circle-six" cx="145" cy="145" r="145" />
              </svg>
              {/* circle-seven */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="252"
                height="252"
                viewBox="0 0 252 252"
                className="circle-seven-svg"
              >
                <circle className="circle-seven" cx="126" cy="126" r="125.5" />
              </svg>
            </div>
            {/* Hero Image */}
            <img
              src={Planet} // Replace with your actual image path
              alt="Cloud Journey"
              className="hero-image img-fluid"
              data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="500"
            />
            {/* Planspace Image */}
            <img
              src={Planspace} // Replace with your actual image path
              alt="Cloud Journey"
              className="planspace img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
