import React from 'react'
import { motion } from 'framer-motion'
import door from '../img/door.png'
const Header = () => {
  return (
    <div className="header">
      <div style={{ display: 'flex' }}>
        <img src={door} style={{ objectFit: 'none' }} />
        <h2 style={{ padding: '10px', fontSize: '1.7rem', display: 'inline' }}>SideRoom</h2>
      </div>
      <div className="nav-buttons">
        <h3>How does this work?</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
  )
}

export default Header; 
