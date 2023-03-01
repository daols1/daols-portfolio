import './AbitAbout.css'
import secondPic from '../../asset/pictwo2.jpg'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

function AbitAbout() {

  return (
    <div className='abit-bout-cont'>
        <div className='img-side'>
          <motion.div 
          className='circles c1'
          drag
          dragSnapToOrigin
          whileInView={{
            scale:[1.2, 1.5, 0.4, 1],
            x:[0, 100, 30, 0],
            y:[0, 100, 30, 0],
            borderRadius:['50%', '20%', '20%', '50%'],
            rotate:[0, 360, 180, 0]
          }}
          transition={{
            duration:10,
            stiffness:1000,
          }}
          >
          </motion.div>
          <motion.div 
          className='circles c2'
          whileInView={{
            x:[-30, 0],
            y:[200, 0],
          }}
          transition={{
            duration:3
          }}
          
          >

          </motion.div>
          <motion.div
            whileInView={{
              opacity: 1,
              y:0,
            }}
            initial={{
              opacity:0.2,
              y:250,
            }}
            transition={{
              type:'spring',
              stiffness: 130,
              duration:1.8,
            }}
            
            >
            <img src={secondPic} className='second-image' />
          </motion.div>
        </div>
        <div className='txt-side'>          
          <h1> Bit About Me</h1>
          <p>Lorem ipsum dolor it, amet consectetur adipisicing elit. Officiis sapiente porro ut voluptatem quibusdam? Iusto, vero maiores ea nobis necessitatibus, placeat eligendi, ex incidunt culpa voluptas odit? Natus, sit culpa?</p>
          <Link to='' className='h-m-btn'>Download CV 👴</Link>
        </div>
    </div>
  )
}

export default AbitAbout