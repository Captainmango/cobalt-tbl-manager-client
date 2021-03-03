import React from 'react'
import { connect } from 'react-redux';
import NoRoute from './NoRoute'
import RatingsComponent from './RatingsComponent'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const ReservationView = (props) => {
    let { id } = useParams();
    let reservation = props.reservations.find(reservation => reservation.id === id)

    const handleRouting = () => {
        
        if(reservation ) {
            return <> 
                <Container className="bg-light mt-5">

                    <Row className="justify-content-lg-center"><h2 className="text-center">Booking: {reservation.id}</h2></Row>

                    <Row className="justify-content-lg-center">
                        <img src={reservation.attributes.restaurant.image+'/300x300'} alt="restaurant"></img>
                    </Row>
                    <Row className="justify-content-lg-center">
                        <h5>Restaurant: {reservation.attributes.restaurant.name}</h5>
                    </Row>
                    <Row className="justify-content-lg-center">
                        <h5>Address: {reservation.attributes.restaurant.address}</h5>
                    </Row>
                    
                    <Row className="justify-content-lg-center">
                        <p>Date/ time: {new Date(reservation.attributes.time).toString()}</p>
                    </Row>
                    <Row className="justify-content-lg-center">
                        <p>Diners: {reservation.attributes.diners}</p>
                    </Row>
                    

                    <Row className="justify-content-lg-center">
                        <Col lg={{span: 3}}>
                            <RatingsComponent rating={reservation.attributes.rating} reservation={reservation} />
                        </Col>
                    </Row>

            
                </Container>
            </>
       } else {
            return <> 
                     <NoRoute /> 
                   </> 
                }
    }
    
    return (
        handleRouting(props)
       
    )
}

const mapStateToProps = (state) => (
    {
        reservations: state.reservations.reservations
    }
)
export default connect(mapStateToProps)(ReservationView)
