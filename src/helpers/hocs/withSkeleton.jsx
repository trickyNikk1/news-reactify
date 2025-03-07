import { Skeleton }  from '../../components/Skeleton/Skeleton'

export function withSkeleton(Component, type, count, direction) {
    return function WithSkeleton(props) {
        const { isLoading, ...restProps } = props
        return (
            <>
                {isLoading ? <Skeleton type={type} count={count} direction={direction}/> : <Component {...restProps} />}
            </>
        )
    }
}