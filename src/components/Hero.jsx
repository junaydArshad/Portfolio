import ScrollIndicator from './ScrollIndicator'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Muhammad Junaid Arshad</span>
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

