import React, { Component } from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap'
import './Image.css';


class ImageComponent extends Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col xs={12} md={12} className= "image-box">
                        <Image src="https://picsum.photos/400/550" thumbnail />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ImageComponent;