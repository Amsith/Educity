import React, { useEffect, useState } from 'react'
import './topbar.css'
import navlogo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import { TfiAlignLeft } from "react-icons/tfi";




const Topbar = () => {

  const [nav, setNav] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setNav(true) : setNav(false);
    })
  }, [])


  
// For Nave bar
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className={nav ? "dark-nav" : ""}>
      <div>
        <img src={navlogo} alt="" className='logo' />
      </div>
      <div>
      <ul className={`ul ${menuOpen ? 'active' : ''}`}>
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-200} duration={500}>Program</Link></li>
          <li><Link to='about-us' smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-200} duration={500}>Campus</Link></li>
          <li><Link to='testimonial' smooth={true} offset={-250} duration={500}>Testimonial</Link></li>
          <li><button className='btn'><Link to='contact-us' smooth={true} offset={-100} duration={500}>Contact Us</Link></button></li>

        </ul>
      </div>
      <div className='nav-btn' onClick={toggleMenu}> <TfiAlignLeft /></div>
    </nav>
  )
}

export default Topbar