import React, { Component } from "react";

import { ButtonGroup, Button, Col, Row, Card } from 'react-bootstrap';

var Style = {
    container: {


    },
    jumbo: {
        height: 650,
        background: "rgba(0,0,0,0)",
        marginTop: 100
    },
    header: {
        marginBottom: 20,
        color: "white",
        fontSize: "3rem"

    },
    test: {
        border: "black, solid",
        padingTop: 300,
        width: "100%",
        height: 20,
        color: "white",
        fontSize: "3rem"
    }
}

const ButtonGr = () => (
    <ButtonGroup vertical>
        <Button
            variant="info"
            type="button"
            className="btn btn-info"
            size="lg"
            href="https://www.dropbox.com/s/icpj24xybgipnsi/SLMD%20FInancials.xlsx?dl=0"
        >
            FINANCIALS
                </Button >
        <Button
            variant="success"
            type="submit"
            className="btn btn-success"
            size="lg"
            href="https://www.dropbox.com/s/gqcprn3eqpj3x4a/SLMD%20Study%20Data%20%28Verified%20Analysis%29.xlsx?dl=0"
        >
            1-PAGER
            </Button>
        <Button
            variant="primary"
            type="button"
            className="btn btn-primary"
            size="lg"
            href="https://www.dropbox.com/s/gqcprn3eqpj3x4a/SLMD%20Study%20Data%20%28Verified%20Analysis%29.xlsx?dl=0"
        >
            SLIDE DECK
            </Button>
        <Button
            variant="info"
            type="button"
            className="btn btn-info"
            size="lg"
            href="https://www.dropbox.com/s/gqcprn3eqpj3x4a/SLMD%20Study%20Data%20%28Verified%20Analysis%29.xlsx?dl=0"
        >
            TAIWAN STUDY
            </ Button>
    </ButtonGroup>
)


export default function Dataroom() {
    return (
               
        <Card className="ml-4  pt-1" style={{maxWidth: "540px"}}>
            <Row className="no-gutters">
                <Col md={4}>
                    <ButtonGr />
                </Col>
                <Col  md={8}>
                    <Card.Body className="pt-0">
                        <Card.Title className="mb-0">St. Louis Medical Devices</Card.Title>
                        <Card.Text>Contacts:</Card.Text>
                        <Card.Text className="mb-0"><small className="text-muted" >George Chen, CEO</small></Card.Text>
                        <Card.Text><small className="text-muted">GChen@slmdevice.com</small></Card.Text>
                        <Card.Text className="mb-0"><small className="text-muted">Jeremiah Stafford, COO/CFO</small></Card.Text>
                        <Card.Text><small className="text-muted">JStafford@slmdevice.com</small></Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    );
}