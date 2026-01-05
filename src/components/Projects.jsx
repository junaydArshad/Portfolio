import ProjectCaseStudy from './ProjectCaseStudy'

const Projects = () => {
  const projects = [
    {
      title: 'Growthly AI',
      date: 'Dec 2024 - Jun 2025',
      description: 'Shopify application that leverages artificial intelligence to analyze customer behavior and purchasing patterns. The app automatically generates hyper-personalized subscription bundles, enhancing customer retention and reducing churn.',
      problem: 'Merchants struggled with manual curation of subscription bundles, leading to low retention rates and time-consuming processes. Personalization at scale was nearly impossible without AI assistance.',
      approach: 'Developed an AI-powered system that analyzes customer behavior patterns, purchase history, and preferences to automatically generate personalized subscription bundles. Implemented machine learning models to predict optimal product combinations.',
      impact: 'Contributed to a 23% increase in subscription growth for Shopify merchants. Reduced manual curation time by 80% and improved customer retention rates significantly.',
      tech: ['React', 'Node.js', 'Shopify API', 'PostgreSQL', 'AI/ML APIs'],
      link: null
    },
    {
      title: 'Talkify',
      date: 'Shopify App',
      description: 'AI-powered voice search platform built as a full-stack Shopify app enabling voice-activated product search.',
      problem: 'E-commerce stores lacked accessible voice search capabilities, limiting shopping experiences for users who prefer voice interactions or have accessibility needs.',
      approach: 'Architected a React/TypeScript frontend with Shopify App Bridge integration and Node.js backend. Integrated AI for speech-to-text and intelligent keyword extraction. Implemented real-time audio processing with Web Audio API.',
      impact: 'Enabled hands-free shopping experience, improved accessibility, and provided merchants with a competitive edge through innovative voice search technology.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Web Audio API'],
      link: 'https://www.talkify.space'
    },
    {
      title: 'Ciphermail',
      date: 'Email Platform',
      description: 'End-to-end encrypted email application ensuring complete privacy and security for user communications.',
      problem: 'Existing email services lack true privacy - servers can access message content, creating security vulnerabilities and privacy concerns for sensitive communications.',
      approach: 'Implemented client-side encryption with Web Crypto API (RSA-OAEP, AES-256-GCM) ensuring messages are encrypted before transmission. Developed secure key management, JWT authentication, and maintained zero-knowledge architecture.',
      impact: 'Provided users with complete email privacy where servers cannot access plaintext, addressing critical security and privacy needs for sensitive communications.',
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
            <ProjectCaseStudy key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

