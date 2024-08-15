import React from 'react'
import './Campus.css'
import gal1 from '../../assets/gallery-1.png'
import gal2 from '../../assets/gallery-2.png'
import gal3 from '../../assets/gallery-3.png'
import gal4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'


const  Campus= () => {
  return (
      <div className="campus">
        <div className="gallery">
        <img src={gal1} alt="" />
        <img src={gal2} alt="" />
        <img src={gal3} alt="" />
        <img src={gal4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={arrow} alt="" /></button>
      </div>
  )
}

export default Campus
