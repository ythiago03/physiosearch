import React from 'react'
import './Navbar.scss'
import ThemeToggle from '../Theme/theme-toggle'

const Navbar = () => {
  return (
    <header className='navbar_container'>
      <h1>DevUtils</h1>

      <ThemeToggle/>
    </header>
  )
}

export default Navbar