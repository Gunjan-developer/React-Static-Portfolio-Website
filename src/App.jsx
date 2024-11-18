import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Service from './Components/Services/Service'
import News from './Components/News/News'
import Testimonals from './Components/Testimonals/Testimonals';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Nav />
      <Header />
      <About />
      <Service />
      <News />
      <Testimonals />
      <Contact />
      <Footer />
    </>
  )
}

export default App
