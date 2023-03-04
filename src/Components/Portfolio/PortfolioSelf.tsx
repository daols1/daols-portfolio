import React, { useState, useRef } from 'react'
import './Portfolio.css'
import { data } from '../../asset/Data/data'
import {BiLink} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function PortfolioSelf() {

    // const [isClicked, setIsClicked] = useState(true)
    // const currentRef = useRef()
    
    // const handleIsClicked = () => {
    //     setIsClicked(!isClicked)
    //     console.log(isClicked)
    //     // currentRef.current.scrollIntoView()
    // }

  return (
    <div className='grid-container' style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`,
        // backgroundColor: 'red',
        // padding:'20px'
    }}>
        
            {data.map(({id, title, pic, link}) => {
                return(
                    <div key={id} className='portfolio-g-item' >
                        <img src={pic} className='portfolio-image'/>
                        <div className='g-item-txt'>
                            <h3>{title}</h3>
                            <button ><BiLink size={20} color='#fff'/><Link to={link} target="_blank" > Check out</Link></button>    
                        </div>
                    </div>
                )
            })}
        
    </div>
  )
}

export default PortfolioSelf