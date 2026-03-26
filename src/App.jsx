import { useState } from 'react'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import AiChat from './sections/AiChat'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Suspense, lazy } from 'react'

const BackgroundCanvas = lazy(() => import('./components/BackgroundCanvas'))

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll()

  return (
    <>
      <Cursor />
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>
      <Loader onDone={() => setLoaded(true)} />

      {loaded && (
        <div className="min-h-screen relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <AiChat />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
