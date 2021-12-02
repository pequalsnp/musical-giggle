import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function handleFormSubmit(e, user, password) {
  e.preventDefault();
  alert("user " + user + " password " + password)
}

function change(e, setter) {
  setter(e.value)
}

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log("email: " + email)
  console.log("password: " + password)
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => handleFormSubmit(e, email, password)}>
              Submit
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
