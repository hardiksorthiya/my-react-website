import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Breadcum({ data }) {
  // Safety check to prevent crash
  if (!data || !data.path) {
    return null; // or show fallback UI
  }
  const sectionStyle = {
    backgroundImage: `url(${data.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="breadcrumb-wrapper position-relative text-white py-2" style={sectionStyle}>
      <div className="breadcrumb-bg position-absolute" />

      <Container className="position-relative z-1">
        <nav className="mb-3 small">
          {data.path.map((item, index) => (
            <span key={index}>
              {item.link ? (
                <Link to={item.link} className="text-white text-decoration-none opacity-75">
                  {item.name}
                </Link>
              ) : (
                <span className="text-white fw-semibold">{item.name}</span>
              )}
              {index !== data.path.length - 1 && <span className="mx-2">{'>'}</span>}
            </span>
          ))}
        </nav>

        <div className='breadcumb-text'>
        <h1 className="display-4 fw-bold">
          {data.title} <span className="orange-dot">.</span>
        </h1>

        <p className="lead mt-3 text-white">{data.description}</p>

        {data.cta && (
            <Button as={Link} to={data.cta.link} className="me-3 ckf-button-dark">
                <span className="me-2">{data.cta.text}</span>
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
        )}
        </div>
      </Container>
    </section>
  );
}
