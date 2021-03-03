import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import logo from '../icons/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';



const CobaltNavBar = (props) => {
    const isLoggedIn = props.isLoggedIn;

    return(
        <>
        <Navbar collapseOnSelect className="justify-content-center" bg="light" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                <Nav className="justify-content-center">
                <Navbar.Brand><Link to= "/"><img src={logo} alt="cobalt-logo"/> Cobalt</Link></Navbar.Brand>
                    

                {isLoggedIn ? <NavLink className="ml-3 mr-3 align-self-center" to="/logout">Log out</NavLink> : <NavLink className="ml-3 mr-3 align-self-center" to="/login">Login/ Sign up</NavLink>}
                
                <NavDropdown className="align-self-center" disabled={!isLoggedIn} title={isLoggedIn ? `${props.user.first_name} ${props.user.last_name}` : "Dropdown"} id="basic-nav-dropdown">
                    <NavLink to="/reservations">My Reservations</NavLink> <br />
                    <NavLink to="/restaurants" >Restaurants</NavLink> <br />                  
                </NavDropdown>
                </Nav>      
            </Navbar.Collapse>
        </Navbar>
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user,
        isLoggedIn: state.users.isLoggedIn
    }
}




export default connect(mapStateToProps)(CobaltNavBar);
