import React from "react";
import { Button, Card, CardBody, Form } from "react-bootstrap";
import "./Contacts.css"

const Contacts = () => {

  const submit = () =>{
    
  }



  return (
    <div className="contact-container">
      <h2 className="head">Contact US</h2>
      <p className="para">contact@example.com <br/> 9082845988</p>
      <div>
      <Card className="card">
            <CardBody className="card-h1">
              <h3>Contact US</h3>
              {/* <Button onClick={() => setOpen(false)}>Close</Button> */}
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

                <Button onClick={() => submit}>Submit</Button>
              </Form>
            </CardBody>
          </Card>

      </div>
    </div>
  );
};

export default Contacts;