import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.css'
import { Container, Row, Col } from 'react-bootstrap'
class LoginComponent extends Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col xs={ 12 } md = { 12 } className="ex-box">
                            <Col xs = {{ span: 10, offset: 1 }} md = {{ span: 10, offset: 1 }}>
                                <h1>Example</h1>
                                <p>Sign up to see photos and videos from your friends.</p>
                                <LoginForm/>
                            </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginComponent;