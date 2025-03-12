import { INews, NewsBanner } from '@/entities/news'
import { setContent } from '@/shared/hocs/setContent'
import styles from './styles.module.css'

interface Props {
  banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />
      })}
    </ul>
  )
}

export const BannersListSetContent = setContent<Props>(BannersList, 'banner', 10, 'row')
