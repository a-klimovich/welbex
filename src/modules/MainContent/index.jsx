import Typography from '../../components/Typography'
import styles from './styles.module.scss'

const { Gradient, Title, Paragraph } = Typography;

const MainContent = () => (
  <div className={styles.wrapper}>
    <div className={styles.first}>
      <div className={styles.titleBox}>
        <Title>Зарабатывайте больше</Title>
        <Title weight={900}><Gradient>с WELBEX</Gradient></Title>
      </div>

      <Paragraph>Развиваем и контролируем продажи за вас</Paragraph>
    </div>

    <div className={styles.second}>
      <Title
        size={4}
        weight={700}
      >
        Вместе с {<Gradient>бесплатной <br /> консультацией</Gradient>} мы дарим:
      </Title>

      <div className={styles.grid}>
        <div>
          <Title size={4} weight={700}>Виджеты</Title>
          <Paragraph>30 готовых</Paragraph>
          <Paragraph>решений</Paragraph>
        </div>

        <div>
          <Title size={4} weight={700}>Dashboard</Title>
          <Paragraph>с показателями</Paragraph>
          <Paragraph>вашего бизнеса</Paragraph>
        </div>

        <div>
          <Title size={4} weight={700}>Skype Аудит</Title>
          <Paragraph>отдела продаж</Paragraph>
          <Paragraph>и CRM системы</Paragraph>
        </div>

        <div>
          <Title size={4} weight={700}>35 дней</Title>
          <Paragraph>использования</Paragraph>
          <Paragraph>CRM</Paragraph>
        </div>
      </div>
    </div>
  </div>
)

export default MainContent