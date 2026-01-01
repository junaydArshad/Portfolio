const Experience = () => {
  const experiences = [
    {
      title: 'Shopify App Developer',
      company: 'Nedian Technologies – Quetta, Pakistan',
      date: 'Dec 2024 – Current',
      descriptions: [
        'Experienced in developing both custom and public Shopify apps with a focus on increasing store performance and user engagement. Specialized in integrating LLMs to deliver personalized product recommendations on Shopify storefronts. Proficient in Remix, Node.js, Next.js, Hydrogen, and Polaris. Successfully contributed to a 23% increase in subscription growth for Shopify merchants.',
        'Worked on Growthly AI — a Shopify app that analyzes customer behavior using AI to automatically generate hyper-personalized subscription bundles, boosting retention and eliminating the need for manual curation.'
      ]
    },
    {
      title: 'Freelancer',
      company: 'Fiverr – Quetta, Pakistan',
      date: 'Mar 2021 – May 2024',
      descriptions: [
        'Provided services to a diverse range of clients from various industries. Honed skills in managing projects independently, meeting client expectations, and delivering quality work within set timelines. Strengthened communication abilities and learned the importance of adaptability and client satisfaction in a fast-paced, results-oriented environment.'
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

