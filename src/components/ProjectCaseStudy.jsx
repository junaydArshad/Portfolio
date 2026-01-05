import { useState } from 'react'

const ProjectCaseStudy = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`project-card ${index === 0 ? 'featured' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-date">{project.date}</span>
      </div>
      
      <div className="project-summary">
        <p className="project-description">{project.description}</p>
      </div>

      {isExpanded && (
        <div className="project-details">
          {project.problem && (
            <div className="case-study-section">
              <h4 className="case-study-label">Problem</h4>
              <p className="case-study-content">{project.problem}</p>
            </div>
          )}
          {project.approach && (
            <div className="case-study-section">
              <h4 className="case-study-label">Approach</h4>
              <p className="case-study-content">{project.approach}</p>
            </div>
          )}
          {project.impact && (
            <div className="case-study-section">
              <h4 className="case-study-label">Impact</h4>
              <p className="case-study-content">{project.impact}</p>
            </div>
          )}
        </div>
      )}

      <div className="project-tech">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex}>{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
          >
            Visit Project →
          </a>
        )}
        <button 
          className="project-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Show less' : 'Show case study'}
        >
          {isExpanded ? 'Show Less' : 'View Case Study'}
        </button>
      </div>
    </div>
  )
}

export default ProjectCaseStudy

