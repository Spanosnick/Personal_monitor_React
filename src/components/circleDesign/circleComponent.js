import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import './circleComponent.css';
import bellIcon from './bell_icon.svg';

function CircleComponent() {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={3}>
                    <p>
                        "Η διατροφή είναι η επένδυση που κάνουμε στον εαυτό μας. Κάθε μικρή επιλογή φαγητού είναι ένα βήμα προς μια ζωή γεμάτη ενέργεια και ευεξία."
                    </p>
                </Col>
                <Col xs={12} md={9} className="text-center mt-5">
                    <div className="outer-circle">
                        <div className="text-area-1">
                            Στόχος: 60 κιλά <br/>
                            Έως: 01-12-2023<br/>
                        </div>
                        <div className="text-area-2">
                            Έναρξη: 04-05-2023<br/>
                            Ηλικία: 23<br/>
                            Κιλά: 75
                        </div>
                        <img src={bellIcon} alt="Bell Icon" className="bell-icon"/>
                        <div className="inner-circle">
                            <Image src="/profileImg.png" roundedCircle fluid />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CircleComponent;
