import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './article.css';

function Article() {
    return (
        <Container>
            <Row className="custom-row gx-0"> {/* You can adjust the value '2' as per your requirement */}
                <Col xs={6} md={4}>
                    <Image src="/dietfoodpic.jpeg" rounded className="custom-col" />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/dietfoodpic.jpeg" rounded className="custom-col" />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/dietfoodpic.jpeg" rounded className="custom-col" />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/dietfoodpic.jpeg" rounded className="custom-col" />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/dietfoodpic.jpeg" rounded className="custom-col" />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="/dietfoodpic.jpeg" rounded className="custom-col" />
                </Col>
            </Row>
        </Container>
    );
}


export default Article;
