import React from 'react';
import Cloud5 from "../../../assets/images/cloud5.svg";
import Cloud6 from "../../../assets/images/cloud6.svg";
import Cloud7 from "../../../assets/images/cloud7.svg";
import Cloud8 from "../../../assets/images/cloud8.svg";
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Testimonial & client data
const testimonials = [
  {
    name: "Govind Bhagat",
    position: "HEAD OF WORKCRON",
    company: "Workcron",
    message: "The Cloudkodeform team is very supportive in engaging the wider business. At every level, they are professional, transparent, and extremely competent. This helps build trust, which contributed real value throughout the project."
  },
  {
    name: "Govind Bhagat",
    position: "HEAD OF WORKCRON",
    company: "Workcron",
    message: "The Cloudkodeform team is very supportive in engaging the wider business. At every level, they are professional, transparent, and extremely competent. This helps build trust, which contributed real value throughout the project."
  },
  {
    name: "Govind Bhagat",
    position: "HEAD OF WORKCRON",
    company: "Workcron",
    message: "The Cloudkodeform team is very supportive in engaging the wider business. At every level, they are professional, transparent, and extremely competent. This helps build trust, which contributed real value throughout the project."
  }
];

const clientLogos = [
  "/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png", "/logo5.png"
];

// Component
const TestimonialsAndClients = () => {
  const testimonialSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const logoSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className='testiMonial-home position-relative overflow-hidden ckf-dark-bg text-white mt-4'>
      <img
        src={Cloud5} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-five img-fluid"
      />
      <img
        src={Cloud6} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-six img-fluid"
      />
      <img
        src={Cloud7} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-seven img-fluid"
      />
      <img
        src={Cloud8} // Replace with your actual image path
        alt="Cloud Journey"
        className="cloud-image-eight img-fluid"
      />
        <Container>
            <Row>
                <Col lg={12}>
            <h2 className="left-about-content-home my-5">
              What our customers say
              <span className="orange-dot">.</span>
            </h2>

            <Slider {...testimonialSettings}>
        {testimonials.map((item, index) => (
          <div key={index} className='slier-ckf-hp-index'>
            <div className='slider-ckf-hp'>
              <div className='slider-ckf-hp-content'>
                <div className='slider-ckf-hp-title' >{item.company}</div>
                <div>
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.5"
                height="13.5"
                viewBox="0 0 23.9 17.94"
              >
                <path class="comma-3" d="M23.9,0H14V10l4,8h5l-4-8h5Z" transform="translate(0)"/><path class="comma-3" d="M10,0H0V10l4,8H9L5,10h5Z" transform="translate(0)"/>
              </svg>
                   
                   </div>
                <p>{item.message}</p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ margin: '0', fontWeight: 'bold' }}>{item.name}</h4>
                <small>{item.position}</small>
              </div>
            </div>
          </div>
        ))}
      </Slider>

          </Col>
          <Col lg={12}>
          <h2 className="left-about-content-home my-5">
              Global brands trust Cloudkodeform
              <span className="orange-dot">.</span>
            </h2>
          <Slider {...logoSettings}>
        {clientLogos.map((logo, i) => (
          <div key={i} style={{ padding: '10px', textAlign: 'center' }}>
            <img src={logo} alt={`Client ${i + 1}`} style={{ height: '60px', objectFit: 'contain' }} />
          </div>
        ))}
      </Slider>
          </Col>
            </Row>
        </Container>
    </section>
  );
};

export default TestimonialsAndClients;
