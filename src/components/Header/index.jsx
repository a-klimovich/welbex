import Social from '../Social'
import ScrollableArea from '../ScrollableArea'
import { PhoneLink } from '../shared/PhoneLink'
import { ReactComponent as LogoIcon } from '../../assets/svg/logo_icon.svg'
import { ReactComponent as LogoText } from '../../assets/svg/logo_text.svg'
import styles from './styles.module.scss'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoWrapper}>
      <LogoIcon className={styles.logoIcon}/>
      <LogoText className={styles.logoText}/>
      <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
    </div>

    <ScrollableArea
      className={styles.headerMenuBox}
    >
      <nav className={styles.menu}>
        <a href="">Услуги</a>
        <a href="">Виджеты</a>
        <a href="">Интеграции</a>
        <a href="">Кейсы</a>
        <a href="">Сертификаты</a>
      </nav>
    </ScrollableArea>

    <PhoneLink className={styles.phone} />

    <div className={styles.socialWrapper}>
      <Social />
    </div>
  </header>
)

export default Header