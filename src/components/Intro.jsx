import React, { useState } from "react";
import "./Intro.css";
import { Button, Card, CardBody, Form } from "react-bootstrap";

const Intro = () => {

  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  // const [close, setClose] = useState(false);


  return (
    <div className="Intro-container">
      <div className="text-intro">
        <h2>Start Doing Yoga</h2>
        <p>Start A Healthy <br /> Way Of Life, <br /> Today!</p>
      </div>

      <div className="intro-para">
        <p>Yoga is not just an exercise; it’s a way of life. It connects your body, mind, and soul, bringing inner peace and balance.<br /> Whether you’re a beginner or an expert, practicing yoga daily can help you:</p>
      </div>

      <div className="Intro-btn">
        <Button onClick={() => setOpen(true)} className="Begin-btn">BEGIN NOW</Button>
        {open && (
          <Card className="card">
            <CardBody className="card-h1">
              <h3>Contact US</h3>
              <Button onClick={() => setOpen(false)}>Close</Button>
              <Form className="card-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control type="text" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button onClick={() => setSubmit(true)}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        )}
      </div>
      
    </div>

  );
};

export default Intro;