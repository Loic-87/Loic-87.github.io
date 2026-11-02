import { useState } from 'react'

const LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-bg/90 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a href="#accueil" className="font-display text-lg font-bold">
          Loïc Le Faucheur
        </a>

        {/* Liens desktop */}
        <ul className="hidden gap-6 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          className="text-text md:hidden"
        >
          {isOpen ? 'Fermer' : 'Menu'}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul id="menu-mobile" className="flex flex-col gap-4 px-6 pb-6 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Nav
