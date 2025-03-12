import { INews } from '@/entities/news'
import { setContent } from '@/shared/hocs/setContent'
import styles from './styles.module.css'
import { NewsCard } from '@/entities/news'
import { ReactNode } from 'react'

interface Props {
  news?: INews[]
  type?: 'banner' | 'item'
  direction?: 'row' | 'column'
  viewNewsSlot?: (news: INews) => ReactNode
}

export const NewsList = ({ news, type = 'item', viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard item={item} key={item.id} type={type} viewNewsSlot={viewNewsSlot} />
      })}
    </ul>
  )
}

export const NewsListSetContent = setContent<Props>(NewsList, 10)
