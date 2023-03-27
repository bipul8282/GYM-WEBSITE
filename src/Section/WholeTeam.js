import React from 'react'
import './CoachSection.css'
import img1 from '../Section/Images/image1.jpg'
import img7 from '../Section/Images/image7.jpg'
import img6 from '../Section/Images/image6.jpg'
import img5 from '../Section/Images/image5.jpg'
import img8 from '../Section/Images/image8.jpg'
import img9 from '../Section/Images/image9.jpg'
import img10 from '..//Section/Images/image10.jpg'
import img11 from '..//Section/Images/image11.jpg'

export default function WholeTeam() {
  return (
    <div className='teamBG'>
      <div className='teamcont' ><h1 className='teamhead'>Soumya Tripathi</h1><p className='teampara'>  Demonstrate or explain how to perform various exercises and routines to minimize injuries and improve fitness.</p></div>
      <img className='teamimage' src={img1} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Tripti Sharma</h1><p className='teampara'> Watch clients do exercises to ensure that they are using the correct techniques.</p></div>
      <img className='teamimage' src={img7} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Parag Kumar</h1><p className='teampara'>  Provide alternative exercises during workouts or classes for different levels of fitness and skill.</p></div>
      <img className='teamimage' src={img6} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Disha Kriplani</h1><p className='teampara'> cardiovascular exercises, such as aerobics or dance; strength training, such as lifting weights; or both.</p></div>
      <img className='teamimage' src={img5} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Rahul Pandey</h1><p className='teampara'>Rahul Pandey work in standalone fitness centers or centers maintained by other types of establishments for their employees or for members of civic and social organizations.</p></div>
      <img className='teamimage' src={img8} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Shivi Bansal</h1><p className='teampara'>Give clients information or resources about nutrition, weight control, and lifestyle issues.</p></div>
      <img className='teamimage' src={img10} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Raj Malhotra</h1><p className='teampara'> tending the front desk, signing up new members, giving tours of the facility, or supervising the weight-training and cardiovascular equipment areas.</p></div>
      <img className='teamimage' src={img9} alt='gym.jpg'/>
      <div className='teamcont' ><h1 className='teamhead'>Juhi Singhaniya</h1><p className='teampara'> Monitor client's progress and adapt programs as needed.</p></div>
      <img className='teamimage' src={img11} alt='gym.jpg'/>
     
    </div>
  )
}