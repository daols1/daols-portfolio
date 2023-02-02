import React from 'react';
import './Menu.css';
import Logo from '../../asset/Logo.png'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='main-menu-container container'>
        <div>
            <img src={Logo} alt="" className='logo' />
        </div>
        <div className='menu-itself'>
            <ul className='unlisted'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
        </div>
        <div className='contact-btn-aside btn'>
            <p>contact</p>
        </div>
    </div>
  )
}

export default Menu
