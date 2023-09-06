import React from "react";
import CircleComponent from '../components/circleDesign/circleComponent';
import Chart from '../components/chartCoponent/ChartComponent';
import SectionTitle from "../components/sectionTitle";


function Profilepage() {
    return (
        <div>
            <CircleComponent/>
            <SectionTitle title={'ΠΡΟΟΔΟΣ'} />
            <Chart/>
        </div>
    );
}

export default Profilepage;