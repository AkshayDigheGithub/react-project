import React, { Component } from 'react';
import { Container, Row, Col, Tab } from 'react-bootstrap';
import Subsection from './Subection';
import Table1 from './Table1'
import History from './HistoryData';
import './MainDashboard.css';

const PageName = "HiPasS Medical Monthly Eligibility Reconcile";

class MainDashboardComponent extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={{ span: 12 }} md={{ span: 12 }}>
                        <div className="PageName">
                            <p>{PageName}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Subsection></Subsection>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table1></Table1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <History></History>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default MainDashboardComponent;