import React from "react";
import ImgOverlayExample from '../components/chooseProgram'
import Frame from "../components/imageLeftText/Frame";
import SectionTitle from "../components/sectionTitle";


function Homepage() {
    return (
        <div>
            <Frame isDefaultContent={true} />
            <SectionTitle title={'ΠΡΟΓΡΑΜΜΑ'} />
            <ImgOverlayExample/>
        </div>
    );
}

export default Homepage;