import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Form from "react-bootstrap/Form";
import { Row, Col, Button, Container } from "react-bootstrap";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_53f8ite",
        "template_teieiky",
        form.current,
        "WJrVU1DQIQqkx_H9f"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <Container fluid>
        <h1>Contact Us</h1>
        <Row>
          <Col
            sm="3"
            className="d-flex justify-content-center align-items-center pe-3 wdgtCol"
          >
            <div className="verticalWidgt">
              <iframe
                title="vWdgt"
                className="verticalWdgtFr"
                src="https://gogetfunding.com/embed-widget2?campaignid=7666428&frame_type=t1"
                scrolling="no"
              ></iframe>
            </div>
          </Col>
          <Col sm="7">
            <Form className="mx-5 mt-3" ref={form} onSubmit={sendEmail}>
              <Form.Group as={Row} className="mb-3" controlId="subject">
                <Form.Label className="d-flex justify-content-start align-items-end pe-3">
                  Subject
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    defaultValue="Headline your query"
                    name="subject"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="userName">
                <Form.Label className="d-flex justify-content-start align-items-end pe-3">
                  Name
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    defaultValue="Name"
                    name="from_name"
                  />
                </Col>
              </Form.Group>
              {/* <label>Name</label>
        <input type="text" name="user_name" /> */}

              <Form.Group as={Row} className="mb-3" controlId="mobileNumber">
                <Form.Label className="d-flex justify-content-start align-items-end pe-3">
                  Mobile Number
                </Form.Label>
                <Col>
                  <Form.Control
                    type="tel"
                    defaultValue="Mobile Number"
                    name="from_mobile"
                  />
                </Col>
              </Form.Group>
              {/* <label>Email</label>
        <input type="email" name="user_email" /> */}

              <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label className="d-flex justify-content-start align-items-end pe-3">
                  Email
                </Form.Label>
                <Col>
                  <Form.Control
                    type="email"
                    defaultValue="Email"
                    name="from_email"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="message">
                <Form.Label className="d-flex justify-content-start align-items-end pe-3">
                  Query
                </Form.Label>
                <Col>
                  <Form.Control
                    as={"textarea"}
                    rows={5}
                    defaultValue="How can we help?"
                    name="message"
                  />
                </Col>
              </Form.Group>
              <Button
                className="d-flex justify-content-start align-items-end pe-3 mb-3"
                as="input"
                type="submit"
                value="Submit"
              />
              {/* <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" /> */}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
