import { useEffect, useRef } from 'react'

const SkillRadar = ({ skills }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40 // More padding
    const numSkills = skills.length
    const angleStep = (2 * Math.PI) / numSkills

    // Get styles
    const styles = getComputedStyle(document.documentElement)
    const primaryColor = styles.getPropertyValue('--primary-color').trim()
    const textColor = styles.getPropertyValue('--text-primary').trim()
    const borderColor = styles.getPropertyValue('--border-color').trim()

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid circles
    ctx.strokeStyle = borderColor || '#333'
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

    // Draw polygon connecting points
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
    ctx.fillStyle = `${primaryColor}40` // Add opacity
    ctx.fill()
    ctx.strokeStyle = primaryColor || '#BB86FC'
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw skill points and labels
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = '14px Inter, sans-serif' // Explicit font family

    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2
      const level = skill.level || 0.8 // Default level
      const x = centerX + (radius * level) * Math.cos(angle)
      const y = centerY + (radius * level) * Math.sin(angle)

      // Draw point
      ctx.fillStyle = primaryColor || '#BB86FC'
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fill()

      // Draw label
      const labelRadius = radius + 25
      const labelX = centerX + labelRadius * Math.cos(angle)
      const labelY = centerY + labelRadius * Math.sin(angle)

      ctx.fillStyle = textColor || '#FFF'
      ctx.fillText(skill.name, labelX, labelY)
    })

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

