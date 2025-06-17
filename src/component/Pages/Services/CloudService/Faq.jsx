import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

export default function FAQSection({ data }) {
 
  return (
    <section className="faq-wrapper py-5 bg-light">
      <Container>
        <h2 className="fw-bold display-6 mb-3">
          {data.title} <span className="orange-dot">.</span>
        </h2>
        <p className="fs-5 text-muted mb-4">{data.subtitle}</p>

        <Accordion flush defaultActiveKey="0">
          {data.questions.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
