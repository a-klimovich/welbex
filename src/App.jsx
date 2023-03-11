import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/shared/Container'
import './scss/index.scss'

const App = () => (
  <Container>
    <div className="App">
      <Header />

      <main></main>

      <Footer />
    </div>
  </Container>
)

export default App
