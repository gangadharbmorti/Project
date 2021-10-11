import React from 'react';
import './css/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='nav-items'>
        {/* <div className='nav-menu-items'>
          <NavLink  to='/' activeClassName='nav-item'>
            Home
          </NavLink>
          </div> */}
          <div className='nav-menu-items'>
          <NavLink to='/signup' className='nav-item-right'>
            Sign Up
          </NavLink>
          </div>
          <div className='nav-menu-items'>
          <NavLink to='/' className='nav-item-right'>
            Login IN
          </NavLink>
          </div>
          <div className='nav-menu-items'>
          <NavLink to='/student' className='nav-item' >
           Student
          </NavLink>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
