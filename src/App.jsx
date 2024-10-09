import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import HowItHelps from './Components/HowItHelps/HowItHelps'
import Uses from './Components/Uses/Uses'
import Trust from './Components/Trust/Trust'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <main className=''>
      <Navbar/>
      <Hero/>
      <HowItHelps />
      <Uses/>
      <Trust/>
      <Footer/>
    </main>
  )
}

export default App