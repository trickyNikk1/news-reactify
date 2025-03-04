import { NewsItem } from '../NewsItem/NewsItem'
import styles from './styles.module.css'
export const NewsList = ({news}) => {
    return (
      <ul className={styles.list}>
        {news.map(item => {
          return <NewsItem item={item} key={item.id}>{item.title}</NewsItem>
        })}
      </ul>
    )
}