import React from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import MealCard from '../components/MealCard'
import { Container, Row, Col } from 'react-bootstrap';

function ImgOverlayExample({ date }) {

    const data = [
        { src: 'meal1.png', text: 'Πρωινό' },
        { src: 'meal2.png', text: 'Δεκατιανό' },
        { src: 'meal3.png', text: 'Μεσημεριανό' },
        { src: 'meal4.png', text: 'Βραδινό' },
    ];

    return (
        <Card className="text-start chooseProgram">
            <Stack className="mx-auto cardLabels my-2" direction="horizontal" gap={5}>
                <div className="p-2 active ">
                    <h3>Σήμερα </h3>
                </div>

                <div className="p-2">
                    <h3>Εβδομαδιαίο </h3>
                </div>

                <div className="p-2">
                    <h3>Μηνιαίο </h3>
                </div>
            </Stack>
            <div className="col-12 text-center ">
                <h4 id='dateLabel'> {date || '14/06/2023'}</h4>
            </div>

            <Container>
                <Row>
                    {data.map((meal, index) => (
                        <Col key={index} xs={6} md={3}>
                            <MealCard src={meal.src} text={meal.text} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Card>
    );
}

export default ImgOverlayExample;
