import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCaseStudy = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef(null)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`project-card glass-panel ${index === 0 ? 'featured' : ''} ${isExpanded ? 'expanded' : ''}`}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.12)",
        borderColor: "rgba(56,189,248,0.4)"
      }}
    >
      <motion.div layout="position" className="project-header">
        <div>
          <motion.h3 layout="position" className="project-title gradient-text">{project.title}</motion.h3>
          <motion.span layout="position" className="project-date">{project.date}</motion.span>
        </div>
        {project.link && (
          <motion.a
            layout="position"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit
          </motion.a>
        )}
      </motion.div>

      <motion.div layout="position" className="project-summary">
        <p className="project-description">{project.description}</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="project-details"
          >
            {project.problem && (
              <div className="case-study-section">
                <h4 className="case-study-label text-highlight">Problem</h4>
                <p className="case-study-content">{project.problem}</p>
              </div>
            )}
            {project.approach && (
              <div className="case-study-section">
                <h4 className="case-study-label text-highlight">Approach</h4>
                <p className="case-study-content">{project.approach}</p>
              </div>
            )}
            {project.impact && (
              <div className="case-study-section">
                <h4 className="case-study-label text-highlight">Impact</h4>
                <p className="case-study-content">{project.impact}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout="position" className="project-tech">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className="skill-tag">{tech}</span>
        ))}
      </motion.div>

      <motion.div layout="position" className="project-actions" style={{ marginTop: '1rem' }}>
        <button
          className="project-toggle btn btn-sm"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'transparent',
            border: '1px solid var(--primary-color)',
            color: 'var(--primary-color)',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}
        >
          {isExpanded ? 'Show Less' : 'View Case Study'}
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCaseStudy
