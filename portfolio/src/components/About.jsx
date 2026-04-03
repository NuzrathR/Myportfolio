import React from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.h2>
        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>I'm an IT fresher with an excellent academic record. Good at implementing solutions and proficient in using various tools and technologies. Eager to get a good platform in order to grow and further improve my IT skills with real world experience.</p>
            <p>I am an enthusiastic learner with an ability to quickly grasp concepts and technical skills.</p>
            <p>I have a strong background in web development and enjoy applying my skills to various projects. Additionally, I have a keen interest in developing creative applications.</p>
          </motion.div>
          <motion.div className="what-im-doing" variants={itemVariants}>
            <h3>What I'm doing</h3>
            <div className="doing-cards">
              <motion.div
                className="doing-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="doing-icon">🎨</div>
                <h4>Web design</h4>
                <p>The most modern and high-quality design made at a professional level.</p>
              </motion.div>
              <motion.div
                className="doing-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="doing-icon">💻</div>
                <h4>Web development</h4>
                <p>I like to develop high-quality web sites in a web development team environment.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About