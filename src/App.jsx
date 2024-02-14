import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
