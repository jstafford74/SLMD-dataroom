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
    <Link to="/login"><Button
        variant="danger"
        type="submit"
        className="btn btn-primary"
        size="lg"
    // onClick={() => props.history.push('/login')}
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
                {/* <Card.Header> */}
                <Card.Title style={Style.title}>
                    <h1>
                        DATAROOM
                    </h1>
                </Card.Title>
                {/* </Card.Header> */}
                <Card.Body style={Style.buttons}>
                    <Card.Text style={Style.text}>
                        <h4> With one clinical study complete we are currently seeking capital to augment current device specs and complete a clinical study in the United States. Register to enter our dataroom.
                       </h4>
                    </Card.Text>
                    <Row >
                        <Col md={1} >
                        </Col>
                        <Col md={3} xs={12}>
                            <SignupButton title="Signup" />

                        </Col>
                        <Col md={4} xs={12}>

                        </Col>
                        <Col md={3} xs={12}>
                            <LoginButton title="Login" />
                        </Col>
                        <Col md={1} >
                        </Col>
                    </Row>

                </Card.Body>

            </Card.ImgOverlay >
        </Card >


    )
}
