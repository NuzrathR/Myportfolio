import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: '🔗',
      link: 'https://linkedin.com/in/fathima-nuzrath-rauff',
      label: 'LinkedIn'
    },
    {
      icon: '🐙',
      link: 'https://github.com/NuzrathR',
      label: 'GitHub'
    },
    {
      icon: '📧',
      link: 'mailto:fnuzrathtech@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>F.N Rauff</h3>
          <p>Full Stack Developer & UI/UX Designer</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} F.N Rauff. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer