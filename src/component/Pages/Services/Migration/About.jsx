import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About({data}) {

  return (
    <section className="about-wrapper position-relative py-5">
        <Container className="position-relative">
            <Row>
                <Col lg={8}>
                    <h2 className='about-title-service'>{data.heading} <span className="orange-dot">.</span></h2> 
                    <h4 className='about-subtitle-service py-3'>{data.subheading}</h4>
                     <p className="about-description-service mt-3">
                        {data.description.map((block, index) => {
                if (typeof block === 'string') {
                  return <p key={index}>{block}</p>;
                }

                if (block.type === 'list') {
                  return (
                    <ul key={index} className="custom-bullet">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return null;
              })}
                     </p>
                </Col>
            </Row>
      </Container>
    </section>
  );
}

