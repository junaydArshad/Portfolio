import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const offsetTop = target.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  useEffect(() => {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar')
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      const theme = document.documentElement.getAttribute('data-theme')
      const isDark = theme === 'dark'
      
      if (currentScroll > 50) {
        navbar.style.backgroundColor = isDark 
          ? 'rgba(18, 18, 18, 0.98)' 
          : 'rgba(255, 255, 255, 0.98)'
        navbar.style.boxShadow = isDark
          ? '0 2px 10px rgba(0, 0, 0, 0.3)'
          : '0 2px 10px rgba(0, 0, 0, 0.05)'
      } else {
        navbar.style.backgroundColor = isDark
          ? 'rgba(18, 18, 18, 0.95)'
          : 'rgba(255, 255, 255, 0.95)'
        navbar.style.boxShadow = 'none'
      }
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    
    // Update on theme change
    const observer = new MutationObserver(() => {
      handleScroll()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.project-card, .experience-item')
    
    animatedElements.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App

