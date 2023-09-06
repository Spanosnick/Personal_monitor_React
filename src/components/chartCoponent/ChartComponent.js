import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import SimpleChart from './SimpleChart';

function ChartComponent({ date }) {
    const [activeTab, setActiveTab] = useState('Σήμερα'); // Initial active tab

    return (
        <Card className="text-start chooseProgram">
            <Stack className="mx-auto cardLabels my-2" direction="horizontal" gap={5}>
                <div className={activeTab === 'Σήμερα' ? "p-2 active" : "p-2"} onClick={() => setActiveTab('Σήμερα')}>
                    <h3>Σήμερα </h3>
                </div>

                <div className={activeTab === 'Εβδομαδιαίο' ? "p-2 active" : "p-2"} onClick={() => setActiveTab('Εβδομαδιαίο')}>
                    <h3>Εβδομαδιαίο </h3>
                </div>

                <div className={activeTab === 'Μηνιαίο' ? "p-2 active" : "p-2"} onClick={() => setActiveTab('Μηνιαίο')}>
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
