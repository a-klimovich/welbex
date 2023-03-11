import styles from './styles.module.scss';

export const Paragraph = ({ children }) => (
  <p className={styles.paragraph}>{children}</p>
);