import React from 'react'
import markhorlogo from '../static/images/Markhorblack.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='Header_box'>
        <div className="logo_box">
            <img src={markhorlogo} alt="" />    
        </div>
        <ul className='tags'>
        <li><a href="/"><span>Home</span></a></li>
        <li><a href="/services"><span>Services</span></a></li>
        <li><a href=""><span>About</span></a></li>
        <li><a href="/projects"><span>Work</span></a></li>
        <li><a href="/contact"><span>Contact</span></a></li>
        <li><a href=""><span>+92 303 6748622</span></a></li>
        </ul>
    </div>
  )
}

export default Header
