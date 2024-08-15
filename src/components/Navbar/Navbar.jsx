import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky,setsticky]= useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500 ? setsticky(true) : setsticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' :''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to='programs' smooth={true} duration={500} offset={-260}>Programs</Link></li>
        <li><Link to='about' smooth={true} duration={500} offset={-100}>About</Link></li>
        <li><Link to='campus' smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} duration={500} offset={-260}>Testimonial</Link></li>
        <li> <Link to='contact' smooth={true} duration={500} offset={-260}>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
