import React from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col } from "react-bootstrap";
import data from "../images/data.jpg";
import { Link, Route, Redirect } from 'react-router-dom';


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
    }
}

const SignupButton = ({ title, props }) => (
    <Link to="/signup"> <Button
        variant="primary"
        type="submit"
        className="btn btn-primary"
        onClick={() => props.history.push('/signup')}
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
        onClick={() => props.history.push('/login')}
    >
        {title}
    </Button>
    </Link>

)

export default function DataCard(props) {
    return (

        <Card>
            <Card.Img src={data} />
            <Card.ImgOverlay style={Style.overlay}>
                <Card.Header>
                    <Card.Title style={Style.title}>
                        <blockquote class="blockquote">
                            <h1>
                                DATAROOM
                    </h1>
                        </blockquote>
                    </Card.Title>
                </Card.Header>
                <Card.Body style={Style.buttons}>
                    <Row >
                        <Col md={1} >
                        </Col>
                        <Col md={3} xs={12}>
                            <SignupButton />

                        </Col>
                        <Col md={4} xs={12}>

                        </Col>
                        <Col md={3} xs={12}>
                            <LoginButton />
                        </Col>
                        <Col md={1} >
                        </Col>
                    </Row>

                </Card.Body>

            </Card.ImgOverlay >


        </Card >

    )
}



// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={routeProps =>
                rest.user ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    );
}

const ConnectedPrivateRoute = connect(
    // mapStateToProps
    state => ({ user: state.user.details })
)(PrivateRoute);

// A wrapper for <Route> that redirects to the books 
// screen if you're authenticated.
function PublicRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={routeProps =>
                !rest.user ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/books"
                            }}
                        />
                    )
            }
        />
    );
}

const ConnectedPublicRoute = connect(
    // mapStateToProps
    state => ({ user: state.user.details })
)(PublicRoute);
