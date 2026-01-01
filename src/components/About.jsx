const About = () => {
  const skills = [
    'React', 'Node.js', 'Next.js', 'TypeScript', 'Shopify API', 'PostgreSQL',
    'MongoDB', 'Express.js', 'Remix', 'Hydrogen', 'Polaris', 'Python',
    'Java', 'JavaScript', 'CSS', 'WordPress', 'AI/ML'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            Software Engineer with expertise in MERN stack and Shopify app development. I have experience building scalable
            web applications and custom Shopify solutions that enhance merchant experiences and drive growth. Open to both
            on-site and remote opportunities.
          </p>
          <div className="skills">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

