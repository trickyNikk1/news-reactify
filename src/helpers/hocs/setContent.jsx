import { Skeleton }  from '../../components/Skeleton/Skeleton'

export function setContent(Component, type, count, direction) {
    return function SetContent(props) {
        const { isLoading, error, ...restProps } = props
        
        if(error) {
            return <div>{error.message}</div>
        }
        if(isLoading) {
            return <Skeleton type={type} count={count} direction={direction} />
        }
        if(!isLoading && !error) {
            return <Component {...restProps} />
        }
    }
}