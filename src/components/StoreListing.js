import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image"
import Aldi from '../images/Aldi.webp'
import Food_Lion from '../images/Food_Lion.webp'
import Publix from '../images/Publix.webp'
import Sprouts from '../images/Sprouts.webp'

function StoreListing() {

    return(
        <Container fluid style={{ marginTop: "750px", textAlign: "center" }} >
            <h2>Browse stores in Charlotte</h2>
            <Row>
                <Row  style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col>
                        <Image className="img" src={Aldi} alt='Aldi logo' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold", paddingTop: '1em' }}>ALDI</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm={1}></Col>
                <Row  style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col>
                        <Image className="img" src={Food_Lion} alt='Food Lion logo' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold", paddingTop: '1em' }}>Food Lion</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm={1}></Col>
                <Row  style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col>
                        <Image className="img" src={Publix} alt='Publix logo' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold", paddingTop: '1em' }}>Publix</h5>
                        <p>Delivery and Pickup</p>
                    </Col>
                </Row>
                <Col sm={1}></Col>
                <Row  style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}}>
                    <Col >
                        <Image className="img" src={Sprouts} alt='Sprouts logo' roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold", paddingTop: '1em' }}>Sprouts</h5>
                        <p>Pickup</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default StoreListing