import styles from './styles.module.scss';

export const Paragraph = ({ children, className }) => (
  <p className={`${styles.paragraph} ${className}`}>{children}</p>
);