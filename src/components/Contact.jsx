import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'

const EMAIL = 'loic.lf87@gmail.com'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Loic-87' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lo%C3%AFc-le-faucheur-14a5023b4/',
  },
  { label: 'Email', href: `mailto:${EMAIL}` },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = `Contact portfolio — ${formData.name}`
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`
    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <FadeInSection id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <h2 className="font-display text-3xl font-bold md:text-4xl">
        Contact
      </h2>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold">
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
          <label htmlFor="email" className="text-sm font-semibold">
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
          <label htmlFor="message" className="text-sm font-semibold">
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start rounded-lg bg-primary px-6 py-3 font-semibold text-bg"
        >
          Envoyer
        </motion.button>
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
