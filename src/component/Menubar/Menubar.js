import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/icon/455.JPG'
import Emergency from '../Emergency/Emergency';
import './Menubar.css'


const Menubar = () => {
    const {handleSignOut,user} = useAuth();
    return (
        <div>
            <Emergency></Emergency>
            
            
            <div class="border-style">
            <Navbar bg="#E5EEF3" expand="lg">
  <Container className="p-xl-1">
  <Navbar.Brand>
  <NavLink className="" to="/home" activeStyle={{fontWeight: "bold", color: "red"}}><img className="img-fluid" src={logo} alt="" /></NavLink>
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mx-lg-auto ">
      <div className="container-fluid ">
                    {/* btn deleted */}
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarSupportedContent ">
                        
                        <ul className=" navbar-nav me-auto mx-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item me-auto mt-2">
                                <NavLink className="text-decoration-none me-5 color" to="/home" activeStyle={{fontWeight: "bold",color: "red"}}>Home</NavLink>
                            </li>
                            
                        
                            <li className="nav-item me-auto mt-2">
                                <NavLink className="text-decoration-none me-5 color" to="/services" activeStyle={{fontWeight: "bold",color: "red"}}>Services</NavLink>
                            </li>
                            
                            
                            <li className="nav-item me-auto mt-2">
                                <NavLink className="text-decoration-none me-5 color" to="/detail" activeStyle={{fontWeight: "bold",color: "red"}}>Details</NavLink>
                            </li>
                            

                            <li className="nav-item me-auto mt-2">
                                <NavLink className="text-decoration-none me-5 color" to="/contact" activeStyle={{fontWeight: "bold",color: "red"}}>Contact</NavLink>
                            </li>

                            <li className="nav-item me-auto mt-2">
                                <NavLink className="text-decoration-none me-5 color" to="/aboutUs" activeStyle={{fontWeight: "bold",color: "red"}}>About Us</NavLink>
                            </li>

                            <li className="me-auto mt-2">
                            {user.email && <span className="me-auto mt-2" style={{ color: 'black' }}>Hello {user.displayName} </span>}
                            </li>
                            {
                                user.email?<li className="me-auto mt-2">
                                    <button className="btn btn-danger ms-0 btn-sm ms-lg-4" onClick={handleSignOut}>Sign Out</button>
                                </li>
                            :
                                <li className="nav-item me-auto mt-2">
                                    <NavLink className="text-decoration-none me-5 color" to="/login"        activeStyle={{fontWeight: "bold",color: "red"}}>Login</NavLink>
                                </li>
                            
                            }
      </ul>
    </div>
  </div>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        </div>
    );
};

export default Menubar;