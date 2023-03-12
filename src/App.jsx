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

      <Buble size="311px" variant="redLight" top="251px" left="-102px" />
      <Buble size="83px" variant="redBoll" top="83px" left="519px" />
      <Buble size="259px" variant="purpleLight" top="-154px" left="602px" />
      <Buble size="60px" variant="purpleBall" top="-2px" left="868px" />
      <Buble size="28px" variant="redBoll" top="547px" left="851px" />
    </div>
  </Container>
)

export default App
