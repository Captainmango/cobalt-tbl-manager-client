import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, InputGroup, Button, FormControl, Form } from 'react-bootstrap'

const Restaurant = (props) => {
    let history = useHistory()
    const [diners, setDiners] = useState(0)

    const handleOnSubmit = (event) => {
        event.preventDefault()

        // This is for sure anit-pattern. But, making a new reducer for 
        // one piece of functionality is silly and mixing in context is messy
        
        history.push(`/reservations/new/id/${props.id}/diners/${diners}`)
    }

    return (
        <Row className="mb-3 mt-3 justify-content-lg-center bg-light">
            <Col>
                <div style={{display: 'flex', justifyContent: 'center' }}>
                    <div>    
                        <img src={props.img} alt="restaurant"></img>
                    </div>
                </div>
            </Col>

            <Col lg={{ span: 5}} className="align-self-center">
                <div><h5>{props.name}</h5></div>
                <div><h5>{props.address}</h5></div>
            </Col>

            <Col className="align-self-center">
                <h3>
                  Rating: {props.rating} 
                </h3>
            </Col>

            <Col lg={{span: 3}} className="align-self-center">
                <Form inline>
                <InputGroup size="md">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" onClick={() => setDiners( diners > 0 ? diners - 1 : 0 ) }> - </Button>
                    </InputGroup.Prepend>
                    <FormControl readOnly={true} min="0" className="text-center" style={{display: "inline"}} type="number" value={diners} onChange={() => setDiners(diners)}></FormControl>
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => {setDiners(diners + 1)}}> + </Button>
                        <Button variant="primary" onClick={ event => handleOnSubmit(event) }> Reserve Now </Button>
                    </InputGroup.Append>

                </InputGroup>
                </Form>
            </Col>
        </Row>

    )
}

export default Restaurant;