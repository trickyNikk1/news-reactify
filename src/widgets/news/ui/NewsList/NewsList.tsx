import { INews, NewsItem } from '@/entities/news'
import { setContent } from '@/shared/hocs/setContent'
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
