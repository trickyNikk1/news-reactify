import styles from './styles.module.css'
import { LatestNews } from '../../components/LatestNews/LatestNews'
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters'

export const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  )
}
