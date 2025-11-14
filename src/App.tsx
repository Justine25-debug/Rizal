import { useEffect } from 'react'
import Header from './components/landing/header/header'
import Hero from './components/landing/hero/hero'
import MasonryGrid from './components/masonry_grid/masonry-grid'
import Footer from './components/landing/footer/footer'
import About from './components/about/about'
import { Routes, Route } from 'react-router-dom'

const HomePage = () => {
  useEffect(() => {
    document.title = 'José Rizal'
  }, [])

  return (
    <main className="-mt-40 space-y-24 pt-20">
      <Hero />
      <MasonryGrid />
      <Footer />
    </main>
  )
}

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - José Rizal'
  }, [])

  return (
    <main className="pt-24">
      <About />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
