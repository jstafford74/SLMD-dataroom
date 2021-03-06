import React from "react";

import { ButtonGroup, Button, Col, Row, Card, Table } from 'react-bootstrap';


const ButtonGr = () => (
    <ButtonGroup vertical>
        <Button
            variant="info"
            type="button"
            className="btn btn-info"
            size="lg"
            href="Replace link here"
        >
            FINANCIALS
                </Button >
        <Button
            variant="success"
            type="submit"
            className="btn btn-success"
            size="lg"
            href="Replace link here"
        >
            1-PAGER
            </Button>
        <Button
            variant="primary"
            type="button"
            className="btn btn-primary"
            size="lg"
            href="Replace link here"
        >
            SLIDE DECK
            </Button>
        <Button
            variant="info"
            type="button"
            className="btn btn-info"
            size="lg"
            href="Replace link here"
        >
            TAIWAN STUDY
            </ Button>
    </ButtonGroup>
)


export default function Dataroom() {
    return (
        <div style={{ height: '100vh' }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >File Name</th>
                        <th colSpan="2">Descrip</th>
                        <th >Link</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Financials</td>
                        <td colSpan="2">Proforma Estimates & Models</td>
                        <td><a href="Replace link here">Financials</a></td>
                    </tr>
                    <tr>
                        <td>1-Pager</td>
                        <td colSpan="2">Exec Summary</td>
                        <td><a href="Replace link here">1 Pager</a></td>
                    </tr>
                    <tr>
                        <td>Slide Deck</td>
                        <td colSpan="2">Slide Deck Materials</td>
                        <td><a href="Replace link here">Slide Deck</a></td>
                    </tr>
                    <tr>
                        <td>Taiwan Study</td>
                        <td colSpan="2">Data from Taiwan Study</td>
                        <td><a href="Replace link here">Taiwan Study</a></td>
                    </tr>
                    <tr>
                        <td>2016 License Agreement</td>
                        <td colSpan="2">License Agreement & Registration</td>
                        <td><a href="Replace link here">2016 License Agreement</a></td>
                    </tr>
                    <tr>
                        <td>2018 License Agreement</td>
                        <td colSpan="2">2018 License Agreement (redo)</td>
                        <td><a href="Replace link here">2018 License Agreement</a></td>
                    </tr>
                </tbody>
            </Table>
            <Card className="ml-4  pt-1" style={{ maxWidth: "540px" }}>
                <Row className="no-gutters">
                    <Col md={4}>
                        Contact Info:
                    </Col>
                    <Col md={8}>
                        <Card.Body className="pt-0">
                            <Card.Title className="mb-0">St. Louis Medical Devices</Card.Title>

                            <Card.Text className="mb-0"><small >George Chen, CEO</small></Card.Text>
                            <Card.Text><small className="text-muted">GChen@slmdevice.com</small></Card.Text>
                            <Card.Text className="mb-0"><small>Jeremiah Stafford, COO/CFO</small></Card.Text>
                            <Card.Text><small className="text-muted">JStafford@slmdevice.com</small></Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
