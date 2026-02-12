import { motion } from 'framer-motion'
import SkillRadar from './SkillRadar'

const About = () => {
  const skillsConfig = [
    { name: 'Frontend', level: 0.95 },
    { name: 'Backend', level: 0.85 },
    { name: 'Shopify', level: 0.90 },
    { name: 'UI/UX', level: 0.80 },
    { name: 'DevOps', level: 0.70 },
    { name: 'AI/ML', level: 0.75 }
  ]

  const technologies = [
    'React', 'Node.js', 'Next.js', 'TypeScript', 'Shopify API', 'PostgreSQL',
    'MongoDB', 'Express.js', 'Remix', 'Hydrogen', 'Polaris', 'Python',
    'Java', 'JavaScript', 'CSS', 'WordPress'
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title gradient-text"
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content glass-panel"
            style={{ padding: '2rem', borderRadius: '1rem' }}
          >
            <p className="about-text">
              Software Engineer with expertise in <span className="text-highlight">MERN stack</span> and <span className="text-highlight">Shopify app development</span>.
              I specialize in building scalable web applications and custom commerce solutions that enhance merchant experiences and drive growth.
            </p>
            <p className="about-text">
              With a passion for problem-solving and a deep understanding of modern web technologies, I create seamless, high-performance digital experiences.
              Open to both on-site and remote opportunities.
            </p>

            <div className="tech-stack" style={{ marginTop: '2rem' }}>
              <h3 className="skills-title" style={{ marginBottom: '1rem' }}>Technologies</h3>
              <div className="skills-grid">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-color)', color: '#000' }}
                    style={{ cursor: 'default' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="skills-visual glass-panel"
            style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <h3 className="skills-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Expertise Map</h3>
              <SkillRadar skills={skillsConfig} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
