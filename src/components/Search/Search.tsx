import styles from './styles.module.css'

interface Props {
  keywords: string | number | null
  setKeywords: (keywords: string) => void
}

export const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={styles.search}>
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
