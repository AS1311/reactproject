import React, { useRef } from 'react'
import './Testimonial.css'
import nxticon from '../../assets/next-icon.png'
import bckicon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


const Testimonial = () => {
    const slider= useRef();
    let tx=0;
   const slideforward = ()=> {
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
   }
   const slidebackward= ()=> {
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
   } 


  return (
    <div className='testimonial'>
 <img src={nxticon} alt="" className='nxt-btn' onClick={slideforward}/>
 <img src={bckicon} alt="" className='back-btn' onClick={slidebackward}/>
 <div className="slider">
    <ul ref={slider}>
        <li>
            <div className="slide">
            <div className="userinfo">
                <img src={user1} alt="" />
                <div>
                    <h3>Asiti Singh</h3>
                    <span>Edusity, India </span>
                </div>

            </div>
            <p>Best Education in the modern times</p>
            </div>
            </li>

            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={user2} alt="" />
                <div>
                    <h3>Rohit Sharma</h3>
                    <span>Edusity, India</span>
                </div>

            </div>
            <p>Best experience in terms of learning new skills and technologies</p>
            </div>
            </li>

            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={user3} alt="" />
                <div>
                    <h3>Ahana Roy</h3>
                    <span>Edusity, India </span>
                </div>

            </div>
            <p>Experienced faculties and well structured learning programmes</p>
            </div>
            </li>

            <li>
            <div className="slide">
            <div className="userinfo">
                <img src={user4} alt="" />
                <div>
                    <h3>Krish Jain</h3>
                    <span>Edusity, India </span>
                </div>

            </div>
            <p>Good peers and experienced faculties help in overall growth</p>
            </div>
            </li>
    </ul>
 </div>
    </div>
  )
}

export default Testimonial
