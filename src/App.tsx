import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import MenuHighlight from './components/MenuHighlight'
import SpecialMenu from './components/SpecialMenu'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="feature"><Features /></div>
      <div id="about"><About /></div>
      <MenuHighlight />
      <div id="menu"><SpecialMenu /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App

