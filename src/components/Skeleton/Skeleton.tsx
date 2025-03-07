import { DirectionType, SkeletonType } from '../../interfaces'
import styles from './styles.module.css'

interface Props {
  count?: number
  type?: SkeletonType
  direction?: DirectionType
}

export const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }: Props) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={styles[type]}></li>
          ))}
        </ul>
      ) : (
        <div className={styles[type]}></div>
      )}
    </>
  )
}
