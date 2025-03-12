import { NewsList } from '@/widgets/news'
import { TOTAL_PAGES } from '@/shared/constants/constants'
import { Pagination } from '@/features/pagination'
import { IFilters } from '@/shared/interfaces'
import { INews } from '@/entities/news'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { usePaginationNews } from '../../utils/hooks/usePaginationNews'

interface Props {
  filters: IFilters
  news: INews[]
  isLoading: boolean
  error?: FetchBaseQueryError | SerializedError
}

export const NewsListWithPagination = ({ filters, news, isLoading, error }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } = usePaginationNews(filters)

  return (
    <Pagination
      top={true}
      bottom={true}
      currentPage={filters.page_number}
      totalPages={TOTAL_PAGES}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
    >
      <NewsList type="item" direction="column" news={news} isLoading={isLoading} error={error} />
    </Pagination>
  )
}
