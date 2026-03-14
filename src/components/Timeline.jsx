import { motion } from 'framer-motion'

const Timeline = () => {
  const milestones = [
    {
      year: '2021 - 2023',
      title: 'Full Stack Beginnings',
      description: 'Mastered the MERN stack while freelancing on Fiverr, delivering 50+ web solutions to international clients.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Software Engineering Graduate',
      description: 'Completed BS in Software Engineering from BUITEMS, building a core foundation in algorithms and architectures.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
        </svg>
      )
    },
    {
      year: '2024 - Present',
      title: 'AI Product Engineering',
      description: 'Joined Nedian Technologies. Led development of Growthly AI and Talkify, integrating LLMs and Voice AI into SaaS.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      year: '2025',
      title: 'The AI Transition',
      description: 'Deep-diving into Generative AI, RAG architectures, and Computer Vision to build the next generation of intelligent web.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      year: 'Current',
      title: 'AI Engineer & Architect',
      description: 'Designing autonomous agents and intelligent RAG systems for complex business workflows.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ]

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title gradient-text"
        >
          My Journey
        </motion.h2>
        <div className="timeline-container">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <span className="timeline-icon">{milestone.icon}</span>
                {index < milestones.length - 1 && <div className="timeline-line"></div>}
              </div>
              <motion.div
                className="timeline-content"
                whileHover={{ borderColor: 'var(--accent-border)', boxShadow: '0 0 25px rgba(56,189,248,0.12)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="timeline-year">{milestone.year}</span>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
