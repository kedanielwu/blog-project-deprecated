import React from 'react'
import logo from '../assets/img/logo.svg'
import logo2 from '../assets/img/logo.png'
import {Link} from 'react-router'

const Logo = () => (
  <div className='Logo'>
    <div>
      <Link to="/"><img src={logo2}></img></Link>
    </div>
    <div></div>
  </div>
)

export default Logo
