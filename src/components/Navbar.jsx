import { useEffect, useState } from 'react'


const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav className="navbar">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container">
        <div className="nav-content">
          <a href="#home" className="logo" onClick={closeMenu}>JA</a>
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav-right">

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#timeline" onClick={closeMenu}>Journey</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experience</a></li>

              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

