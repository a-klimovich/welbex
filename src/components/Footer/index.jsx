import Typography from '../Typography'
import Social from '../Social'
import styles from './styles.module.scss'

const { Title, Text } = Typography;

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.column}>
        <Title size={5} weight={700} className={styles.title}>О компании</Title>
        <ul className={styles.list}>
          <li><a href="#">Партнёрская программа</a></li>
          <li><a href="#">Вакансии</a></li>
        </ul>
      </div>
      
      <div className={styles.listBox}>
        <Title size={5} weight={700} className={styles.title}>Меню</Title>
        <div>
          <ul className={styles.list}>
            <li><a href="#">Расчёт стоимости</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Виджеты</a></li>
            <li><a href="#">Интеграции</a></li>
            <li><a href="#">Наши клиенты</a></li>
          </ul>

          <ul className={styles.list}>
            <li><a href="#">Кейсы</a></li>
            <li><a href="#">Благодарственные письма</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">Блог на Youtube</a></li>
            <li><a href="#">Вопрос / Ответ</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.columnContacts}>
        <Title size={5} weight={700} className={styles.title}>Контакты</Title>
        <ul className={styles.list}>
          <li><a href="tel:+75555555555" className={styles.phone}>+7 555 555-55-55</a></li>
          <li className={styles.social}><Social /></li>
          <li><a href="#">Москва, Путевой проезд 3с1, к 902</a></li>
        </ul>
      </div>
    </div>
  
    <div className={styles.bottom}>
      <Text>©WELBEX 2022. Все права защищены.</Text>
      <a href="#">Политика конфиденциальности</a>
    </div>
  </div>
)

export default Footer