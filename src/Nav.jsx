import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
<div className="nav-bar">
    <Link to="/details">
    <h1 style={{color:"white"}}>Click here for details.</h1>
    </Link>
</div>
    );
}

export default Nav;