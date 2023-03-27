import React from 'react'
import '../Pages/About.css'
import YoutubeEmbed from '../Section/YoutubeEmbed'
import Program from './Program'
import Training from './Training'
import Pricing from './Pricing'
export default function About() {
  function handleMessage(){
    alert('Learn in Home')
  }
  return (
    <>
    <div id='about' className="App">
      <div className="Content">
      <h1 className='abtheading'>ABOUT US</h1>
      <p className='abtpara'>A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek term "gymnasium". They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. A "gym" may include or describe adjacent open air areas as well. In Western countries, "gyms" (or pl: gymnasia") often describe places with indoor or outdoor courts for basketball, hockey, tennis, boxing or wrestling, and with equipment and machines used for physical development training, or to do exercises. In many European countries, Gymnasium (and variations of the word) also can describe a secondary school that prepares students for higher education at a university, with or without the presence of athletic courts, fields, or equipment. (en)</p>
      <button onClick={handleMessage} className="aboutbtn">Learn More</button>
      </div>
      <div className='vid'><YoutubeEmbed embedId="AS49J1qN-4Q" /></div>
      <section className="Content1">
      <h1 className='abthead'>WHY CHOOSE US ?</h1>
      <ul className="abtcont">
        <li><h2>Consult With Our Experts</h2> Exercise can help prevent excess weight gain or help maintain weight loss. ...</li>
        <li><h2>Best Workout Facilities</h2>Exercise combats health conditions and diseases...</li>
      </ul>
      </section>
      <div className='vid1'><YoutubeEmbed embedId="4-zjQvTDnbw"/></div>
    </div>
  <div>
     <Program/>
      <Training/>
      <Pricing />
  </div>
  </>
  )
}
