import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap'
import { searchRestaurants } from '../../Actions/restaurantsActions';

const SearchInput = (props) => {
    let history = useHistory()
    const [searchTerm, setSearchTerm] = useState("")

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.searchRestaurants(searchTerm);
        history.push("/restaurants")        
    }

    return (
        <div className="m-5">
            <Form className="mx-auto">
                <Form.Row className="justify-content-lg-center">
                    <Col lg={{span: 7, offset: 2}} xs={{span: 10}}>
                        <Form.Control onChange={(event) => {setSearchTerm(event.target.value)}} type="text" placeholder="Search restaurants here" />
                    </Col>
                    <Col>
                        <Button variant="warning" type="submit" onClick={(event) => { handleOnSubmit(event)}}>Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    searchRestaurants: (searchTerm) => dispatch(searchRestaurants(searchTerm))
})

export default connect(null, mapDispatchToProps)(SearchInput);
