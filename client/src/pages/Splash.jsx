import React from "react";

import { Col, Row, Container, Jumbotron } from 'react-bootstrap';
import AboutCard from "../components/AboutCard";
import DemoCard from "../components/DemoCard";
import DataCard from "../components/DataCard";
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
        fontSize: "3rem",
        fontFamily: "Crete Round",
        textAlign:"center"
    },
    text:{
        marginBottom: 20,
        color: "black",
        fontSize: "2rem",
        fontFamily: "Crete Round",
        textAlign:"center"
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
export default function Splash() {
    return (
        <Container style={Style.container}>
            <Row>
                <Col >
                    <Jumbotron fluid style={Style.jumbo}>
                        <Row>
                            <Col style={Style.header}>
                                <p className='text-center'>ST. LOUIS MEDICAL DEVICES,INC.</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col style={Style.text}>
                                <p className='text-center'>NONINVASIVE SOLUTIONS FOR DETECTING BLOOD GLUCOSE</p>
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