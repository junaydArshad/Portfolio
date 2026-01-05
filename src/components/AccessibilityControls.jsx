import { useState, useEffect } from 'react'

const AccessibilityControls = () => {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('fontSize')
    return saved ? parseInt(saved) : 16
  })

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
    localStorage.setItem('fontSize', fontSize.toString())
  }, [fontSize])

  const increaseFontSize = () => {
    if (fontSize < 20) {
      setFontSize(fontSize + 2)
      document.documentElement.style.fontSize = `${fontSize + 2}px`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2)
      document.documentElement.style.fontSize = `${fontSize - 2}px`
    }
  }

  const resetFontSize = () => {
    setFontSize(16)
    document.documentElement.style.fontSize = '16px'
  }

  return (
    <div className="accessibility-controls" title="Font Size Controls">
      <div className="font-size-controls">
        <button
          className="accessibility-btn"
          onClick={decreaseFontSize}
          aria-label="Decrease font size"
          title="Decrease font size"
          disabled={fontSize <= 12}
        >
          A−
        </button>
        <button
          className="accessibility-btn"
          onClick={resetFontSize}
          aria-label="Reset font size"
          title="Reset font size"
        >
          A
        </button>
        <button
          className="accessibility-btn"
          onClick={increaseFontSize}
          aria-label="Increase font size"
          title="Increase font size"
          disabled={fontSize >= 20}
        >
          A+
        </button>
      </div>
    </div>
  )
}

export default AccessibilityControls

