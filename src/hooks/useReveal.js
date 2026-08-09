import { useEffect, useRef } from 'react'

/**
 * Añade la clase "is-visible" a un elemento cuando entra en el viewport.
 * Se usa junto a la clase utilitaria ".reveal" definida en index.css.
 */
export function useReveal(options = { threshold: 0.15 }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}
