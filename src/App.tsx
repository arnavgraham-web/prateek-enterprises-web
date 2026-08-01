import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Strength } from './components/Strength'
import { TrustPanel } from './components/TrustPanel'
import { Clientele } from './components/Clientele'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Location } from './components/Location'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Strength />
        <TrustPanel />
        <Clientele />
        <Testimonials />
        <Faq />
        <Location />
      </main>
      <Footer />
    </>
  )
}
