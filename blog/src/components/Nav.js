import React from 'react'
import {Link} from 'react-router'

import '../assets/css/header.css'

const Nav = () => (
  <div className='Nav'>
    <Link to='/' id='btn-1' activeClassName='selected' className='btn btn-nav'>日志</Link>
    <Link to='/photos' id='btn-2' activeClassName='selected' className='btn btn-nav'>相册</Link>
    <Link to='/timeline' id='btn-3' activeClassName='selected' className='btn btn-nav'>轨迹</Link>
  </div>
)

export default Nav
