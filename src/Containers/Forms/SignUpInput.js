import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import { createNewUser } from '../../Actions/userActions'


const SignUpInput = (props) => {

    let history = useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [mobile_number, setMobileNumber] = useState("")
    const [email_address, setEmailAddress] = useState("")

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.createUser({username, 
                          password, 
                          first_name, 
                          last_name, 
                          mobile_number, 
                          email_address});
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setEmailAddress("");

        history.push('/');
    }

    const handleOnCancel = (event) => {
        event.preventDefault();
        setUsername("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setMobileNumber("");
        setEmailAddress("");

        history.push('/');
        
    }

        return (
            <div>
                <Container>
                <h2 className="text-center p-3">Log in</h2>
                <Row className="justify-content-center">
                <Form>
                    
                    <Form.Group className="pl-3 pr-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email_address} onChange={event => setEmailAddress(event.target.value)} name="email_address" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    

                    <Form.Group className="pl-3 pr-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} onChange={event => setUsername(event.target.value)} name="username" type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="pl-3 pr-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={event => setPassword(event.target.value)} name="password" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="pl-3 pr-3" controlId="formBasicFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control value={first_name} onChange={event => setFirstName(event.target.value)} name="first_name" type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group className="pl-3 pr-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control value={last_name} onChange={event => setLastName(event.target.value)} name="last_name" type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group className="pl-3 pr-3" controlId="formBasicMobile">
                        <Form.Label>Mobile number</Form.Label>
                        <Form.Control value={mobile_number} onChange={event => setMobileNumber(event.target.value)} name="mobile_number" type="tel" placeholder="Mobile number" />
                        <Form.Text className="text-muted">
                        The same goes for your number. Please make sure to include your dial code.
                        </Form.Text>
                    </Form.Group>   
                                
                    <Form.Row className="justify-content-center">
                    <Button className="m-2" variant="success" type="submit" onClick={event => handleOnSubmit(event)}>
                        Submit
                    </Button>

                    <Button className="m-2" variant="danger" onClick={event => handleOnCancel(event)}>
                        Cancel
                    </Button>

                    </Form.Row>
                    </Form>
                </Row>
                </Container>
            </div>
        )
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createNewUser(user))
    }
}

export default connect(null, mapDispatchToProps)(SignUpInput)
