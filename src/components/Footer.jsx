const Footer = () => {
  return (
    <footer className="footer glass-panel" style={{ borderRadius: 0, borderLeft: 0, borderRight: 0, borderBottom: 0 }}>
      <div className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <p className="footer-text" style={{ color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Muhammad Junaid Arshad | AI Engineer & Product Architect.
        </p>
      </div>
    </footer>
  )
}

export default Footer
