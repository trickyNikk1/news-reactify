import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi'
import styles from './styles.module.css'
import { NewsList } from '@/widgets/news'

export const LatestNews = () => {
  const { error, isLoading, data } = useGetLatestNewsQuery(null)
  return (
    <section className={styles.section}>
      <NewsList news={data && data.news} isLoading={isLoading} error={error} direction="row" type="banner" />
    </section>
  )
}
