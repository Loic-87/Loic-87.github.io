import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const element = document.querySelector(hash)
    element?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Hobbies />
      <Contact />
    </>
  )
}

export default Home
