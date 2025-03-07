import styles from './styles.module.css'
import { NewsListWithSkeleton as NewsList } from '../NewsList/NewsList'
import { Pagination } from '../Pagination/Pagination'
import { TOTAL_PAGES } from '../../constants/constants'
import { NewsFilters } from '../NewsFilters/NewsFilters'


export const NewsByFilters = ({filters, changeFilters, isLoading, news}) => {

  const handleNextPage = () => {
    if(filters.page_number < TOTAL_PAGES) {
      changeFilters('page_number', filters.page_number + 1)
    }
  }
  
  const handlePreviousPage = () => {
    if(filters.page_number > 1) {
      changeFilters('page_number', filters.page_number - 1)
    }
  }
  
  const handlePageClick = (pageNumber) => {
      changeFilters('page_number', pageNumber)
  }

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters}/>
      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES} 
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />

      <NewsList news={news} isLoading={isLoading}/>

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES} 
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />
    </section>
  )
}