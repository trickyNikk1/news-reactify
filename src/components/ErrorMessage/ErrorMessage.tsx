import styles from './styles.module.css'

interface Props {
  title: string
  message: string
}

export const ErrorMessage = ({ title, message }: Props) => {
  return (
    <div className={styles.error}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
