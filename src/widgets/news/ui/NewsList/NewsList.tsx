import { INews } from '@/entities/news'
import { setContent } from '@/shared/hocs/setContent'
import styles from './styles.module.css'
import { NewsCard } from '@/entities/news'

interface Props {
  news?: INews[]
  type?: 'banner' | 'item'
  direction?: 'row' | 'column'
}

export const NewsList = ({ news, type = 'item' }: Props) => {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard item={item} key={item.id} type={type} />
      })}
    </ul>
  )
}

export const NewsListSetContent = setContent<Props>(NewsList, 10)
