import React, { useState, useRef } from 'react';
import './Menu.css';
import Logo from '../../asset/Logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

function Menu() {

    // State logic

    const [nav, setNav] = useState(false);
    const [width, setWidth] = useState(false);

    const widthChecker = useRef([window.innerWidth]).current[0] <= 650

    const iconHandler = () =>{
        setNav(!nav)
    }

    // Screen Logic 



  return (
    <div className='main-menu-container container'>
        <div>
            <img src={Logo} alt="" className='logo' />
        </div>
    {widthChecker === false  ?
        <>
            <div className='menu-itself'>
                <ul className='unlisted'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <div className='contact-btn-aside btn'>
                <Link to='' className='btn contact-btn gradient-bg-btn '>Contact</Link>
            </div>
        </>
        :
        <>
            <div className='mobile-menu'>
                {nav === false ?
                    <AiOutlineMenu size={35} onClick={iconHandler} />
                :
                    <div className='mobile-menu-div'>
                        <div className='mobile-menu'>
                            <ul className='unlisted'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                            </ul>
                            <Link to='' className='btn contact-btn gradient-bg-btn '>Contact</Link>
                        </div>
                        <GiCancel size={35} onClick={iconHandler} />
                    </div>
                }
            </div>
        </>

    }
    </div>
  )
}

export default Menu
