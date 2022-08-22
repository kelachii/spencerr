import React, { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa"


const SharedComp = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = (e) => {
    setToggle(!toggle);
  }

  return (
    <div className='shared'>
      <section className='navig'>
        <Link to='/' className='logo'> Spencer </Link>

        <nav className={toggle ? 'nav-display' : 'null'}>
          <ul>
            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'link')}>Home</NavLink></li>
            <li><NavLink to='/Product' className={({ isActive }) => (isActive ? 'active' : 'link')}>Products</NavLink></li>
            <li><NavLink to='/Services' className={({ isActive }) => (isActive ? 'active' : 'link')}>Services</NavLink></li>
          </ul>
          <Link to='/'><FaShoppingCart /></Link>

          <Link to='/Login'><button className='btn'>
            Login
          </button></Link>
        </nav>

        <svg viewBox="0 0 100 80" width="40" height="40" className='hamburger' onClick={toggleMenu}>
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>

      </section>
      <Outlet />
    </div>



  )
}

export default SharedComp