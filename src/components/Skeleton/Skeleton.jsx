import styles from './styles.module.css'
export const Skeleton = ({count = 1, type="banner"}) => {
  return (
    <>
      {count > 1 ? 
        ( <ul className={styles.list}> 
          {[...Array(count)].map((_, index) => (<li key={index} className={styles[type]}></li>))} 
          </ul>
        ) 
        : 
        (<div className={styles[type]}></div>)
      }
    </>
  )
}