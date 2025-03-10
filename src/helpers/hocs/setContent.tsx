import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Skeleton } from '../../components/Skeleton/Skeleton'
import { DirectionType, SkeletonType } from '../../interfaces'
import { SerializedError } from '@reduxjs/toolkit'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

interface Props {
  isLoading: boolean
  error?: FetchBaseQueryError | SerializedError
}

export function setContent<P extends object>(
  Component: React.ComponentType<P>,
  type: SkeletonType = 'banner',
  count: number = 1,
  direction: DirectionType = 'column'
) {
  return function SetContent(props: Props & P) {
    const { isLoading, error, ...restProps } = props
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
      return <Component {...({ restProps } as P)} />
    }
  }
}
