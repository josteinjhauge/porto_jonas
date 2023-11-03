import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </main>

    </>
  )
}

export default App
