import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import data from "../images/data.jpg";
import { Link } from 'react-router-dom';


const Style = {
    title: {
        marginBottom: 0,
        color: "white"

    },
    overlay: {
        paddingTop: 0
    },
    buttons: {
        justifyContent: "flex-end"
    },
    text: {
        color: "white"
    }
}

const SignupButton = ({ title, props }) => (
    <Link to="/signup"> <Button
        variant="primary"
        type="submit"
        className="btn btn-primary"
        size="lg"
    // onClick={() => props.history.push('/signup')}
    >
        {title}
    </Button>
    </Link>
);

const LoginButton = ({ title, props }) => (
    <Link to="/dataroom"><Button
        variant="danger"
        type="submit"
        className="btn btn-primary"
        size="lg"
    
    >
        {title}
    </Button>
    </Link>

)

export default function DataCard() {
    return (

        <Card>
            <Card.Img src={data} />
            <Card.ImgOverlay style={Style.overlay}>

                <Card.Title style={Style.title}>
                    <h1>
                        DATAROOM
                    </h1>
                </Card.Title>

                <Card.Body style={Style.buttons}>
                    <Card.Text style={Style.text}>
                        <h4> <strong>With one clinical study complete we are currently seeking capital to augment our current device specs and complete a clinical study in the United States.
                        </strong> </h4>
                    </Card.Text>
                    <Row >
                        <Col md={1} >
                        </Col>
                        <Col md={1} xs={12}>

                        </Col>
                        <Col md={8} xs={12}>
                            <LoginButton title="Enter Dataroom" />
                        </Col>
                        <Col md={1} xs={12}>

                        </Col>
                        <Col md={1} >
                        </Col>
                    </Row>

                </Card.Body>

            </Card.ImgOverlay >
        </Card >


    )
}
