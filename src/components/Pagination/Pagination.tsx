import { useTheme } from '../../context/ThemeContext'
import { PaginationProps } from '../../interfaces'
import styles from './styles.module.css'

export const Pagination = ({
  totalPages,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}: PaginationProps) => {
  const { isDark } = useTheme()
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={styles.arrow} type="button">
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              key={index}
              type="button"
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
      <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow} type="button">
        {'>'}
      </button>
    </div>
  )
}
