import styles from "./styles.module.scss"

export const Title = (props) => {
  const { size = 1, weight = 400, className = "", children } = props

  switch (size) {
    case 1:
      return <h1 className={`${styles.h1} ${styles[`weight--${weight}`]} ${className}`}>{children}</h1>

    case 2:
      return <h2 className={`${styles.h2} ${styles[`weight--${weight}`]} ${className}`}>{children}</h2>

    case 3:
      return <h3 className={`${styles.h3} ${styles[`weight--${weight}`]} ${className}`}>{children}</h3>

    case 4:
      return <h4 className={`${styles.h4} ${styles[`weight--${weight}`]} ${className}`}>{children}</h4>

    case 5:
      return <h5 className={`${styles.h5} ${styles[`weight--${weight}`]} ${className}`}>{children}</h5>

    default:
      return null
  }
}
