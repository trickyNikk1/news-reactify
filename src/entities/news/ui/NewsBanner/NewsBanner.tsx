import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo'
import { setContent } from '@/shared/hocs/setContent'
import { INews } from '../../model/types'
import styles from './styles.module.css'
import { Image } from '@/shared/ui/Image/Image'

interface Props {
  item: INews
}

export const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {' '}
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  )
}

export const NewsBannerSetContent = setContent(NewsBanner, 'banner', 1)
