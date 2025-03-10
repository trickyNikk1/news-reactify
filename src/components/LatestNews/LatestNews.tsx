import { useGetLatestNewsQuery } from '../../store/services/newsApi'
import { BannersListSetContent as BannersList } from '../BannersList/BannersList'
import styles from './styles.module.css'

export const LatestNews = () => {
  const { error, isLoading, data } = useGetLatestNewsQuery(null)
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} error={error} />
    </section>
  )
}
