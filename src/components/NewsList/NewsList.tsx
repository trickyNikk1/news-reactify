import { setContent } from '../../helpers/hocs/setContent'
import { INews } from '../../interfaces'
import { NewsItem } from '../NewsItem/NewsItem'
import styles from './styles.module.css'

interface Props {
  news: INews[]
}

export const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem item={item} key={item.id} />
      })}
    </ul>
  )
}

export const NewsListSetContent = setContent(NewsList, 'item', 10)
