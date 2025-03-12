export interface PaginationProps {
  totalPages: number
  currentPage: number
  handleNextPage: () => void
  handlePreviousPage: () => void
  handlePageClick: (page: number) => void
}
