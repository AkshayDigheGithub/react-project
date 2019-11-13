import React, { Component } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import './HistoryData.css';



const now = 60;
const progressInstance = <ProgressBar now={now} animated label={`${now}%`} variant="danger" />;
const progressInstance2 = <ProgressBar now={now+20} animated label={`${now+20}%`} variant="info" />;
class History extends Component {
    render() {
        return (
            <div className="main-div">
                <Row>
                    <Col md={4}>
                        <h5>Current Month Eligibility Errors</h5>
                        <Col md={{span:10, offset:1}}>
                            <span className="Progress-bar">{progressInstance}</span>
                            <div className="small-piece">
                                <p>Active Delta 4</p>
                                <p>Term 4</p>
                            </div>
                        </Col>
                        <h5>History Eligibility Errors</h5>
                        <Col md={{span:10, offset:1}}>
                            {progressInstance2}
                            <div className="small-piece">
                                <p>Active Delta 112</p>
                                <p>Home Delta 14</p>
                                <p>Term Delta 4</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default History;