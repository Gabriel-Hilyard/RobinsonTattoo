import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Specialties from './components/Specialties'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Navigation />
    <Hero />
    <Carousel />
    <Specialties />
    <Footer />
    </>
  )
}

export default App
