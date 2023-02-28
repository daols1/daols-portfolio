import React from 'react'
import './LogoSwipe.css';
import ts from '../../asset/swipe/ts.png';
import slack from '../../asset/swipe/slack.png';
import react from '../../asset/swipe/react.png';
import github from '../../asset/swipe/gitub.png';
import webpack from '../../asset/swipe/webpack.png';
import redux from '../../asset/swipe/redux.png';
import javascript from '../../asset/swipe/javascript.png'; 

function LogoSwipe() {
  return (
    <div className='logo-swipe'>
      {/* {
        data.map((data) => {
          return(
            <>
              <img src={data.img} className='team-div-img' />
            </>
          )
        })} */}
      {/* <img src={ts} className='team-div-img' />
      <img src={react} className='team-div-img' />
      <img src={github} className='team-div-img' />
      <img src={javascript} className='team-div-img' />
      <img src={redux} className='team-div-img' />
      <img src={webpack} className='team-div-img' />
      <img src={slack} className='team-div-img' /> */}
      
    </div>
  )
}

export default LogoSwipe