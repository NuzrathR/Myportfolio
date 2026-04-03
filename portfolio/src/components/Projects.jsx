import React from 'react'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Zoo Website',
      meta: 'HTML . CSS',
      description: 'A web application done for EEI3346 module first Year. Technologies used are JavaScript, Vue JS, HTML, CSS.',
      link: 'https://github.com/NuzrathR/zoo-website'
    },
    {
      title: 'Library Management System',
      meta: 'HTML · CSS · MySQL . Php',
      description: 'A web application done for for EEY4189 module in second year. Technologies used are JavaScript, HTML, CSS for frontend and Php for backend',
      link: 'https://github.com/NuzrathR/library-management-system'
    },
    {
      title: 'CYBERTEK_Car_Repair',
      meta: 'C#',
      description: 'This Application is done for NVQ Level 5 diploma course. Technologies used C# and SQL Server',
      link: 'https://github.com/NuzrathR/CYBERTEK_Car_Repair'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <h3>{project.title}</h3>
              <div className="project-meta">{project.meta}</div>
              <p>{project.description}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects