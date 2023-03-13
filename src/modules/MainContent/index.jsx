import Typography from '../../components/Typography'
import styles from './styles.module.scss'

const { Gradient, Title, Paragraph } = Typography;

const MainContent = () => (
  <div className={styles.wrapper}>
    <div className={styles.first}>
      <div className={styles.title}>
        <Title>Зарабатывайте больше</Title>
        <Title weight={900}><Gradient>с WELBEX</Gradient></Title>
      </div>

      <div className={styles.subtitle}>
        <Paragraph>Развиваем и контролируем</Paragraph>
        <Paragraph>продажи за вас</Paragraph>
      </div>
    </div>

    <div className={styles.second}>
      <Title
        size={2}
        weight={700}
        className={styles.secondTitle}
      >
        <span className={styles.fixLetterSpace}>
          Вместе с
        </span>
        {' '}
        {<Gradient>БЕСПЛАТНОЙ <br /> КОНСУЛЬТАЦИЕЙ</Gradient>}
        {' '}
        <span className={styles.fixLetterSpace}>
          мы дарим:
        </span>
      </Title>

      <div className={styles.grid}>
        <div>
          <Title size={4} weight={700} className={styles.titleGridItem}>ВИДЖЕТЫ</Title>
          <Paragraph>30 готовых</Paragraph>
          <Paragraph>решений</Paragraph>
        </div>

        <div>
          <Title size={4} weight={700} className={styles.titleGridItem}>DASHBOARD</Title>
          <Paragraph>с показателями</Paragraph>
          <Paragraph>вашего бизнеса</Paragraph>
        </div>

        <div>
          <Title size={4} weight={700} className={styles.titleGridItem}>SKYPE АУДИТ</Title>
          <Paragraph>отдела продаж</Paragraph>
          <Paragraph>и CRM системы</Paragraph>
        </div>

        <div>
          <Title size={4} weight={700} className={styles.titleGridItem}>35 ДНЕЙ</Title>
          <Paragraph>использования</Paragraph>
          <Paragraph>CRM</Paragraph>
        </div>
      </div>

      <button
        type="button"
        className={styles.button}
      >
        Получить консультацию
      </button>
    </div>
  </div>
)

export default MainContent