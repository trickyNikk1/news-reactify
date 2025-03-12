import { useTheme } from '@/app/providers/ThemeProvider'
import styles from './styles.module.css'

interface Props {
  keywords: string | number | null
  setKeywords: (keywords: string) => void
}

export const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme()

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type="text"
        value={keywords?.toString()}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript"
      />
    </div>
  )
}
