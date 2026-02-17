import { motion } from 'framer-motion'
import SkillRadar from './SkillRadar'

const About = () => {
  const skillsConfig = [
    { name: 'AI/ML', level: 0.95 },
    { name: 'RAG/GenAI', level: 0.90 },
    { name: 'Backend', level: 0.85 },
    { name: 'MERN Stack', level: 0.90 },
    { name: 'DevOps', level: 0.75 },
    { name: 'UI/UX', level: 0.70 }
  ]

  const technologies = [
    'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'OpenAI API', 'Hugging Face',
    'ChromaDB', 'Pinecone', 'React', 'Node.js', 'Next.js', 'TypeScript',
    'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
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
          My Journey
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
              Passionate <span className="text-highlight">AI Engineer</span> with a strong foundation in <span className="text-highlight">Full-Stack Development (MERN)</span>.
              My expertise lies in building intelligent systems that leverage <span className="text-highlight">Large Language Models (LLMs)</span>,
              <span className="text-highlight">Retrieval-Augmented Generation (RAG)</span>, and <span className="text-highlight">Computer Vision</span>.
            </p>
            <p className="about-text">
              I am dedicated to bridging the gap between web architecture and machine intelligence,
              creating high-performance applications that are not just functional, but smart.
              My background in build scalable commerce solutions helps me approach AI with a production-first mindset.
            </p>

            <div className="tech-stack" style={{ marginTop: '2rem' }}>
              <h3 className="skills-title" style={{ marginBottom: '1rem' }}>AI & Web Stack</h3>
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
