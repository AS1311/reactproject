import React from 'react'
import './programs.css'
import pro1 from '../../assets/program-1.png'
import pro2 from '../../assets/program-2.png'
import pro3 from '../../assets/program-3.png'
import proi1 from '../../assets/program-icon-1.png'
import proi2 from '../../assets/program-icon-2.png'
import proi3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={pro1} alt="" />
            <div className="caption">
                <img src={proi1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={pro2} alt="" />
            <div className="caption">
                <img src={proi2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={pro3} alt="" />
            <div className="caption">
                <img src={proi3} alt="" />
                <p>Post-Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
