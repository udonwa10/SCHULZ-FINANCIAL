import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import BusinessBanking from '../components/BusinessBanking'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
       <Hero/>
       <BusinessBanking/>
       <About/>
    </>
  )
}

export default Home