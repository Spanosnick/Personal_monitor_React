import React from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Container, Row, Col } from 'react-bootstrap';
import SimpleChart from './SimpleChart';

function ChartComponent({ date }) {


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
            <SimpleChart/>

        </Card>
    );
}

export default ChartComponent;
