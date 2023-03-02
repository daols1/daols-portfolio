import React from 'react';
import AbitAbout from '../../Components/AbitAbout/AbitAbout';
import Footer from '../../Components/Footer/Footer';
import HomeMain from '../../Components/HomeMain/HomeMain';
import LogoSwipe from '../../Components/LogoSwipe/LogoSwipe';
import Menu from '../../Components/Main-menu/Menu';
import MainServices from '../../Components/MainServices/MainServices';

function Home() {
  return (
    <div className='container'>
      <HomeMain/>
      <LogoSwipe/>
      <AbitAbout />
      <MainServices />
    </div>
  )
}

export default Home
