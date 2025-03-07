import { useEffect, useState } from 'react'

interface FetchFunction<P, T> {
  (params: P): Promise<T>
}

interface UseFetchResult<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
}

export const useFetch = <T, P>(fetchFunction: FetchFunction<P, T>, params?: P): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const stringParams = params ? new URLSearchParams(params).toString() : ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = params ? await fetchFunction(params) : null
        setData(response)
      } catch (error) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [fetchFunction, stringParams])

  return { data, isLoading, error }
}
