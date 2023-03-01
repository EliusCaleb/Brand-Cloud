import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Support from './component/Support'
import AllInOne from './component/AllInOne'
import Pricing from './component/Pricing'
import Footer from './component/Footer'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Support/>
       <AllInOne/>
       <Pricing/>
       <Footer/>
    </div>
  )
}

export default App