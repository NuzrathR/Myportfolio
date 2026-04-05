import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="greeting">
          <span className="wave" role="img" aria-label="waving hand">👋</span> Hi, I'm
        </div>
        <h1>F.N. <span>Rauff</span></h1>
        <p>Software Engineering Student · Internship Seeker · Problem Solver</p>
        <a className="btn" href="/Fathima Nuzrath.pdf.pdf" download>📄 Download Resume</a>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <img
          src="/myphoto.jpeg"
          alt="F.N Rauff"
          className="profile"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%233b82f6' /%3E%3Ctext x='50' y='70' font-size='40' text-anchor='middle' fill='%23ffffff' font-weight='600'%3EFR%3C/text%3E%3C/svg%3E"
          }}
        />
      </motion.div>

      <motion.a
        className="scroll-indicator"
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span className="arrow" aria-hidden="true">↓</span>
        <span className="label">Scroll</span>
      </motion.a>
    </div>
  )
}

export default Hero