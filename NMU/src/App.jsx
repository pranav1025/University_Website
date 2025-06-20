import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'





const App = () => {
  
  const[playState,setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What we Offer '/>
      <Programs/>
      <About setplayState= {setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos '/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says '/>
      <Testimonials/>
        <Title subTitle='Contact us' title='Get in Touch '/>
        <Contact/>
        <Footer/>
      
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
