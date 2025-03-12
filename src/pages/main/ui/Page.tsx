import styles from './styles.module.css'
import { LatestNews } from './LatestNews/LatestNews'
import { NewsByFilters } from './NewsByFilters/NewsByFilters'

export const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  )
}
