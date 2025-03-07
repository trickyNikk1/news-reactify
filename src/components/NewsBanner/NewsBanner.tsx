import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { setContent } from '../../helpers/hocs/setContent'
import { INews } from '../../interfaces'
import { Image } from '../Image/Image'
import styles from './styles.module.css'

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
