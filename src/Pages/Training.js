import React from 'react'
import '../Section/CoachSection.css'
import img1 from '../Section/Images/image1.jpg'
import img7 from '../Section/Images/image7.jpg'
import img6 from '../Section/Images/image6.jpg'
import img5 from '../Section/Images/image5.jpg'
import { NavLink } from 'react-router-dom'
export default function Training() {
  return (
    <div id='training'>
      <div className='mContent'>
    <div className='wrapper'> 
    <h1>Meet Our Team</h1> 
    </div>
    <p className='Para'>
        We are a team of experienced people,nutrition,sports andd fitness passionate experts with talent
        and knowledge unsurpassed in the industry.get to know us.
    </p>
   
      <div className='image-style' >
      <img className='image' src={img1} alt='gym.jpg'/>
      <img className='image' src={img7} alt='gym.jpg'/>
      <img className='image' src={img6} alt='gym.jpg'/>
      <img className='image' src={img5} alt='gym.jpg'/>
      
       
      
      </div>
      <span className='mentor'>
      <h3>Soumya Tripathi </h3>
      <h3>Tripti Sharma</h3>
      <h3>Parag Kumar</h3>
      <h3>Disha Kriplani</h3>
      </span>
      <button className='btnmeet'> <NavLink exact to='/wholeteam' className='navlogo' >
      SEE THE WHOLE TEAM
        </NavLink></button>
    </div>
    </div>
  )
}
