import { useState, useEffect } from 'react'

const Typewriter = ({ texts, speed = 100, deleteSpeed = 50, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = texts[currentTextIndex]
    const currentSpeed = isDeleting ? deleteSpeed : speed

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setCurrentText(current.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(current.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, currentSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay])

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

export default Typewriter

