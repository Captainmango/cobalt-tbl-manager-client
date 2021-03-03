import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SearchInput from '../Containers/Forms/SearchInput';


const Home = () => {
    return (
        <Container fluid className="bg-info mt-5">
            <Row>
                <Col lg={{span: 8}}>
                    <h1 className="ml-4 pt-3 text-white"> Cobalt Table Manager</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={{span: 8}} className="m-4 pb-5 text-white">
                    <p>Book at your favourite restaurants in seconds and manage your bookings online</p>
                </Col>
            </Row>

            <Row className="justify-content-lg-center">
                <Col lg={{span: 8}} className="">
                    <SearchInput />
                </Col>
            </Row>
            
        </Container>
    )
}



export default Home;