import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/img/image.png'
import backgroundImg from '../assets/img/piggybank-MgMOU8y8GtY-unsplash.jpg'

import '../assets/css/Hero.css'

const getStartedLink={
    borderRadius:'10px',
    color:'#fff',
    fontBold:'700',
    backgroundColor:'#196fe0',
    textTransform:'capitalize',
    padding:'.7rem',
    textDecoration:'none',

}

const Hero = () => {
  return (
      <>
        <div className="hero">
            <div className="better-banking">
                    <div className="better-banking-heading">
                        <h1>The Lawyers Bank</h1>
                    </div>

                    <div className="better-banking-write-up">
                        <p>
                            Comprehensive Financial Suite For Legal Practioners
                        </p>
                    </div>
                    <div className="get-started">
                        <Link to='/contact' style={getStartedLink}>Get Started</Link>
                    </div>
            </div>
        </div>
      </>
  )
}

export default Hero