import './Loader.css'
import { motion } from "framer-motion-3d"


function Loader() {
  return (
    // <div className="container loader">
    //   {/* <motion.div 
    //   animate={{
    //     x: 2,
    //     y:2, 
    //     z:2, 
    //   }} 
    //   >
    //     <h1 >Loading...</h1>
    //   </motion.div> */}

  <div className="loader">
    <div className="inner one"></div>
    <div className="inner two"></div>
    <div className="inner three"></div>
  </div>
    
    // </div>
  )
}

export default Loader
