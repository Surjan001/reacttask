import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {

    return(
        <div className='nav_root'>
            <div className='nav_text'>
                <h1>Welcome to our new project</h1>
            </div>
            <div className='nav_main'>
                <Link className='navlink' to='/home'>Home</Link>
                <Link className='navlink' to='/login'>Log In</Link>
                <Link className='navlink' to='/register'>Registration</Link>
            </div>
        </div>
    );
}

export default Nav;