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

export function Obs (show, hide, mil = 50, bool) {
  const observer = new IntersectionObserver((entries) => {
    for(let i = 0; i < entries.length; i++) {
      setTimeout(function(){
        if(entries[i].isIntersecting) entries[i].target.classList.add(show);
        else if (bool) entries[i].target.classList.remove(show);
      },i*mil)
    }
  }) 
  const hiddenElements = document.querySelectorAll(`.${hide}`);
  hiddenElements.forEach(el => observer.observe(el))
}
