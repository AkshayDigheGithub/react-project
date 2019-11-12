import React, { Component } from 'react';
import { Container,Row, Col, Form, Button } from 'react-bootstrap';
import './LoginForm.css'

class LoginForm extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs =  {{ span: 10, offset: 1}} md = {{span: 10, offset: 1}}>
                        <Button variant="outline-primary" type="submit" size="lg" block>
                        Log in in with Facebook
                        </Button>
                    </Col>
                </Row>  
                <Row>
                    <Col xs = { 12 } md = { 12 } className = "dash-div">
                        <div className="dash"></div>
                        <div className="dash-or">or</div>
                        <div className="dash"></div>
                    </Col>
                </Row>

                <Form className="mainForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="input" type="email" placeholder="Mobile Number or Email" />
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Control className="input" type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group controlId="username">
                        <Form.Control className="input" type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className="input" type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="outline-primary" type="submit"  size="lg" block>
                        Sign up
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default LoginForm;