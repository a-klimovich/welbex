import styles from './styles.module.scss'

export const PhoneLink = ({ className, ...rest }) => (
  <a 
    href="tel:+75555555555"
    className={`${styles.phone} ${className}`}
    {...rest}
  >
    +7 555 555-55-55
  </a>
);