import { Pagination } from '../Pagination/Pagination'
import { PaginationProps } from '../../interfaces'

interface Props extends PaginationProps {
  top?: boolean
  bottom?: boolean
  children: React.ReactNode
}

export const PaginationWrapper = ({ top, bottom, children, ...paginationProps }: Props) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  )
}
