import styles from './styles.module.css'
import { NewsListSetContent as NewsList } from '../NewsList/NewsList'
import { TOTAL_PAGES } from '../../constants/constants'
import { NewsFilters } from '../NewsFilters/NewsFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PaginationWrapper } from '../PaginationWrapper/PaginationWrapper'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { useAppDispatch, useAppSelector } from '../../store'
import { setFilters } from '../../store/slices/newsSlice'

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters)
  const dispatch = useAppDispatch()

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, error, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }))
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }))
    }
  }

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }))
  }

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />
      <PaginationWrapper
        top={true}
        bottom={true}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      >
        <NewsList news={data ? data.news : []} isLoading={isLoading} error={error} />
      </PaginationWrapper>
    </section>
  )
}
