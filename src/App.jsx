import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Video from './components/Video/video'


const App = () => {
  const [playState, setPlayState]= useState(false);
  
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Title subtitle='our programs' title='what we offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subtitle='Gallery' title='Campus photos'/>
      <Campus/>
      <Title subtitle='testimonials' title='What our student says'/>
      <Testimonial/>
      <Title subtitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
