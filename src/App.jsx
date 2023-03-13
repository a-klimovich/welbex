import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/shared/Container'
import MainContent from './modules/MainContent'
import './scss/index.scss'

const App = () => (
  <div className="App">
    <Header />

    <main>
      <Container>
        <MainContent />
      </Container>
    </main>

    <Footer />
  </div>
)

export default App
