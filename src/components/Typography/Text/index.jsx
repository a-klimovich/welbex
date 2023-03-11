import styles from './styles.module.scss';

export const Text = ({ children, className = "" }) => (
  <span className={`${styles.text} ${className}`}>{children}</span>
);