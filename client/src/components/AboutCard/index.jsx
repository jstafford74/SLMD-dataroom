import React from "react";
import { Card } from "react-bootstrap";
import location from "../images/location.png";

const Style = {
    title: {

    },
    img: {
        opacity: .3
    },
    overlay: {
        paddingTop: 0
    }
}
const AboutCard = () => (
    <Card>
        <Card.Img variant="top" src={location} style={Style.img} />
        <Card.ImgOverlay style={Style.overlay}>
            <Card.Title style={{color:"orange"}}>
                <blockquote className="blockquote">
                    <h1 className="d-none d-md-block">
                        ABOUT US
                    </h1>
                </blockquote>
            </Card.Title >

            <Card.Text className="d-none d-lg-block">
                <h5 style={{color:"black"}}>
                    We are a clinical stage ready product development company that owns and maintains a robust patent portfolio focused on nearinfrared detection and measurement of blood glucose.  Our portfolio covers roughly 75% of the world's healthcare expenditures attributed to treating diabetes.
                 </h5>
            </Card.Text>
        </Card.ImgOverlay>
    </Card>
);

export default AboutCard;