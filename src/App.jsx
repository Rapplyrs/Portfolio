import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Skills, Hero, Navbar, Works} from './components'; 


const App = () => {

  return (
    <BrowserRouter>
    <div className ="relative z-0 bg-gray-900">

      <div className = " bg-cover bg-no-repeat bg-center">
        
        <Navbar/>

        <Hero/>
        </div>
          <About/>
          <Skills/> 
          <Experience/>
          <Works/>
          <div className="relative z-0">
          <Contact/>

        </div>

    </div>
    </BrowserRouter>
  )

}

export default App
