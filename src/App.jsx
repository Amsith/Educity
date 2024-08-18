import React from 'react'
import Home from './components/Home/Home'
import Topbar from './components/navbar/Topbar'
import Program from './components/program/Program'
import Header from './components/Header/Header'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Topbar />
      <Home />
      <Header title='Our Program' subtitle='What we Offer' />
      <Program />
      <About />
      <Header title='Gallery' subtitle='Campus Photos' />
      <Gallery/>
      <Header title='Testimonial' subtitle='What Student Says' />
      <Testimonial/>
      <Header title='Contact Us' subtitle='Get in Touch' />
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
