import { useAppSelector } from '@/app/appStore'
import styles from './styles.module.css'
import { Link } from 'react-router'
import { NewsDetails } from '@/entities/news'

export const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews)

  if (!currentNews) {
    return (
      <div>
        <h2>Cannot find the news</h2>
        <Link to={'/'}>
          <h3>Go back to the main page.</h3>
        </Link>
      </div>
    )
  }
  return (
    <main className={styles.news}>
      <h2>{currentNews?.title}</h2>
      <NewsDetails item={currentNews} />
    </main>
  )
}
