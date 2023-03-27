import React from 'react'
import './CoachSection.css'
import img1 from '../image1.jpg'
import img7 from '../image7.jpg'
import img6 from '../image6.jpg'
import img5 from '../image5.jpg'


export default function CoachSection() {
  
  
  
  return (
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
      <span className='membernamegym'>
      <h3>Soumya Tripathi </h3>
      <h3>Tripti Sharma</h3>
      <h3>Parag Kumar</h3>
      <h3>Disha Kriplani</h3>
      </span>
      <button className='btnmeet'> <NavLink exact to='/wholeteam' className='navlogo' onClick={handleClick}>
      SEE THE WHOLE TEAM
        </NavLink></button>
    </div>
    
  )
}