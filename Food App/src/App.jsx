import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="container main">
      <HeroSection/>
    </div>
    </>
  )
}

export default App
