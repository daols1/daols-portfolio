import './AbitAbout.css'
import secondPic from '../../asset/pictwo2.jpg'
import {Link} from 'react-router-dom'

function AbitAbout() {
  return (
    <div className='abit-bout-cont'>
        <div className='img-side'>
          <img src={secondPic} className='second-image' />
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