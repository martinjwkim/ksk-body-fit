import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  ['#about', 'Instructor'],
  ['#classes', 'Classes'],
  ['#schedule', 'Schedule'],
  ['#pricing', 'Pricing'],
  ['#contact', 'Contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-mobile-open', open)
    return () => document.body.classList.remove('nav-mobile-open')
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-brand">
        <span className="nav-brand-main">김선경 Body Fit</span>
      </div>

      <ul className="nav-links">
        {NAV_ITEMS.map(([href, label]) => (
          <li key={href}>
            <a href={href} onClick={close}>{label}</a>
          </li>
        ))}
        <li>
          <a href="tel:7143510936" className="nav-cta" onClick={close}>
            714-351-0936
          </a>
        </li>
      </ul>

      <button
        className="hamburger"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
