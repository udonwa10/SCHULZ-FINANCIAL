import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import '../assets/css/Navbar.css'
import {FaBalanceScale} from 'react-icons/fa'
const linkStyle = {
    textDecoration:'none',
    color:'#fff',
    textTransform:'upperCase',
    fontWeight:'bold'
}

const Navbar = () => {
  return (
      <>
        <div className='navbar'>
            <div className="logo">
                <Link to='/' style={linkStyle}>
                    <span><FaBalanceScale fontSize={50}/></span>      
                </Link>
            </div>
        </div>
      </>
  )
}

export default Navbar