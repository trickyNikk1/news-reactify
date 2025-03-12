import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Skeleton } from '../ui/Skeleton/Skeleton'
import { DirectionType, SkeletonType } from '../interfaces'
import { SerializedError } from '@reduxjs/toolkit'
import { ErrorMessage } from '../ui/ErrorMessage/ErrorMessage'

interface Props {
  isLoading: boolean
  error?: FetchBaseQueryError | SerializedError
  direction?: DirectionType
  type?: SkeletonType
}

export function setContent<P extends object>(Component: React.ComponentType<P>, count: number = 1) {
  return function SetContent(props: Props & P) {
    const { isLoading, error, direction = 'column', type = 'item', ...restProps } = props
    if (error) {
      return (
        <ErrorMessage
          title={'status' in error ? error.status + ' ' : 'ERROR'}
          message={'error' in error ? error.error : 'Ooops! Something went wrong...'}
        />
      )
    }
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }
    if (!isLoading && !error) {
      return <Component type={type} {...(restProps as P)} />
    }
  }
}
