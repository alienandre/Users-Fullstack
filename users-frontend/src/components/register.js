import React, { useRef, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        imgUrl: ''
    });

    const nameElement = useRef(null);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                console.log('Form data saved successfully');
                alert('User saved')
                setFormData({
                    name: '',
                    age: '',
                    imgUrl: ''
                });
            })
            .catch(error => {
                console.error('Error saving data:', error);
                alert('Error: unable to save user')
            })

        setFormData({
            name: '',
            age: '',
            imgUrl: ''
        });

        nameElement.current.focus();
    }

    return (
        <Container>
        <Row className="vh-100 d-flex justify-content-center ">
          <Col md={8} lg={6} xs={12}>
            <Card bg='secondary'>
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold mb-2 text-uppercase text-white">Register User</h2>
                  <p className=" mb-5 text-white">Please enter your name and age below to register it to the system</p>
                  <Form className="mb-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-white" controlId="formName">
                      <Form.Label className="text-center">
                        Name
                      </Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          name='name'
                          value={formData.name}
                          autoFocus
                          ref={nameElement}
                          onChange={handleInputChange}
                          />
                    </Form.Group>
  
                    <Form.Group className="mb-3 text-white" controlId="formAge">
                      <Form.Label>Age</Form.Label>
                      <Form.Control 
                          type="number"
                          placeholder="Age"
                          name='age'
                          value={formData.age}
                          onChange={handleInputChange} 
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 text-white" controlId="formImgUrl">
                      <Form.Label>Profile Image URL</Form.Label>
                      <Form.Control 
                          type="text"
                          placeholder="ImageUrl"
                          name='imgUrl'
                          value={formData.imgUrl}
                          onChange={handleInputChange} 
                      />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="dark" type="submit">
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