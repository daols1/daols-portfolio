import React from 'react'
import './Portfolio.css'
import PortfolioSelf from './PortfolioSelf'


function Portfolio() {

  return (
    <div className='portfolio' >
      <h1>My Portfolio</h1>
      <div>This is a short description of some  of my projects.</div>
        <PortfolioSelf />
    </div>
  )
}

export default Portfolio
