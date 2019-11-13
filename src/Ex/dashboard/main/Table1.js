import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './Table1.css'


const tbl = [

    {
        key: "Total Elgibility X12 834 file",
        Members: "Members",
        data: [
            { id: 1, name: "Active", value: "" },
            { id: 2, name: "Dup in file", value: 454787 },
            { id: 3, name: "Hold", value: 2 },
            { id: 4, name: "No Eligibility Data", value: 12 },
            { id: 5, name: "Other Health Plan(no 307)", value: 8360 }
        ]
    },
    {
        key: "Total Elgibility Fame",
        Members: "Members",
        data: [
            { id: 1, name: "Active", value: "" },
            { id: 2, name: "Dup in file", value: 454787 },
            { id: 3, name: "Hold", value: 2 },
            { id: 4, name: "No Eligibility Data", value: 12 },
            { id: 5, name: "Other Health Plan(no 307)", value: 8360 }
        ]
    },
    {
        key: "Elgibility in Qnxt",
        Members: "Members",
        data: [
            { id: 1, name: "Active", value: "" },
            { id: 2, name: "Dup in file", value: 454787 },
            { id: 3, name: "Hold", value: 2 },
            { id: 4, name: "No Eligibility Data", value: 12 },
            { id: 5, name: "Other Health Plan(no 307)", value: 8360 }
        ]
    }
];

class Table1 extends Component {
    constructor(){
        super();
        state:{}
    }

    render(){
        return (
            <div className="main-div">
                <Row>
                    {
                        tbl.map((element, i)=> (
                            <Col md={4} xs={12} key={i}>
                                <Table striped bordered hover  >
                                    <thead>
                                        <tr>
                                            <th className="col1">{element.key}</th>
                                            <th className="col1">{element.Members}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            element.data.map((el, i) => (
                                                <tr key={i}>
                                                    <td className="column-1">{el.name}</td>
                                                    <td className="column-2">{el.value}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default Table1;