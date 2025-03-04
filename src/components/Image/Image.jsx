import styles from './styles.module.css'
export const Image = ({image}) => {
    return (
      <div className={styles.wrapper}>
          {image ? <img className={styles.image} src={image} alt="news banner"/> : null}
      </div>
    )
}