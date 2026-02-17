const Experience = () => {
  const experiences = [
    {
      title: 'AI Product Engineer',
      company: 'Nedian Technologies – Quetta, Pakistan',
      date: 'Dec 2024 – Current',
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
      descriptions: [
        'Delivered 50+ high-quality web applications for a global client base, mastering the MERN stack and clean code principles. Developed a reputation for rapid problem-solving and adaptable technical leadership in fast-paced environments.',
        'Progressively transitioned from traditional web development to data-driven and AI-enhanced solutions towards the end of my freelance tenure.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              {exp.descriptions.map((desc, descIndex) => (
                <p key={descIndex} className="experience-description">{desc}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

