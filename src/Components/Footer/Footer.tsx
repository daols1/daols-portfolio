import React from 'react';
import Logo from '../../asset/Logo.png'
import {AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
// import {FaPhoneSquareAlt} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='footer container'>
        <img src={Logo} alt="" className='logo logo1' />
        <h1>Let's Talk With Me!</h1>
        <p>I am always open discuss your project, improve your <br/> online presence or help with your Web Development Project</p>
        <div className='socials'>
            <a href="https://twitter.com/DAVIDLADIPO2"><AiFillTwitterCircle size={40} className='icons' /></a>
            <a href="https://www.linkedin.com/in/david-ladipo-b4a97b20a/"><AiFillLinkedin size={40} className='icons' /></a>
            <a href="https://web.facebook.com/david.ladipo.9237"><AiFillFacebook size={40} className='icons' /></a>
            <a href="https://www.instagram.com/ladav_great/?hl=en"><AiFillInstagram size={40} className='icons' /></a>
            <a href="https://github.com/daols1"><AiFillGithub size={40} className='icons' /></a>
        </div>
    </div>
  )
}

export default Footer