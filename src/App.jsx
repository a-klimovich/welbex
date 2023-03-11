import Header from './components/Header'
import Footer from './components/Footer'
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
    </div>
  </Container>
)

export default App
