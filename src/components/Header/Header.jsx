import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="logo" className='logo' />
    </div>
  )
}

export default Header