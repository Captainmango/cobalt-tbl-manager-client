import React, { useState } from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';
import { useHistory, Link } from 'react-router-dom'
import FormControl from 'react-bootstrap/FormControl';
import { logInUser } from '../../Actions/userActions';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';



const LogInInput = (props) => {

    let history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.logIn({username, password});
        setUsername("");
        setPassword("");
        history.push("/");
    }

    const handleOnCancel = (event) => {
        event.preventDefault();
        setUsername("");
        setPassword("");
        history.push("/");
    }

        return (
            <Container className="pt-2">
                <h2 className="text-center pb-3">Log in</h2>
                <Row className="justify-content-center">
                    <Col lg={{span: 5}}>
                <Form>
                    <Form.Row className="p-2">
                    <FormControl
                        value = {username}
                        onChange={ (event) => setUsername(event.target.value) }
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name="username"
                    />
                    </Form.Row>
                    
                    <Form.Row className="p-2">
                    <FormControl
                        value = {password}
                        onChange={ (event) => setPassword(event.target.value) }
                        placeholder="Password"
                        aria-label="Password"
                        type="password"
                        name="password"
                    />
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <Button className="m-2" variant="success" onClick={ (event) => { handleOnSubmit(event); } }>Log in</Button>
                        <Button className="m-2" variant="danger" onClick={ (event) => { handleOnCancel(event); } }>Cancel</Button>
                    </Form.Row>
                    <Form.Row className="justify-content-center">
                        <Link to="/signup">Don't have an account? Sign up here</Link>
                    </Form.Row>
                    </Form>

                    
                    </Col>
                    </Row>

                    

            </Container>
        )
    }




const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => dispatch(logInUser(user)),
    }
}
export default connect(null, mapDispatchToProps)(LogInInput)
