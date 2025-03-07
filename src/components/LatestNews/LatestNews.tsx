import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { NewsApiResponse } from '../../interfaces'
import { BannersListSetContent as BannersList } from '../BannersList/BannersList'
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data, error, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} error={error} />
    </section>
  )
}
