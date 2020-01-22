import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

const StickyFoot = () => {
    return (
        <footer class="footer mt-auto py-3">
            <Container>
                <ProgressBar striped variant="bg-info" now={100} />

            </Container>
        </footer>


    )
};

export default StickyFoot;