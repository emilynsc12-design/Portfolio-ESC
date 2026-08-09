import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#inicio" className="footer__brand">
          <span className="footer__brand-mark">ES</span>
        </a>

        <p className="footer__copy">
          © {year} Emilyn Sanchez Castillo. Todos los derechos reservados.
        </p>

        <nav className="footer__links" aria-label="Redes sociales">
          <a href="https://www.linkedin.com/in/emilyn-sanchez-castillo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/emilynsc12-design" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://wa.me/51923824667" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  )
}
