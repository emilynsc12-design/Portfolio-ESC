import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { certificates } from '../../data/certificates.js'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import './Certificates.css'

function CertificateCard({ certificate, onOpen }) {
  const ref = useReveal()
  return (
    <figure ref={ref} className="certificate-card reveal">
      <button
        type="button"
        className="certificate-card__image-wrap"
        onClick={() => onOpen(certificate)}
        aria-label={`Ver certificado: ${certificate.title}`}
      >
        <img src={certificate.image} alt={`Certificado: ${certificate.title}`} loading="lazy" />
      </button>
      <figcaption>
        <h3 className="certificate-card__title">{certificate.title}</h3>
        <p className="certificate-card__meta">
          {certificate.issuer} <span aria-hidden="true">·</span> {certificate.date}
        </p>
      </figcaption>
    </figure>
  )
}

function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return createPortal(
    <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={certificate.title} onClick={onClose}>
      <div className="certificate-modal__content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="certificate-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>
        <img src={certificate.image} alt={`Certificado: ${certificate.title}`} />
        <div className="certificate-modal__caption">
          <h3>{certificate.title}</h3>
          <p>{certificate.issuer} · {certificate.date}</p>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificados" className="section certificates">
      <div className="container">
        <SectionHeading
          title="Certificados"
          description="Formación complementaria en herramientas y metodologías de análisis de datos."
        />

        <div className="certificates__grid">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
