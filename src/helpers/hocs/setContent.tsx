import { Skeleton } from '../../components/Skeleton/Skeleton'
import { DirectionType, SkeletonType } from '../../interfaces'

interface Props {
  isLoading: boolean
  error: Error | null
}

export function setContent<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function SetContent(props: Props & P) {
    const { isLoading, error, ...restProps } = props

    if (error) {
      return <div>{error.message}</div>
    }
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />
    }
    if (!isLoading && !error) {
      return <Component {...({ restProps } as P)} />
    }
  }
}
