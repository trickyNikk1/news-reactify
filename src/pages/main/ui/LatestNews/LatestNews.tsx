import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi'
import styles from './styles.module.css'
import { NewsList } from '@/widgets/news'
import { INews } from '@/entities/news'
import { useAppDispatch } from '@/app/appStore'
import { setCurrentNews } from '@/entities/news/model/newsSlice'
import { useNavigate } from 'react-router'

export const LatestNews = () => {
  const { error, isLoading, data } = useGetLatestNewsQuery(null)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news))
    navigate(`/news/${news.id}`)
  }

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data.news}
        isLoading={isLoading}
        error={error}
        direction="row"
        type="banner"
        viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more...</p>}
      />
    </section>
  )
}
