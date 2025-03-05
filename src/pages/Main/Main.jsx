import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from './styles.module.css'
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"

export const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const controller = new AbortController()
      const fetchNews = async () => {
        try{
          setIsLoading(true)
          const response = await getNews(controller.signal)
          setNews(response.news)
          setIsLoading(false)
        }
        catch (error) {
          console.error(error)
        }
      }
      fetchNews()
      return () => {
        controller.abort()
      }
    }, [])
    
    return (
      <main className={styles.main}>
        {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton type={'banner'} count={1} />}
        {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10} />}
      </main>
    )
}