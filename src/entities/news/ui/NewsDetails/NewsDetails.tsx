import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo'
import { INews } from '../../model/types'
import styles from './styles.module.css'
import { Image } from '@/shared/ui/Image/Image'

interface Props {
  item: INews
}

export const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item?.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){' '}
          <a href={item.url} target="_blank">
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {' '}
          {formatTimeAgo(item.published)} by {item.author}
        </p>
        <ul>
          {item.category.map((category) => {
            return <button className={styles.active}>{category}</button>
          })}
        </ul>
      </div>
    </div>
  )
}
