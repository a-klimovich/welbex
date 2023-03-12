import Social from '../Social'
import { PhoneLink } from '../shared/PhoneLink'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import styles from './styles.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <Logo />
      <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
    </div>

    <nav className={styles.menu}>
      <a href="">Услуги</a>
      <a href="">Виджеты</a>
      <a href="">Интеграции</a>
      <a href="">Кейсы</a>
      <a href="">Сертификаты</a>
    </nav>

    <PhoneLink className={styles.phone} />

    <div className={styles.socialWrapper}>
      <Social />
    </div>
  </header>
)

export default Header