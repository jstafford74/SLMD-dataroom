import React from "react";

import { Button, Col, Row, Container, Jumbotron } from 'react-bootstrap';
import AboutCard from "../components/AboutCard";
import DemoCard from "../components/DemoCard";
import DataCard from "../components/DataCard";
var Style = {
    container: {


    },
    jumbo: {
        height: 650,
        opacity: 1
    },
    header: {
        marginBottom: 20
    }
}
export default function Splash() {
    return (
        <Container style={Style.container}>
            <Row>
                <Col >
                    <Jumbotron fluid className='mt-4' style={Style.jumbo}>
                        <Row>
                            <Col style={Style.header}>
                                <h1 className='text-center'>St. Louis Medical Devices</h1>
                                <h3 className='text-center'>A Noninvasive Solution for Detecting Blood Glucose</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AboutCard />
                            </Col>

                            <Col>
                                <DemoCard />
                            </Col>

                            <Col>
                                <DataCard />
                               
                            </Col>
                        </Row>
                    </Jumbotron>

                </Col>
            </Row>
        </Container>
    );
}