import styles from './styles.module.css'

interface Props {
  image: string
}

export const Image = ({ image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img className={styles.image} src={image} alt="news banner" /> : null}
    </div>
  )
}
