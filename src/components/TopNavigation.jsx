import { useEffect, useId, useRef, useState } from 'react'

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e]'
const iconLink = `inline-flex size-11 shrink-0 items-center justify-center rounded-full text-[#656762] hover:text-[#242623] ${focus}`

function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const menuButton = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        if (menuButton.current?.getClientRects().length) menuButton.current.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  function closeMenu() {
    setIsOpen(false)
  }

  const resumeLink = (
    <a href="/Hanson_Z_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => {
      closeMenu()
      if (menuButton.current?.getClientRects().length) menuButton.current.focus()
    }} className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#242623] px-4 text-sm font-medium text-white hover:bg-[#434a3e] md:w-auto ${focus}`}>
      Resume<span className="sr-only"> (opens in a new tab)</span>
    </a>
  )

  return (
    <header className="sticky top-0 z-30 border-b border-[#dedfd9] bg-[#fafaf8]">
      <nav aria-label="Main navigation" className="content-container flex items-center gap-6 py-3 md:py-4">
        <a href="#top" onClick={closeMenu} aria-label="Zhenhao (Hanson) Zhang — back to top" className={`mr-auto inline-flex min-h-11 min-w-0 items-center rounded-sm text-sm leading-snug font-semibold tracking-tight sm:text-base ${focus}`}>
          Zhenhao (Hanson) Zhang
        </a>

        <button ref={menuButton} type="button" aria-expanded={isOpen} aria-controls={menuId} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsOpen(!isOpen)} className={`inline-flex size-11 shrink-0 items-center justify-center rounded-sm text-[#454a41] md:hidden ${focus}`}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
            <path d={isOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div id={menuId} className={`${isOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full max-h-[calc(100dvh-var(--top-navigation-height))] flex-col border-b border-[#dedfd9] bg-[#fafaf8] px-6 pb-3 shadow-[0_4px_6px_-6px_#24262333] overflow-y-auto sm:px-10 md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-6 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          <div className="flex flex-col border-t border-[#dedfd9] py-2 md:flex-row md:gap-5 md:border-0 md:py-0">
            <a href="#projects" onClick={closeMenu} className={`inline-flex min-h-12 items-center rounded-sm text-sm text-[#454a41] hover:underline underline-offset-4 md:min-h-11 ${focus}`}>Projects</a>
            <a href="#experience" onClick={closeMenu} className={`inline-flex min-h-12 items-center rounded-sm text-sm text-[#454a41] hover:underline underline-offset-4 md:min-h-11 ${focus}`}>Experience</a>
          </div>
          {/* Match each layout's reading order; the other Resume is display:none. */}
          <div className="border-t border-[#dedfd9] py-4 md:hidden">
            {resumeLink}
          </div>
          <div className="flex items-center justify-center gap-10 border-t border-[#dedfd9] pt-3 md:gap-0 md:border-0 md:pt-0">
            <a href="https://github.com/hansonz1" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.97 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.54.23 2.68.12 2.97.72.79 1.15 1.79 1.15 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hanson-z/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M5.2 7.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21H17v-6c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.2V9Z" />
              </svg>
            </a>
          </div>
          <div className="hidden md:block">
            {resumeLink}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default TopNavigation

