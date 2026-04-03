import React from 'react'
import { motion, useInView } from 'framer-motion'

const Resume = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      institution: 'Open University of Sri Lanka',
      period: '2022 — Present',
      description: 'Final Year Undergraduate Student, Currently Reading Bachelor of Software Engineering Hons Degree'
    },
    {
      institution: 'Vocational Training Authority',
      period: 'Jan 2019 – Dec 2019',
      description: 'NVQ Level 5 - Diploma in Information and Communication Technology'
    },
    {
      institution: 'Maradana Technical College',
      period: 'june 2017 – dec 2017',
      description: 'NVQ Level 4 - Certificate in Information and Communication Technology'
    }
  ]

  const experience = [
    {
      company: 'Ceylon Electricity Board (CEB)',
      period: 'March 2022 — August 2022 · 06 months',
      description: 'JavaScript · HTML · Linux webserver · MySQL · ITIL V4 · CSS'
    },
    {
      company: 'Sri Lanka Ports Authority',
      period: 'March 2020 — August 2020 · 06 months',
      description: 'PHP · HTML · Cascading Style Sheets (CSS)'
    },
    {
      company: 'Ministry of Housing and Social Welfare - Sethsiripaya Office Complex',
      period: 'December 2017 — December 2018 · 01 Year',
      description: 'Leadership · Presentation Skills · Interpersonal Skills · Microsoft Word · Microsoft Excel'
    }
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="resume" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>
        <motion.div
          className="resume-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="resume-card edu-col" variants={cardVariants}>
            <motion.h3
              style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}
              variants={itemVariants}
            >
              📖 Education
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div key={index} className="edu-item" variants={itemVariants}>
                <h4>{edu.institution}</h4>
                <div className="edu-meta">{edu.period}</div>
                <div className="edu-desc">{edu.description}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="resume-card exp-col" variants={cardVariants}>
            <motion.h3
              style={{fontSize: '1.8rem', marginBottom: '1.5rem'}}
              variants={itemVariants}
            >
              💼 Experience
            </motion.h3>
            {experience.map((exp, index) => (
              <motion.div key={index} className="exp-item" variants={itemVariants}>
                <h4>{exp.company}</h4>
                <div className="exp-meta">{exp.period}</div>
                <div className="exp-desc">{exp.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume