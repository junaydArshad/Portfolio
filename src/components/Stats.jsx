import { useEffect, useState } from 'react'

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ models: 0, pipelines: 0, tokens: 0 })

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
      models: { target: 12, current: 0, increment: 12 / steps },
      pipelines: { target: 8, current: 0, increment: 8 / steps },
      tokens: { target: 100, current: 0, increment: 100 / steps }
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        models: Math.min(Math.round(counters.models.current), counters.models.target),
        pipelines: Math.min(Math.round(counters.pipelines.current), counters.pipelines.target),
        tokens: Math.min(Math.round(counters.tokens.current), counters.tokens.target)
      })

      Object.keys(counters).forEach(key => {
        counters[key].current += counters[key].increment
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts({
          models: 12,
          pipelines: 8,
          tokens: 100
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
            <div className="stat-number">{counts.models}+</div>
            <div className="stat-label">AI Models Trained</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.pipelines}+</div>
            <div className="stat-label">RAG Pipelines Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{counts.tokens}k+</div>
            <div className="stat-label">Tokens Processed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

