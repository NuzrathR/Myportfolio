import React from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contacts = [
    {
      icon: '📧',
      title: 'Email',
      link: 'mailto:fnuzrathtech@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Fathima,%0A%0AI%20am%20interested%20in%20connecting%20with%20you.%0A%0ABest%20Regards',
      text: 'fnuzrathtech@gmail.com'
    },
    {
      icon: '☎️',
      title: 'Call',
      link: 'tel:0743348253',
      text: 'Take a call'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      link: 'https://wa.me/94743348253',
      text: 'Send a message'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/fathima-nuzrath-rauff',
      text: 'View profile'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      link: 'https://github.com/NuzrathR',
      text: 'View repos'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="contact-flex"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="contact-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-title">{contact.title}</div>
              <a
                className="contact-link"
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {contact.text}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact