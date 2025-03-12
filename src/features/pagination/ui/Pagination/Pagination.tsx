import { PaginationProps } from '../../model/types'
import { PaginationButtons } from '../PaginationButtons/PaginationButtons'

interface Props {
  top?: boolean
  bottom?: boolean
  children: React.ReactNode
}

export const Pagination = ({ top, bottom, children, ...paginationProps }: Props & PaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  )
}
