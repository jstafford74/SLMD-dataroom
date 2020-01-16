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
        background:"rgba(0,0,0,.1)",
        marginTop: 100
    },
    header: {
        marginBottom: 20,
        color:"white",
        fontSize:"3rem"

    },
    test:{
        border:"black, solid",
        padingTop:300,
        width:"100%",
        height:20,
        color:"white",
        fontSize:"3rem"
    }
}
export default function Splash() {
    return (
        <Container style={Style.container}>
            <Row>
                <Col >
                <div style={Style.test}>
                    Tester
                </div>
                    <Jumbotron fluid style={Style.jumbo}>
                        <Row>
                            <Col style={Style.header}>
                                <h1 className='text-center'>ST. LOUIS MEDICAL DEVICES</h1>
                                <h3 className='text-center'>A NONINVASIVE SOLUTION FOR DETECTING BLOOD GLUCOSE</h3>
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