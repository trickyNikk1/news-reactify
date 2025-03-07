import styles from './styles.module.css'
import { NewsListSetContent as NewsList } from '../NewsList/NewsList'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import { NewsFilters } from '../NewsFilters/NewsFilters'
import { useFilters } from '../../helpers/hooks/useFilters'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getNews } from '../../api/apiNews'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { PaginationWrapper } from '../PaginationWrapper/PaginationWrapper'
import { NewsApiResponse, ParamsType } from '../../interfaces'

export const NewsByFilters = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, error, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters('page_number', filters.page_number + 1)
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters('page_number', filters.page_number - 1)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    changeFilters('page_number', pageNumber)
  }

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />
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
