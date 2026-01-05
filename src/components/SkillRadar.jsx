import { useEffect, useRef } from 'react'

const SkillRadar = ({ skills }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20
    const numSkills = skills.length
    const angleStep = (2 * Math.PI) / numSkills

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid circles
    ctx.strokeStyle = 'var(--border-color)'
    ctx.lineWidth = 1
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI)
      ctx.stroke()
    }

    // Draw grid lines
    for (let i = 0; i < numSkills; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()
    }

    // Draw skill points and labels
    ctx.fillStyle = 'var(--text-primary)'
    ctx.font = '12px Inter'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const level = skill.level || 0.8 // Default level
      const x = centerX + (radius * level) * Math.cos(angle)
      const y = centerY + (radius * level) * Math.sin(angle)

      // Draw point
      ctx.fillStyle = 'var(--primary-color)'
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fill()

      // Draw label
      const labelX = centerX + (radius + 15) * Math.cos(angle)
      const labelY = centerY + (radius + 15) * Math.sin(angle)
      ctx.fillStyle = 'var(--text-primary)'
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Draw polygon connecting points
    ctx.strokeStyle = 'var(--primary-color)'
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.lineWidth = 2
    ctx.beginPath()
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const level = skill.level || 0.8
      const x = centerX + (radius * level) * Math.cos(angle)
      const y = centerY + (radius * level) * Math.sin(angle)
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }, [skills])

  return (
    <div className="skill-radar-container">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="skill-radar-canvas"
      />
    </div>
  )
}

export default SkillRadar

