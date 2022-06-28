import React from 'react';
import logo from '../img/logo.svg';

export default function Navbar(){
    return(
        <nav className='logo'>
            <div className='nav-left'>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <h3 className='logo-text'>ReactFacts</h3>
                </div> 
            </div>
            <h4 className='course'>React Course - Project 1</h4>
        </nav>
    )
}