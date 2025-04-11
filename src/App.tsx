
import './App.css'

import Navbar from './components/nav'
import Description from "./components/description"

import About from "./components/About"
import Skills from "./components/Skills"
import Projets from './components/projets'
import Contactform from "./components/contact"
import Github from "./components/github"
import Footer from "./components/footer"



function App() {
 

  return (
    <section>
    <div>
    <Navbar/>
    </div>
    <main>
    <Description/>
    <About/>
    <Skills/>
    <Projets/>
    <Github/>
    <Contactform/>
    </main>
    <footer>
      <Footer/>
    </footer>
    
  
    </section>
  )
}

export default App
