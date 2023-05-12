import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Styletest() {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Register User</h2>
                <p className=" mb-5">Please enter your name and age below to register it to the database</p>
                <Form className="mb-3">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-center">
                      Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}