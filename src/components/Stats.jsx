import { useEffect, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ projects: 0, experience: 0, growth: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.querySelector('.stats-section')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const counters = {
      projects: { target: 5, current: 0, increment: 5 / steps },
      experience: { target: 3, current: 0, increment: 3 / steps },
      growth: { target: 23, current: 0, increment: 23 / steps }
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        projects: Math.min(Math.round(counters.projects.current), counters.projects.target),
        experience: Math.min(Math.round(counters.experience.current), counters.experience.target),
        growth: Math.min(Math.round(counters.growth.current), counters.growth.target)
      })

      Object.keys(counters).forEach(key => {
        counters[key].current += counters[key].increment
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts({
          projects: 5,
          experience: 3,
          growth: 23
        })
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{counts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.growth}%</div>
            <div className="stat-label">Subscription Growth</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

