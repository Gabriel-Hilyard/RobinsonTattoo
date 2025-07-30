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
     <video
     autoPlay
     loop
     muted
     playsInline
     className="backgroundVideoGlobal"
       >
     <source src="/video/ashDragonv2.mp4" type="video/mp4"/>
     Your browser does not support the video tag.
     </video>
    <Navigation />
    <Hero />
    <Carousel />
    <Specialties />
    <Footer />
    </>
  )
}

export default App
