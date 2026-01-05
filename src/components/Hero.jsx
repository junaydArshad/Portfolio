import ScrollIndicator from './ScrollIndicator'
import Typewriter from './Typewriter'

const Hero = () => {
  const typewriterTexts = [
    'I build interfaces that users love',
    'I create scalable web applications',
    'I develop AI-powered Shopify solutions',
    'I craft experiences that drive growth'
  ]

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Muhammad Junaid Arshad</span>
            <span className="typewriter-wrapper">
              <Typewriter texts={typewriterTexts} speed={100} deleteSpeed={50} delay={2000} />
            </span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer specializing in MERN stack and Shopify app development
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  )
}

export default Hero

