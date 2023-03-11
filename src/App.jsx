import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/shared/Container'
import Typography from './components/Typography'
import './scss/index.scss'

const { Gradient, Title, Paragraph } = Typography;

const App = () => (
  <Container>
    <div className="App">
      <Header />

      <main>
        <div className="titleBox">
          <Title>Зарабатывайте больше</Title>
          <Title weight={900}><Gradient>с WELBEX</Gradient></Title>
        </div>

        <Paragraph>Развиваем и контролируем продажи за вас</Paragraph>

        Вместе с {<Gradient>бесплатной консультацией</Gradient>} мы дарим:

        <div>
          Виджеты
          30 готовых
          решений

          Dashboard
          с показателями
          вашего бизнеса
          
          Skype Аудит
          отдела продаж
          и CRM системы

          35 дней
          использования
          CRM
        </div>
      </main>

      <Footer />
    </div>
  </Container>
)

export default App
