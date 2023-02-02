import React from 'react';
import Logo from '../../asset/Logo.png'
import {AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {FaPhoneSquareAlt} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='footer container'>
        <img src={Logo} alt="" className='logo logo1' />
        <h1>Let's Talk With Me!</h1>
        <p>I am always open discuss your project, improve your <br/> online presence or help with your Web Development Project</p>
        <div className='socials'>
            <a href=""><AiFillTwitterCircle size={40} className='icons' /></a>
            <a href=""><AiFillLinkedin size={40} className='icons' /></a>
            <a href=""><AiFillFacebook size={40} className='icons' /></a>
            <a href=""><AiFillInstagram size={40} className='icons' /></a>
            <a href=""><FaPhoneSquareAlt size={40} className='icons' /></a>
        </div>
    </div>
  )
}

export default Footer