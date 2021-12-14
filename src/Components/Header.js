import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import {useLocation} from 'react-router-dom'



function Header() {

  const location = useLocation()

  let headerLink  
  location.pathname === '/favorites' ? headerLink = <NavLink className='nav-link' to="/">Home</NavLink> : headerLink = <NavLink className='nav-link' to="/favorites">Favorite Movies</NavLink>

  return (
    <div className='header'>
      <h1 className='headerTitle'>Box Office Deetz</h1>
      {headerLink}
    </div>
  )
}

export default Header;
