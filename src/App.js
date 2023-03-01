import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './component/About'
import Support from './component/Support'
import AllInOne from './component/AllInOne'

function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Support/>
       <AllInOne/>
    </div>
  )
}

export default App