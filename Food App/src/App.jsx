import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ImproveSkills from './Components/ImproveSkills'
import QuoteSection from './Components/QuoteSection'
import ChefSection from './Components/ChiefsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="container main">
      <HeroSection/>
      <ImproveSkills/>
      <QuoteSection/>
      <ChefSection/>
    </div>
    </>
  )
}

export default App
