import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg'
import { ReactComponent as Viber } from '../../assets/svg/viber.svg'
import { ReactComponent as Whatsapp } from '../../assets/svg/whatsapp.svg'

import styles from './styles.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo />
      <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
    </div>

    <nav className={styles.menu}>
      <ul>
        <li><a href="">Услуги</a></li>
        <li><a href="">Виджеты</a></li>
        <li><a href="">Интеграции</a></li>
        <li><a href="">Кейсы</a></li>
        <li><a href="">Сертификаты</a></li>
      </ul>
    </nav>

    <a href="tel:+75555555555" className={styles.phone}>+7 555 555-55-55</a>

    <ul className={styles.socila}>
      <li>
        <a href="">
          <Telegram />
        </a>
      </li>
      <li>
        <a href="">
          <Viber />
        </a>
      </li>
      <li>
        <a href="">
          <Whatsapp />
        </a>
      </li>
    </ul>

  </header>
)

export default Header