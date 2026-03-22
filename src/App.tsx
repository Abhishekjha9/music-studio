import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Space } from './components/Space'
import { Work } from './components/Work'

function App() {
  return (
    <div className="min-h-svh relative font-sans text-ice-text bg-ice-bg selection:bg-ice-magic selection:text-white">
      {/* Global animated snowfield inspired by hero background */}
      <div className="fixed inset-0 z-0 snowfield opacity-60 pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Space />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
