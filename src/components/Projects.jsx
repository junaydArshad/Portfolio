const Projects = () => {
  const projects = [
    {
      title: 'Growthly AI',
      date: 'Dec 2024 - Jun 2025',
      description: 'Shopify application that leverages artificial intelligence to analyze customer behavior and purchasing patterns. The app automatically generates hyper-personalized subscription bundles, enhancing customer retention and reducing churn. By automating the curation process, it enables merchants to boost sales efficiency and deliver data-driven personalization without manual effort.',
      tech: ['React', 'Node.js', 'Shopify API', 'PostgreSQL', 'AI/ML APIs'],
      link: null
    },
    {
      title: 'Talkify',
      date: 'Shopify App',
      description: 'AI-powered voice search platform built as a full-stack Shopify app enabling voice-activated product search. Architected a React/TypeScript frontend with Shopify App Bridge integration and a Node.js backend API. Integrated AI for speech-to-text and intelligent keyword extraction. Implemented real-time audio processing with Web Audio API, subscription-based billing, usage analytics, and a customizable storefront embed widget.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Web Audio API'],
      link: 'https://www.talkify.space'
    },
    {
      title: 'Ciphermail',
      date: 'Email Platform',
      description: 'End-to-end encrypted email application using Next.js, TypeScript, and PostgreSQL. Implemented client-side encryption with Web Crypto API (RSA-OAEP, AES-256-GCM), ensuring messages are encrypted before transmission. Developed secure key management, JWT authentication, and a responsive UI with dark mode. Designed database schema with soft-delete and search capabilities. Maintained zero-knowledge architecture where servers cannot access plaintext.',
      tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Web Crypto API', 'JWT', 'Tailwind CSS'],
      link: 'https://ciphermail.onrender.com/'
    },
    {
      title: 'Savvy Energy',
      date: 'Jun 2025',
      description: 'Collaborated with the Savvy Energy team to develop and optimize a modern, responsive website using cutting-edge web technologies. Implemented clean and scalable front-end components while integrating features that enhanced overall performance. Emphasis was placed on ensuring cross-browser compatibility, accessibility, and adherence to SEO best practices. These efforts resulted in improved site speed, user engagement, and a streamlined UI/UX experience.',
      tech: ['Web Development', 'Responsive Design', 'SEO'],
      link: 'https://savvy.energy/'
    },
    {
      title: 'Falcon 9 & Falcon Heavy Launch Prediction',
      date: 'ML Project',
      description: 'Applied machine learning algorithms to predict the success rates of Falcon 9 and Falcon Heavy launches, leveraging data-driven insights to enhance predictive accuracy. Developed and trained models to analyze historical launch data, showcasing the potential for increased reliability in space mission planning.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      link: null
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${index === 0 ? 'featured' : ''}`}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

