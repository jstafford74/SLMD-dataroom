import React from "react";
import { Card } from "react-bootstrap";
import location from "../images/location.png";

const Style = {
    title: {

    },
    img:{
        opacity:.3
    },
    overlay:{
        paddingTop:0
    }
}
const AboutCard = () => (
    <Card>
        <Card.Img variant="top" src={location} style={Style.img}/>
        <Card.ImgOverlay style={Style.overlay}>
            <Card.Title>
                <blockquote class="blockquote">
                    <h1>
                        ABOUT US
                    </h1>
                </blockquote>
            </Card.Title>

            <Card.Text>
                <h4>
                We are a clinical stage ready product development company that owns and maintains a robust patent portfolio focusing on noninvasive detection of blood glucose.  Our portfolio covers roughly 75% of world healthcare expenditures attributed to diabetes.
                </h4>
      </Card.Text>
        </Card.ImgOverlay>
    </Card>
);

export default AboutCard;