import { useEffect } from 'react'
import Header from './components/landing/header/header'
import Hero from './components/landing/hero/hero'
import MasonryGrid from './components/masonry_grid/masonry-grid'
import Footer from './components/landing/footer/footer'
import About from './components/about/about'
import Timeline from './components/life/timeline'
import Family from './components/life/family'
import WomenOfRizal from './components/life/womenofrizal'
import Works from './components/works/works'
import Novels from './components/works/novels'
import Poetry from './components/works/poetry'
import EssaysAndArticles from './components/works/essaysandarticles'
import OtherWorks from './components/works/others'
import { Routes, Route, useLocation } from 'react-router-dom'

const normalizeLabel = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '')

const labelsMatch = (left: string, right: string) => {
  const a = normalizeLabel(left)
  const b = normalizeLabel(right)
  if (!a || !b) return false
  return a === b || a.includes(b) || b.includes(a)
}

const getCardTitleFromButton = (button: HTMLButtonElement) => {
  const titleNode = button.querySelector('p.bebas-neue-regular')
  return (titleNode?.textContent ?? button.textContent ?? '').trim()
}

const findCollapsedCardButton = (root: ParentNode, label: string) => {
  const buttons = Array.from(root.querySelectorAll('button')) as HTMLButtonElement[]
  for (const button of buttons) {
    const title = getCardTitleFromButton(button)
    if (labelsMatch(title, label)) return button
  }
  return null
}

const findExpandedCard = (root: ParentNode, label: string) => {
  const headings = Array.from(root.querySelectorAll('h2'))
  for (const heading of headings) {
    const title = (heading.textContent ?? '').trim()
    if (!labelsMatch(title, label)) continue

    const card = heading.closest('div.order-2') as HTMLDivElement | null
    if (card) return card
  }
  return null
}

const highlightCard = (card: HTMLDivElement) => {
  card.style.transition = 'box-shadow 220ms ease, border-color 220ms ease'
  card.style.boxShadow = '0 0 0 3px rgba(167, 39, 3, 0.45)'
  card.style.borderColor = 'rgba(167, 39, 3, 0.6)'
  window.setTimeout(() => {
    card.style.boxShadow = ''
    card.style.borderColor = ''
  }, 1800)
}

const HomePage = () => {
  useEffect(() => {
    document.title = 'José Rizal'
  }, [])

  return (
    <main className="-mt-40 space-y-24 pt-20">
      <Hero />
      <Works matchMasonryWidth />
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

const WorksPage = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Works - José Rizal'
  }, [])

  useEffect(() => {
	const searchParams = new URLSearchParams(location.search)
	const itemLabel = searchParams.get('item')

    const sectionId = location.hash ? decodeURIComponent(location.hash.replace('#', '')) : ''
    const sectionRoot = sectionId ? document.getElementById(sectionId) : null

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (sectionRoot) {
      requestAnimationFrame(() => {
        sectionRoot.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    if (!itemLabel) return

    const searchRoot: ParentNode = sectionRoot ?? document
    const alreadyExpanded = findExpandedCard(searchRoot, itemLabel)
    if (alreadyExpanded) {
      requestAnimationFrame(() => {
        alreadyExpanded.scrollIntoView({ behavior: 'smooth', block: 'center' })
        highlightCard(alreadyExpanded)
      })
      return
    }

    const collapsedButton = findCollapsedCardButton(searchRoot, itemLabel)
    if (!collapsedButton) return

    requestAnimationFrame(() => {
      collapsedButton.click()
      window.setTimeout(() => {
        const expandedCard = findExpandedCard(searchRoot, itemLabel)
        if (!expandedCard) return

        expandedCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
        highlightCard(expandedCard)
      }, 220)
    })
  }, [location.hash, location.search])

  return (
    <main className="">
      <section id="novels" className="scroll-mt-24">
        <Novels />
      </section>
      <section id="poetry" className="scroll-mt-24">
        <Poetry />
      </section>
      <section id="essays-and-articles" className="scroll-mt-24">
        <EssaysAndArticles />
      </section>
      <section id="other-works" className="scroll-mt-24">
        <OtherWorks />
      </section>
      <Footer />
    </main>
  )
}

const TimelinePage = () => {
  useEffect(() => {
    document.title = 'Timeline - José Rizal'
  }, [])

  return (
    <main className="">
      <Timeline />
      <Footer />
    </main>
  )
}

const FamilyPage = () => {
  return (
    <main className="">
      <Family />
      <Footer />
    </main>
  )
}

const WomenOfRizalPage = () => {
  return (
    <main className="">
      <WomenOfRizal />
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
        <Route path="/life" element={<TimelinePage />} />
			  <Route path="/life/family" element={<FamilyPage />} />
        <Route path="/life/women-of-rizal" element={<WomenOfRizalPage />} />
			  <Route path="/works" element={<WorksPage />} />
			  <Route path="/works/novels" element={<Novels />} />
			  <Route path="/works/poetry" element={<Poetry />} />
			  <Route path="/works/essays-and-articles" element={<EssaysAndArticles />} />
			  <Route path="/works/other-works" element={<OtherWorks />} />
      </Routes>
    </div>
  )
}

export default App
