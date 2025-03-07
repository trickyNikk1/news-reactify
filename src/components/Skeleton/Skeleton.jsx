import styles from './styles.module.css'
export const Skeleton = ({count = 1, type="banner", direction = 'column'}) => {
  return (
    <>
      {count > 1 ? 
        ( <ul className={direction === 'column' ? styles.columnList : styles.rowList}> 
          {[...Array(count)].map((_, index) => (<li key={index} className={styles[type]}></li>))} 
          </ul>
        ) 
        : 
        (<div className={styles[type]}></div>)
      }
    </>
  )
}