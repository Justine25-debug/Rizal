import Header from './components/landing/header/header'
import Hero from './components/landing/hero/hero'
import MasonryGrid from './components/masonry_grid/masonry-grid'

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />
      <main className="-mt-40 space-y-24 pt-20">
        <Hero />
        <MasonryGrid />
      </main>
    </div>
  )
}

export default App
