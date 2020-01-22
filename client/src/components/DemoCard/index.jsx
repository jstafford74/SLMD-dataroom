import React from "react";
import { Card } from "react-bootstrap";
import science from "../images/science.png";

const Style = {
    title: {
        marginBottom: 0,
        color:"black"
    },
    img: {
        opacity: .8
    },
    overlay:{
        paddingTop:0
    }
}
const DemoCard = () => (
    <Card>
        <Card.Img variant="top" src={science} style={Style.img} />
        <Card.ImgOverlay style={Style.overlay}>
            <Card.Title style={Style.title} className="d-none d-md-block">
                <blockquote class="blockquote">
                    <h1>
                        THE SCIENCE
                    </h1>
                </blockquote>
            </Card.Title>


        </Card.ImgOverlay>
    </Card>
);

export default DemoCard;