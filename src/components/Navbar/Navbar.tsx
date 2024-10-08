import React from 'react'
import './Navbar.scss'
import ThemeToggle from '../Theme/theme-toggle'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar_container'>
      <Link to={"/"}>
        <h1>PhysioSearch</h1>
      </Link>

      <ThemeToggle/>
    </header>
  )
}

export default Navbar