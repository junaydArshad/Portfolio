const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            &copy; {new Date().getFullYear()}{' '}
            <span className="footer-name">Muhammad Junaid Arshad</span>
            <span className="footer-divider">·</span>
            AI Engineer &amp; Product Architect
          </p>
          <div className="footer-links">
            <a href="mailto:junaidarshad439@gmail.com" className="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/junayd-arshad/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://github.com/junaydArshad" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
