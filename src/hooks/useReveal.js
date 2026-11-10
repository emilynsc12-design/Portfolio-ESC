import { useEffect, useRef } from 'react'

/**
 * Añade la clase "is-visible" a un elemento cuando entra en el viewport.
 * Se usa junto a la clase utilitaria ".reveal" definida en index.css.
 */
const DEFAULT_OPTIONS = { threshold: 0.15 }

export function useReveal(options = DEFAULT_OPTIONS) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // Nota: si necesitas opciones dinámicas, pásalas como objeto estable (useMemo).
  }, [options])

  return ref
}
