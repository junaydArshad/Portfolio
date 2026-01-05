const Timeline = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Started Freelancing',
      description: 'Began providing services on Fiverr, working with diverse international clients',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Graduated',
      description: 'Completed BS Software Engineering from BUITEMS',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5"/>
        </svg>
      )
    },
    {
      year: '2024',
      title: 'Joined Nedian Technologies',
      description: 'Started as Shopify App Developer, focusing on AI-powered solutions',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      year: '2024-2025',
      title: 'Major Projects',
      description: 'Built Growthly AI, Talkify, and Ciphermail - showcasing full-stack expertise',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    },
    {
      year: '2025',
      title: 'Current',
      description: 'Continuing to build scalable solutions and drive growth for Shopify merchants',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    }
  ]

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <div className="timeline-container">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-icon">{milestone.icon}</span>
                {index < milestones.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{milestone.year}</span>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

