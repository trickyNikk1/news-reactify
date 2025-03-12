import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi'
import { BannersList } from '@/widgets/news/ui'
import styles from './styles.module.css'

export const LatestNews = () => {
  const { error, isLoading, data } = useGetLatestNewsQuery(null)
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} error={error} />
    </section>
  )
}
