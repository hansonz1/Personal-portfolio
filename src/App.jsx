import Hero from './components/Hero.jsx'
import GTMFeaturedProject from './components/GTMFeaturedProject.jsx'
import StoplossFeaturedProject from './components/StoplossFeaturedProject.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import TopNavigation from './components/TopNavigation.jsx'

function App() {
  return (
    <div id="top">
      <TopNavigation />
      <main>
        <Hero />
        <GTMFeaturedProject />
        <StoplossFeaturedProject />
        <ExperienceSection />
      </main>
    </div>
  )
}

export default App
