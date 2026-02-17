import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import ScrollIndicator from './ScrollIndicator'
import Background3D from './Background3D'

const Hero = () => {
  const typewriterTexts = [
    "Full Stack MERN Developer",
    "Evolving into AI Engineer...",
    "LLM & RAG Specialist",
    "Generative AI Architect",
    "Computer Vision Enthusiast"
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
              speed={80}
              deleteSpeed={40}
              delay={1500}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-subtitle"
          >
            Bridging the gap between robust Full-Stack development and cutting-edge
            Artificial Intelligence. Specializing in LLMs, RAG, and Generative AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-cta"
          >
            <a href="#projects" className="btn btn-primary glow-text">Explore AI Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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
