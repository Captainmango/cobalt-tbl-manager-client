import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const Reservation = (props) => {

    let history = useHistory()

    return (
        <Row className="mb-3 mt-3 justify-content-lg-center bg-light">
            <Col onClick={event => history.push(`/reservations/${props.id}`) }>
                <div style={{display: 'flex', justifyContent: 'center' }}>
                    <div>    
                        <img src={props.img} alt="restaurant"></img>
                    </div>
                </div>
            </Col>
            <Col onClick={event => history.push(`/reservations/${props.id}`) } lg={{ span: 5}} className="align-self-center">
                <div><h5>{props.name}</h5></div>
                <div><h5>{props.address}</h5></div>
            </Col>

            <Col onClick={event => history.push(`/reservations/${props.id}`) } lg={{ span: 2}} className="align-self-center">
                <div><h5> {props.diners} Diners  </h5></div>
            </Col>

            <Col lg={{span: 3}} className="align-self-center">
                {props.rating}
            </Col>
        </Row>
    )
}

export default Reservation;