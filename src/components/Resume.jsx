import { useState } from 'react'

const Resume = () => {
  const [activeSection, setActiveSection] = useState(null)

  const resumeSections = [
    {
      title: 'Work Experience',
      content: [
        {
          role: 'Shopify App Developer',
          company: 'Nedian Technologies',
          period: 'Dec 2024 – Current',
          location: 'Quetta, Pakistan',
          achievements: [
            'Developed custom and public Shopify apps increasing store performance',
            'Integrated LLMs for personalized product recommendations',
            'Contributed to 23% increase in subscription growth',
            'Built Growthly AI - AI-powered subscription optimization app'
          ]
        },
        {
          role: 'Freelancer',
          company: 'Fiverr',
          period: 'Mar 2021 – May 2024',
          location: 'Quetta, Pakistan',
          achievements: [
            'Delivered quality projects for diverse international clients',
            'Managed projects independently with tight deadlines',
            'Strengthened communication and client satisfaction skills'
          ]
        }
      ]
    },
    {
      title: 'Education',
      content: [
        {
          degree: 'BS Software Engineering',
          institution: 'Balochistan University of Information Technology Engineering and Management Sciences',
          period: 'Oct 2020 – Aug 2024',
          location: 'Quetta, Pakistan'
        }
      ]
    },
    {
      title: 'Key Projects',
      content: [
        {
          name: 'Growthly AI',
          description: 'AI-powered Shopify app for subscription optimization',
          impact: '23% increase in subscription growth'
        },
        {
          name: 'Talkify',
          description: 'Voice-activated product search platform',
          impact: 'Enhanced accessibility and user experience'
        },
        {
          name: 'Ciphermail',
          description: 'End-to-end encrypted email platform',
          impact: 'Zero-knowledge architecture for privacy'
        }
      ]
    }
  ]

  const downloadResume = () => {
    // This would link to the actual PDF
    window.open('/Junayd\'s Latest Resume.pdf', '_blank')
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <button onClick={downloadResume} className="btn btn-primary">
            Download PDF
          </button>
        </div>
        <div className="resume-content">
          {resumeSections.map((section, index) => (
            <div key={index} className="resume-section">
              <button
                className={`resume-section-header ${activeSection === index ? 'active' : ''}`}
                onClick={() => setActiveSection(activeSection === index ? null : index)}
              >
                <h3>{section.title}</h3>
                <span className="resume-toggle">{activeSection === index ? '−' : '+'}</span>
              </button>
              {activeSection === index && (
                <div className="resume-section-content">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="resume-item">
                      {item.role && (
                        <>
                          <h4>{item.role}</h4>
                          <p className="resume-company">{item.company} • {item.period}</p>
                          <p className="resume-location">{item.location}</p>
                          {item.achievements && (
                            <ul className="resume-achievements">
                              {item.achievements.map((achievement, achIndex) => (
                                <li key={achIndex}>{achievement}</li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                      {item.degree && (
                        <>
                          <h4>{item.degree}</h4>
                          <p className="resume-company">{item.institution}</p>
                          <p className="resume-location">{item.period} • {item.location}</p>
                        </>
                      )}
                      {item.name && (
                        <>
                          <h4>{item.name}</h4>
                          <p className="resume-company">{item.description}</p>
                          <p className="resume-impact">Impact: {item.impact}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume

