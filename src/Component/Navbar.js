import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from "react-scroll";
function Navbar() {
  const[click,setClick]=useState(false)
  function handleClick(){
    setClick(!click)
    scroll.scrollToTop()
  }
  return (
   <nav className='navbar'>
    <div className='container'>
    <NavLink to="/" spy={true} smooth={true} offset={50} duration={500} className='navlogo' onClick={handleClick}>
        <span className='gymlogo'> GYM</span> 
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='navitem'>
          <NavLink  to="/" spy={true} smooth={true} offset={50} duration={500} className='navlogo' onClick={handleClick}>
          Home
        </NavLink></li>
          <li className='navitem'>
        <NavLink className='navlogo' to="/about" spy={true} smooth={true} onClick={handleClick}>
          About
        </NavLink></li>
          <li className='navitem'>
        <Link className='navlogo' to="program" spy={true} smooth={true} onClick={handleClick}>
          TrainingProgram
        </Link></li>
          <li className='navitem'>
        <Link className='navlogo' to="training" spy={true} smooth={true}  onClick={handleClick}>
          TrainerSection
        </Link></li>
          <li className='navitem'>
          <Link className='navlogo' to="pricing" spy={true} smooth={true}>Pricing</Link></li>
          <li className='navitem'>
        <NavLink exact to='/login' className='navlogo' onClick={handleClick}>
          Login
        </NavLink></li>              
          <li className='navitem'>
        <NavLink exact to='/registration' className='navlogo' onClick={handleClick}>
          JoinUs
        </NavLink>
        </li>              
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
    </div>
   </nav>

  )
}

export default Navbar