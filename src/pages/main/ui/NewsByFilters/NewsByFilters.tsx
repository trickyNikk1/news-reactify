import { useAppSelector, useAppDispatch } from '@/app/appStore'
import { NewsList } from '@/widgets/news/ui'
import { TOTAL_PAGES } from '@/shared/constants/constants'
import { useDebounce } from '@/shared/hooks/useDebounce'

import { NewsFilters } from '../NewsFilters/NewsFilters'
import styles from './styles.module.css'
import { useGetNewsQuery } from '@/entities/news/api/newsApi'
import { setFilters } from '@/entities/news/model/newsSlice'
import { Pagination } from '@/features/pagination'

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
      <Pagination
        top={true}
        bottom={true}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      >
        <NewsList news={data ? data.news : []} isLoading={isLoading} error={error} />
      </Pagination>
    </section>
  )
}
