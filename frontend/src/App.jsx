import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Advantages from './components/Advantages'
import OrderForm from './components/OrderForm'
import FadeInSection from './components/FadeInSection'

function App() {
  return (
    <div>
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Portfolio />
      </FadeInSection>

      <FadeInSection>
        <Advantages />
      </FadeInSection>

      <FadeInSection>
        <OrderForm />
      </FadeInSection>
    </div>
  )
}

export default App