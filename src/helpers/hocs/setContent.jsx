import { Skeleton }  from '../../components/Skeleton/Skeleton'

export function setContent(Component, type, count) {
    return function SetContent(props) {
        const { isLoading, error, ...restProps } = props
        
        if(error) {
            return <div>{error.message}</div>
        }
        if(isLoading) {
            return <Skeleton type={type} count={count} />
        }
        if(!isLoading && !error) {
            return <Component {...restProps} />
        }
    }
}