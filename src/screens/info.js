import React from "react";
import MainNavbar from '../components/navbar'
import Frame from '../components/imageLeftText/Frame';
import Banner from '../components/imageBanner/ImageBanner';
import Article from '../components/articles/article';
import Faq from '../components/faq/faq';
import SectionTitle from "../components/sectionTitle";

function Infopage(){
    return(
        <div>
            <Frame isDefaultContent={false} />
            <SectionTitle title={'ΑΡΘΡΑ'} />
            <Banner text={'ΑΡΘΡΑ'}/>
            <Article/>
            <Banner text={'Συχνές Ερωτήσεις'}/>
            <Faq/>
        </div>
    );
}

export default Infopage;