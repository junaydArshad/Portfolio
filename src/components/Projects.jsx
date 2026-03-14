import { motion } from 'framer-motion'
import ProjectCaseStudy from './ProjectCaseStudy'

const Projects = () => {
  const projects = [
    {
      title: 'Falcon 9 & Falcon Heavy Launch Prediction',
      date: 'Space AI Project',
      description: 'Applied advanced machine learning algorithms to predict the success rates of SpaceX Falcon 9 and Falcon Heavy launches. Leveraged historical data-driven insights to enhance predictive accuracy, showcasing the power of AI in space mission reliability.',
      problem: 'Space mission planning requires high reliability and predictive accuracy to minimize risks and optimize launch windows.',
      approach: 'Developed and trained classification models (Logistic Regression, SVM, KNN) to analyze historical launch data. Implemented feature engineering on landing outcomes and orbital parameters.',
      impact: 'Demonstrated potential for increased reliability in mission planning. achieved high accuracy in predicting successful booster landings.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'Data Analysis', 'SpaceX API'],
      link: null
    },
    {
      title: 'Growthly AI',
      date: 'GenAI SaaS',
      description: 'A cutting-edge SaaS platform that leverages Large Language Models to analyze customer behavior and automate hyper-personalized subscription flows for Shopify merchants.',
      problem: 'Merchants struggled with manual curation of subscription bundles, leading to low retention rates. Personalization at scale was nearly impossible without AI assistance.',
      approach: 'Architected an AI-powered engine focusing on RAG (Retrieval-Augmented Generation) to predict optimal product combinations and customer preferences.',
      impact: 'Contributed to a 23% increase in subscription growth for merchants. Reduced manual curation time by 80% through automated intelligent bundling.',
      tech: ['React', 'Node.js', 'OpenAI', 'RAG Pipelines', 'Shopify API', 'PostgreSQL'],
      link: null
    },
    {
      title: 'Talkify',
      date: 'AI Voice Search',
      description: 'AI-powered voice search platform built as a full-stack Shopify app, enabling futuristic voice-activated product discovery for modern e-commerce stores.',
      problem: 'Traditional search methods are often slow and lack accessibility. Voice search offers a more natural and efficient discovery path.',
      approach: 'Integrated AI for real-time speech-to-text and intelligent keyword extraction. Implemented web-audio processing for low-latency interactions.',
      impact: 'Improved accessibility and user engagement. Provided an innovative bridge between voice and traditional commerce.',
      tech: ['React', 'Node.js', 'Speech AI', 'Web Audio API', 'PostgreSQL'],
      link: 'https://www.talkify.space'
    },
    {
      title: 'Ciphermail',
      date: 'Secure Communications',
      description: 'End-to-end encrypted email application ensuring complete privacy and security, designed for users who demand the highest security standards for their transmissions.',
      problem: 'Existing email services lack true privacy, creating vulnerabilities for sensitive communications.',
      approach: 'Implemented client-side encryption with Web Crypto API ensuring messages are encrypted before transmission via a zero-knowledge architecture.',
      impact: 'Provided absolute email privacy where servers cannot access plaintext, addressing critical security needs.',
      tech: ['Next.js', 'TypeScript', 'Web Crypto API', 'JWT', 'PostgreSQL'],
      link: 'https://ciphermail.onrender.com/'
    },
    {
      title: 'Savvy Energy Website',
      date: 'Optimization Project',
      description: 'Engineered a modern, highly optimized website for the Savvy Energy team, focusing on maximum performance, accessibility, and clean architectural patterns.',
      tech: ['React', 'Next.js', 'Performance Optimization', 'SEO'],
      link: 'https://savvy.energy/'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title gradient-text"
        >
          Projects
        </motion.h2>
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

