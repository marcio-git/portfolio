import './App.css'
import NavBar from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <Home />
        <About />
        <Technologies />
        <Portfolio />
      </div>
      <Footer />
    </div>
  )
}

export default App
