import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const statItems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="7" y1="19" x2="17" y2="19" />
      </svg>
    ),
    key: 'models',
    target: 12,
    suffix: '+',
    label: 'AI Models Trained'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
        <path d="M6 5h.01M6 12h.01M6 19h.01" />
      </svg>
    ),
    key: 'pipelines',
    target: 8,
    suffix: '+',
    label: 'RAG Pipelines Built'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    key: 'tokens',
    target: 100,
    suffix: 'k+',
    label: 'Tokens Processed'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    key: 'clients',
    target: 50,
    suffix: '+',
    label: 'Global Clients'
  }
]

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ models: 0, pipelines: 0, tokens: 0, clients: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.3 }
    )
    const element = document.querySelector('.stats-section')
    if (element) observer.observe(element)
    return () => { if (element) observer.unobserve(element) }
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    const targets = { models: 12, pipelines: 8, tokens: 100, clients: 50 }
    const increments = Object.fromEntries(
      Object.entries(targets).map(([k, v]) => [k, { current: 0, increment: v / steps }])
    )
    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts(Object.fromEntries(
        Object.entries(targets).map(([k, v]) => [k, Math.min(Math.round(increments[k].current), v)])
      ))
      Object.values(increments).forEach(c => { c.current += c.increment })
      if (step >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statItems.map((item, index) => (
            <motion.div
              key={item.key}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-number">{counts[item.key]}{item.suffix}</div>
              <div className="stat-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
