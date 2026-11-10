import { useEffect, useRef } from 'react'

/**
 * Comportamiento compartido de los modales (certificados, proyectos):
 * - Escape cierra.
 * - Bloquea el scroll del body mientras está abierto.
 * - Enfoca el botón de cierre al abrir y devuelve el foco al cerrar.
 * - Mantiene el Tab dentro del contenido (focus trap).
 *
 * Uso: const contentRef = useModal(onClose) y pasar el ref al contenedor
 * con el botón que tenga el atributo data-modal-close.
 */
export function useModal(onClose) {
  const contentRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab' || !contentRef.current) return
      const focusables = contentRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const previouslyFocused = document.activeElement
    contentRef.current?.querySelector('[data-modal-close]')?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return contentRef
}
