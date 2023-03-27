import React from 'react'
import { NavLink } from 'react-router-dom'

const Activity = () => {
  return (<>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <div style={{height:'100px',width:'100px',backgroundColor:'blue',display:'flex',margin:'30px'}}>Activity</div>
    <button><NavLink className='navlogo' to="/about" spy={true} smooth={true} >
          About
        </NavLink></button>
    </>
  )
}

export default Activity