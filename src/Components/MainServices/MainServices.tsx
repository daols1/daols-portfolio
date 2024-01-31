import './MainServices.css'
// import { useState } from 'react'
import { motion } from 'framer-motion'
import { BiCodeAlt } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { BsEmojiSunglasses, BsClipboardData } from 'react-icons/bs';
import { GiPaintBrush, GiGuitar } from 'react-icons/gi';

function MainServices() {

    // const [selectedId, setSelectedId] = useState(null)

    // const items = [
    //     {
    //         id: 1,
    //         subtitle: 'Hello',
    //         title:'This are the titles'
    //     },
    //     {
    //         id: 2,
    //         subtitle: 'Hello',
    //         title:'This are the titles'
    //     },
    //     {
    //         id: 3,
    //         subtitle: 'Hello',
    //         title:'This are the titles'
    //     },
    //     {
    //         id: 4,
    //         subtitle: 'Hello',
    //         title:'This are the titles'
    //     },
    // ]

  return (
    <div className='my-services'>
      <h1>My Services</h1>
      <div className='services-grid-contaier'>
        <motion.div 
        className='services-gird-item'
        initial={{
          x:-100,
          opacity:0.3
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          // damping:80,
          // duration:0.8,
        }}
        whileHover={{
          scale:1.05,
          y:-20,
        }}
        whileTap={{
          scale:0.8,
        }}
        >
          <BiCodeAlt size={40} />
          <h2>Web Development</h2>
          <p>I offer the services of a web developer, I use my web development skills to solve problems for my porspects and make life easier for people. React, strapi and its major tooling i what i use to make world class web solutions.</p>
        </motion.div>
        <motion.div 
        className='services-gird-item'
        initial={{
          // x:-100,
          opacity:0.3
        }}
        whileInView={{
          // x:0,
          opacity:1,
        }}
        transition={{
          // damping:80,
          // duration:0.8,
        }}
        whileHover={{
          scale:1.05,
          y:-20,
        }}
        whileTap={{
          scale:0.8,
        }}
        >
          <GiPaintBrush size={40} />
          <h2>Web Design</h2>
          <p>Web design refers to the process of creating the visual and functional elements of a website. It involves the use of various design principles and tools to create a website that is aesthetically pleasing, easy to navigate, and functional.</p>
        </motion.div>
        <motion.div 
        className='services-gird-item'
        initial={{
          x:100,
          opacity:0.3
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          // damping:80,
          // duration:0.8,
        }}
        whileHover={{
          scale:1.05,
          y:-20,
        }}
        whileTap={{
          scale:0.8,
        }}
        >
          <GiGuitar size={40} />
          <h2>Gigging 🤘</h2>
          <p>I am a porfessional bass player. i love to make and play music generally. I have ABRSM theory Grade 4 in music and i am good at what i do. 🎸🎸</p>
        </motion.div>
        <motion.div 
        className='services-gird-item'
        initial={{
          x:-100,
          opacity:0.3
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          // damping:80,
          // duration:0.8,
        }}
        whileHover={{
          scale:1.05,
          y:-20,
        }}
        whileTap={{
          scale:0.8,
        }}
        >
          <AiFillCamera size={40} />
          <h2>Photography</h2>
          <p>One of my hobbies is taking photos i love snapping pictures and i do it professionally, i you have an event or you need a session please dont forget to hit me up.</p>
        </motion.div>
        <motion.div 
        className='services-gird-item'
        initial={{
          // x:-100,
          opacity:0.3
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          // damping:80,
          // duration:0.8,
        }}
        whileHover={{
          scale:1.05,
          y:-20,
        }}
        whileTap={{
          scale:0.8,
        }}
        >
          <BsEmojiSunglasses size={40} />
          <h2>Leadership</h2>
          <p>Beign a leader is one of my core values most of my friends know me to be a leader, be it at work, school, at normal day to day activities, i am known to be a good leader among my peers
          </p>
        </motion.div>
        <motion.div 
        className='services-gird-item'
        initial={{
          x:100,
          opacity:0.3
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        transition={{
          // damping:80,
          // duration:0.8,
        }}
        whileHover={{
          scale:1.05,
          y:-20,
        }}
        whileTap={{
          scale:0.8,
        }}
        >
          <BsClipboardData size={40} />
          <h2>Data Science</h2>
          <p>I am also a data scientist in the making. In my bid to make life easier or people i descovered that i need to get the skills of a data scientist, this skill has really opened my eyes and thaught me a lot about tech</p>
        </motion.div>
      </div>
    </div>
  )
}

export default MainServices