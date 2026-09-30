import { useEffect, useState } from 'react'
import { Loader } from '@/components/Loader/Loader'
import { StickyHeader } from '@/components/Header/StickyHeader'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Skills } from '@/components/Skills/Skills'
import { Experience } from '@/components/Experience/Experience'
import { Projects } from '@/components/Projects/Projects'
import { Testimonials } from '@/components/Testimonials/Testimonials'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export default function App() {
  const [loading, setLoading] = useState(true)
  useLockBodyScroll(loading)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-700 ease-out ${loading ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      >
        <StickyHeader />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
