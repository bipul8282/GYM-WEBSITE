import React from 'react';
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import './Footer.css'
function Footer() {
  return (
       <div className='mainfooter' >
        <footer className='footersection'>
        <section className='footercontent'>
        <h1 style={{color:'red',marginLeft:'50px'}}>GYM</h1>
        <p className='footerpara'>Join the GAF fam! Sign up to our mailing list for exclusive weekly discounts.</p>
        <a className='link' href='https://www.facebook.com/'target="_blank"><BsFacebook /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='link' href='https://www.instagram.com/'target="_blank"><BsInstagram /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='link' href='https://twitter.com/'target="_blank"><BsTwitter /></a>&nbsp;&nbsp;&nbsp;
        </section>     
        <section className='footercontent'>
          <h1 className='usefulheading'>USEFULLINKS</h1>
          <ul className='footerlist'>
            <li>Account</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li>Affiliates</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li>Brands</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li>Commercial Fit Outs</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </section>
            <section className='footercontent1'>
              <h1 className='supportheading'>SUPPORT </h1>
              <ul className='footerlist'>
             <li>FAQ</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li>Privacy</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li>Terms</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li>Wholesale</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </section>
        <section className='footercontent2'>
              <h1 className='companyheading'>COMPANY</h1>
              <ul className='footerlist'>
                <li>About Us</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Our Promises</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Showrooms</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Careers</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </ul>
              </section>
              </footer><hr className='hrtag'/><div className='footerend'><h5>&#9851;2023 &#127947;&#127997; ALL COPYRIGHTS RESERVED</h5></div>
    </div>
  )
}

export default Footer