import styles from './styles.module.scss'

export const Gradient = ({ children, className = "" }) => (
  <span className={`${styles.gradient} ${className}`}>{children}</span>
);