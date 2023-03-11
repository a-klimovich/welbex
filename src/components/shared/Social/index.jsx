import { ReactComponent as Telegram } from '../../../assets/svg/telegram.svg'
import { ReactComponent as Viber } from '../../../assets/svg/viber.svg'
import { ReactComponent as Whatsapp } from '../../../assets/svg/whatsapp.svg'
import styles from './styles.module.scss'

const Social = () => (
    <ul className={styles.list}>
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
  )

export default Social