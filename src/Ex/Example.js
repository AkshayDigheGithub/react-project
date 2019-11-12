import React, { Component } from 'react';
import LoginComponent from '../Ex/login/Login';
import ImageComponent from '../Ex/Image/Image';
import{ Container, Row, Col} from 'react-bootstrap';
import './Example.css'

class ExampleComponent extends Component {
    render(){
        return (
            <div className="back-color">
                <Container>
                    <Row>
                        <Col xs = {12} md = {6}>
                            <ImageComponent/>
                        </Col>
                        <Col xs = {12} md = {6}>
                            <LoginComponent />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ExampleComponent;