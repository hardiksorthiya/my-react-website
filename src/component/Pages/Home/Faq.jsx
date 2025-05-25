import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "I’m looking for a cloud services provider, how can you help?",
    answer: "We offer end-to-end cloud solutions including consultation, architecture, deployment, and ongoing management tailored to your business needs.",
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we offer ongoing support and maintenance packages to ensure your services remain up-to-date and secure.",
  },
  {
    question: "How secure are your cloud solutions?",
    answer: "Our cloud solutions follow industry best practices with multi-layered security including encryption, firewalls, and regular audits.",
  },
  {
    question: "Can you migrate our existing systems to the cloud?",
    answer: "Absolutely! We specialize in smooth and secure migrations with minimal downtime.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer: "Yes, we tailor our solutions for both startups and large enterprises, with scalable and cost-effective options.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const nodeRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='faq-ckf-hp'>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="left-about-content-home my-5">
              Frequently Asked Questions
              <span className="orange-dot">.</span>
            </h2>
          </Col>
        </Row>
        <Row>
          {faqs.map((faq, index) => {
            if (!nodeRefs.current[index]) {
              nodeRefs.current[index] = React.createRef();
            }

            return (
              <Col lg={12} key={index} className="mb-3">
                <div className="accordion-item border-bottom py-3">
                  <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                    <h5>{faq.question}</h5>
                    <span>
                      {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>

                  <CSSTransition
                    in={openIndex === index}
                    timeout={300}
                    classNames="accordion"
                    unmountOnExit
                    nodeRef={nodeRefs.current[index]}
                  >
                    <div className="accordion-body" ref={nodeRefs.current[index]}>
                      {faq.answer}
                    </div>
                  </CSSTransition>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
