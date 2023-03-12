import Header from './components/Header'
import Footer from './components/Footer'
import Buble from './components/Buble'
import Container from './components/Container'
import MainContent from './modules/MainContent'
import './scss/index.scss'


const App = () => (
  <Container>
    <div className="App">
      <Header />

      <main>
        <MainContent />
      </main>

      <Footer />

      <Buble size="calc(var(--index-size) * 31.8)" variant="redLight" top="25%" left="-5%" />
      <Buble size="83px" variant="redBoll" top="83px" left="41.2%" />
      <Buble size="calc(var(--index-size) * 27)" variant="purpleLight" top="-15%" left="45%" />
      <Buble size="60px" variant="purpleBall" top="0.2%" left="60%" />
      <Buble size="28px" variant="redBoll" top="58.6%" left="59.5%" />
    </div>
  </Container>
)

export default App
