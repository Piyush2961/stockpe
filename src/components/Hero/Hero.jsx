import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Faq from '../Faq/Faq'
import OurTeam from '../OurTeam/OurTeam'
import Footer from '../Footer/Footer'

import './Hero.css'


const Hero = () => {
    return (
      <Router>
        <div className="Hero">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="faq" element={<Faq />} />
                <Route path="our-team" element={<OurTeam />} />
            </Routes>
           
            <Footer />
        </div>
        </Router>
    )
}

export default Hero
