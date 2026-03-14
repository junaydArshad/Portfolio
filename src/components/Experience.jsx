import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'AI Product Engineer',
      company: 'Nedian Technologies – Quetta, Pakistan',
      date: 'Dec 2024 – Current',
      current: true,
      descriptions: [
        'Leading the architectural shift towards AI-native applications. Specialized in integrating Large Language Models (LLMs) and RAG pipelines into production Shopify apps to deliver intelligent features like automated bundling and voice discovery.',
        'Core developer of Growthly AI — a GenAI platform that leverages customer behavior data to automate hyper-personalized commerce flows, successfully achieving a 23% increase in merchant subscription growth.',
        'Expertise in orchestrating hybrid stacks combining Remix/Node.js with AI services (OpenAI, LangChain, ChromaDB).'
      ]
    },
    {
      title: 'Full Stack Freelancer',
      company: 'Fiverr – Quetta, Pakistan',
      date: 'Mar 2021 – May 2024',
      current: false,
      descriptions: [
        'Delivered 50+ high-quality web applications for a global client base, mastering the MERN stack and clean code principles. Developed a reputation for rapid problem-solving and adaptable technical leadership in fast-paced environments.',
        'Progressively transitioned from traditional web development to data-driven and AI-enhanced solutions towards the end of my freelance tenure.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title gradient-text"
        >
          Experience
        </motion.h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                borderColor: 'var(--accent-border)',
                boxShadow: '0 0 30px rgba(56,189,248,0.1)'
              }}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <span className="experience-date">{exp.date}</span>
                  {exp.current && (
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      background: 'rgba(56,189,248,0.1)',
                      border: '1px solid var(--accent-border)',
                      color: 'var(--accent)'
                    }}>
                      Current
                    </span>
                  )}
                </div>
              </div>
              {exp.descriptions.map((desc, descIndex) => (
                <p key={descIndex} className="experience-description">{desc}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
