import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <React.Fragment>
            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="/about">About</NavLink>
            <NavLink className="navLink" to="/contact">Contact</NavLink>
        </React.Fragment>
    );
}

export default Navigation;