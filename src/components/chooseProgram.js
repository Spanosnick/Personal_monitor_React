import React from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import  MealCard from '../components/MealCard'
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from "./sectionTitle";

function ImgOverlayExample({date}) {
    return (<div>
        <SectionTitle title={'ΠΡΟΓΡΑΜΜΑ'}/>
        <Card className=" text-start chooseProgram">
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
                <h4 id='dateLabel'> 14/06/2023</h4>
            </div>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <MealCard  src={'meal1.png'} text={'Πρωινό'}/>
                    </Col>
                    <Col xs={6} md={3}>
                        <MealCard src={'meal1.png'}  text={'Δεκατιανό'}/>
                    </Col>

                    <Col xs={6} md={3}>
                        <MealCard  src={'meal1.png'} text={'Μεσημεριανό'}/>
                    </Col>

                    <Col xs={6} md={3}>
                        <MealCard src={'meal1.png'}  text={'Βραδινό'}/>
                    </Col>


                </Row>
            </Container>



        </Card>
        </div>
    );
}

export default ImgOverlayExample;