import React from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom'
import Pricing from './Pricing'
import { useRecoilState } from 'recoil'
import { Data } from '../Atom/Data'


export default function Home() {
  const [login,setLogin] = useRecoilState(Data)
  //console.log(login,"I am from reg")
  return (
    <div>
    <div className='home'>
    <h1 className='heading'>"Take Care Of Your <span style={{color:'red'}}>Body.</span>Its The only Place You Have To  <span style={{color:'red'}}>Live.</span>."</h1>
    {login ?<a href='#pricing'><button>Get Started</button></a>:<button className='mainpagebtn'>  <NavLink exact to='/registration' className='homelink' >

    Join With us
        </NavLink></button>}
        <Link href='#about'/>
      </div>
      {
        console.log(login,"I am from reg")
      }
      <div id='pricing'>
        <Pricing/>
      </div>
      
      </div>
  )
}
