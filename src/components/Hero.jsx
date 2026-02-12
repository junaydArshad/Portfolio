import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import ScrollIndicator from './ScrollIndicator'
import Background3D from './Background3D'

const Hero = () => {
  const typewriterTexts = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Tech Explorer"
  ]

  return (
    <section className="hero" id="home">
      <Background3D />
      <div className="container">
        <div className="hero-content">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="greeting"
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            <span className="name gradient-text">Junaid Arshad</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="typewriter-wrapper"
          >
            <Typewriter
              texts={typewriterTexts}
              speed={100}
              deleteSpeed={50}
              delay={2000}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-subtitle"
          >
            Crafting immersive digital experiences with modern web technologies.
            Specializing in building exceptional, high-quality websites and applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-cta"
          >
            <a href="#projects" className="btn btn-primary glow-text">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  )
}

export default Hero
