import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png' 

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for better future</h1>
            <p>We empower students with knowledge, skills and experience needed in dynamic field of education </p>
            <button className='btn'>Know More <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
