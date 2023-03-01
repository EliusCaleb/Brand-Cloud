import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Support from './component/Support'
import AllInOne from './component/AllInOne'
import Pricing from './component/Pricing'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Support/>
       <AllInOne/>
       <Pricing/>
    </div>
  )
}

export default App