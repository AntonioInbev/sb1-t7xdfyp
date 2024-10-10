import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import LevantateHero from './components/LevantateHero'
import EventDetails from './components/EventDetails'
import PhotoGallery from './components/PhotoGallery'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow">
        <LevantateHero />
        
        <div className="container mx-auto px-4 py-12">
          <EventDetails />
          <PhotoGallery />
        </div>
        
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App