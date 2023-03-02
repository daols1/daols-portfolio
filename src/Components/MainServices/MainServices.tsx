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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore similique ea mollitia, quidem eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisquidem eius!</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore similique ea mollitia, quidem eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisquidem eius!</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore similique ea mollitia, quidem eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisquidem eius!</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore similique ea mollitia, quidem eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisquidem eius!</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore similique ea mollitia, quidem eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisquidem eius!</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore similique ea mollitia, quidem eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendisquidem eius!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default MainServices