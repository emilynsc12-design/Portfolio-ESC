import { useEffect, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './Contact.css'

/* Placeholders: reemplazar por los enlaces reales. */
const CHANNELS = [
  {
    id: 'email',
    label: 'Email',
    value: 'emilynsc12@gmail.com',
    href: 'mailto:emilynsc12@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+51 923 824 667',
    href: 'https://wa.me/51923824667',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/emilyn-sanchez-castillo',
    href: 'https://www.linkedin.com/in/emilyn-sanchez-castillo/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/emilynsc12-design',
    href: 'https://github.com/emilynsc12-design',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
]

export default function Contact() {
  const cardsRef = useReveal()
  const [copied, setCopied] = useState(false)

  // Fallback para navegadores sin clipboard API segura (o sin permisos).
  const fallbackCopy = (email) => {
    const textarea = document.createElement('textarea')
    textarea.value = email
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    document.body.removeChild(textarea)
    return ok
  }

  const handleCopy = async (email) => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      fallbackCopy(email)
    }
    // Siempre mostramos el correo como mensaje: el usuario puede copiarlo a mano.
    setCopied(true)
  }

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 3000)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <SectionHeading
          title="Contacto"
          description="Escríbeme por el canal que prefieras, me encuentro disponible."
          align="center"
        />

        <div ref={cardsRef} className="contact__grid reveal">
          {CHANNELS.map((channel) => (
            <button
              key={channel.id}
              type="button"
              className="contact__card"
              aria-label={channel.label}
              title={channel.label}
              onClick={() =>
                channel.id === 'email' ? handleCopy(channel.value) : window.open(channel.href, '_blank', 'noopener,noreferrer')
              }
            >
              <span className="contact__icon">{channel.icon}</span>
            </button>
          ))}
        </div>

        {copied && (
          <p className="contact__copied" role="status">
            Correo copiado: <span className="contact__copied-email">emilynsc12@gmail.com</span>
          </p>
        )}
      </div>
    </section>
  )
}
