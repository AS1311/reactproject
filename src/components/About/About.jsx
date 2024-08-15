import React from 'react'
import './About.css'
import abpic from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
          <img src={abpic} alt="" className='aboutimg'/>
          <img src={playicon} alt="" className='playicon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing tomorrow's leaders today</h2>
        <p>Embark on transformational education journey with our university's comprehensive program </p>
        <p>We offer a diverse range of courses and resources designed to inspire curiosity and foster growth
             at every stage of your academic journey. Whether you're a student seeking to excel, a 
             professional looking to upskill, or simply a lifelong learner, our expertly crafted programs 
             are tailored to meet your unique needs.</p>
             <p>Our vibrant community of educators dedicated to shaping the future 
                of learning. At our platform, you'll find the tools, resources, and support
                 you need to create engaging and impactful educational experiences. 
                 Collaborate with fellow educators, share your expertise, and inspire 
                 students from around the world. Together, we can empower the next 
                 generation of learners and make a lasting difference in education.</p>
      </div>
    </div>
  )
}

export default About
