import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Subsection.css';


const data = [
    { name: "Eligibility Errors1", value: "156.2k" },
    { name: "Total Inbound Eligibility", value: "210.1k" },
    { name: "Active Reconciled", value: "132.3k" },
    { name: "Hold Reconciled", value: "89.8k" },
    { name: "Team Reconciled", value: "235.5k" }
];

const Subsection = () => {
    return (
            <Row >
                <Col md={1}>
                    <span>Search</span>
                </Col>
                <Col md={{ span: 10 }}>
                    {
                        data.map((el, i) => (
                            <div className="main" key={i}>
                                <p>{el.name}</p>
                                <span>{el.value}</span>
                            </div>
                        ))
                    }
                </Col>
            </Row>
    );
}

export default Subsection;