import styles from './styles.module.scss';

export const Text = ({ children }) => (
  <span className={styles.text}>{children}</span>
);