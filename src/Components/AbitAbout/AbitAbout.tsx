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
          <p> I a David Ladipo a Web Developer with passiom for creating solutions to real life porblems with my frontend skills. Was born and bread in lagos, Nigeria. During my software development journey i have solved the porblem of may of my clients with ease and efficiency. They gave me the nickname Ladi the mara Dev. My watch word is perfection i love to have contribution to what matters and what truely makes life easier for people. Peace ✌</p>
          <Link to='https://docs.google.com/document/d/1MLKzIjdPHmNBY5FmKGthvGlMA7gp6Scy1GevmiNqzMo/edit?usp=sharing' className='h-m-btn'>Download CV 👴</Link>
        </div>
    </div>
  )
}

export default AbitAbout