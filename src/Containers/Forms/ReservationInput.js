import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { postReservation } from '../../Actions/reservationsActions'
import NoRoute from '../../Components/NoRoute';

export const ReservationInput = (props) => {

    let history = useHistory()

    const {id, diners} = useParams()
    const user_id = props.user.id
    const restaurant = props.restaurants.find( restaurant => restaurant.id === id )

    const [time, setTime] = useState("");
    const [numberOfDiners, setNumberOfDiners] = useState(diners);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.createReservation(user_id, {restaurant_id: restaurant.id,
                                            time,
                                            diners});
                    
        setTime("");
        setNumberOfDiners("");
        history.push("/")
    }
       
    return (
        restaurant ? 
            <div>
                <Container className="bg-light container-md">
                    <Row className="m-3 p-3 justify-content-lg-center bg-light">

                        <img src={restaurant.attributes.image+"/300x300"} alt="restaurant"></img>
                    </Row>    
                    <Row className="justify-content-lg-center">
                    <h5>{restaurant.attributes.name}</h5>
                    </Row>
                    <Row className="justify-content-lg-center">    
                    <p>{restaurant.attributes.address}</p>
                    </Row>
                    <Row className="mb-3 mt-3 justify-content-lg-center bg-light">
                        <Form className="p-3">
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Date/ Time</Form.Label>
                                <Form.Control value={time} onChange={event => setTime(event.target.value)} name="datetime" type="datetime-local" />
                            </Form.Group>

                            <Form.Group controlId="formBasicDiners">
                                <Form.Label>Diners</Form.Label>
                                <Form.Control value={numberOfDiners} onChange={event => setNumberOfDiners(event.target.value)} name="number_of_diners" type="number" min="1" step="1" />
                            </Form.Group>


                            <Form.Row className="justify-content-center">
                                <Button variant="primary" type="submit" onClick={ event => { handleOnSubmit(event) }} >
                                    Submit
                                </Button>
                            </Form.Row>
                        </Form>
                    </Row>
                </Container>
            </div> :
            <NoRoute />
        
            // <div>
            //     <Container className="bg-light container-md">
            //         <Row className="m-3 p-3 justify-content-lg-center bg-light">

            //             <img src={restaurant.attributes.image+"/300x300"} alt="restaurant"></img>
            //         </Row>    
            //         <Row className="justify-content-lg-center">
            //         <h5>{restaurant.attributes.name}</h5>
            //         </Row>
            //         <Row className="justify-content-lg-center">    
            //         <p>{restaurant.attributes.address}</p>
            //         </Row>
            //         <Row className="mb-3 mt-3 justify-content-lg-center bg-light">
            //             <Form className="p-3">
            //                 <Form.Group controlId="formBasicTime">
            //                     <Form.Label>Date/ Time</Form.Label>
            //                     <Form.Control value={time} onChange={event => setTime(event.target.value)} name="datetime" type="datetime-local" />
            //                 </Form.Group>

            //                 <Form.Group controlId="formBasicDiners">
            //                     <Form.Label>Diners</Form.Label>
            //                     <Form.Control value={numberOfDiners} onChange={event => setNumberOfDiners(event.target.value)} name="number_of_diners" type="number" min="1" step="1" />
            //                 </Form.Group>


            //                 <Form.Row className="justify-content-center">
            //                     <Button variant="primary" type="submit" onClick={ event => { handleOnSubmit(event) }} >
            //                         Submit
            //                     </Button>
            //                 </Form.Row>
            //             </Form>
            //         </Row>
            //     </Container>
            // </div>
        
            
        )
    }


const mapStateToProps = (state) => {
    return {
    restaurants: state.restaurants.restaurants,
    user: state.users.user,
    requesting: state.reservations.requesting
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (user_id, reservation) => {dispatch(postReservation(user_id, reservation))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationInput);
