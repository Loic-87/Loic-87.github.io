import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'
import SectionHeading from './SectionHeading'

const EMAIL = 'loic.lf87@gmail.com'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Loic-87' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lo%C3%AFc-le-faucheur-14a5023b4/',
  },
  { label: 'Email', href: `mailto:${EMAIL}` },
]

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify({ 'form-name': 'contact', ...formData }),
      })
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <FadeInSection id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <SectionHeading number="05" title="Contact" />

      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-mono text-xs tracking-wider text-primary uppercase">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border border-white/10 bg-bg-elevated px-4 py-2.5 text-text outline-none focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-mono text-xs tracking-wider text-primary uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg border border-white/10 bg-bg-elevated px-4 py-2.5 text-text outline-none focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="font-mono text-xs tracking-wider text-primary uppercase">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg border border-white/10 bg-bg-elevated px-4 py-2.5 text-text outline-none focus:border-primary"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start rounded-lg bg-primary px-6 py-3 font-semibold text-bg disabled:opacity-60"
        >
          {status === 'sending' ? 'Envoi...' : 'Envoyer'}
        </motion.button>

        {status === 'success' && (
          <p className="text-sm font-semibold text-accent" role="status">
            Message envoyé, je te réponds rapidement.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-semibold text-highlight" role="alert">
            Le formulaire n'a pas pu être envoyé. Écris-moi directement à{' '}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
            .
          </p>
        )}
      </form>

      <ul className="mt-10 flex gap-6 border-t border-white/10 pt-8">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={link.label !== 'Email' ? 'noreferrer' : undefined}
              className="text-text-muted hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </FadeInSection>
  )
}

export default Contact
