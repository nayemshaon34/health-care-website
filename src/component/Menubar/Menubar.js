import userEvent from '@testing-library/user-event';
import React from 'react';
import { NavLink } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import logo from '../../images/icon/455.JPG'
import Emergency from '../Emergency/Emergency';
import './Menubar.css'

initializeAuthentication();

const Menubar = () => {
    return (
        <div>
            <Emergency></Emergency>
            <div className="d-flex justify-content-evenly align-items-center header h-16 ">
            
            <NavLink className="" to="/home" activeStyle={{fontWeight: "bold", color: "red"}}><img className="img-fluid" src={logo} alt="" /></NavLink>
            <NavLink className="" to="/home" activeStyle={{fontWeight: "bold", color: "red"}}>Home</NavLink>
            <NavLink className="" to="/services" activeStyle={{fontWeight: "bold", color: "red"}}>Services</NavLink>
            <NavLink className="" to="/aboutUs" activeStyle={{fontWeight: "bold", color: "red"}}>Details</NavLink>
            <NavLink className="" to="/contact" activeStyle={{fontWeight: "bold", color: "red"}}>Contact</NavLink>
            <NavLink className="" to="/detail" activeStyle={{fontWeight: "bold", color: "red"}}>About Us</NavLink>
            <NavLink className="" to="/login" activeStyle={{fontWeight: "bold", color: "red"}}>Login</NavLink>
            {
                
            }
        </div>
        </div>
    );
};

export default Menubar;