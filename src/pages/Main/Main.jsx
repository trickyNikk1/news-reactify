import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from './styles.module.css'
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"

export const Main = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
      const controller = new AbortController()
      const fetchNews = async () => {
        try{
          const response = await getNews(controller.signal)
          setNews(response.news)
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
        {news.length ? <NewsBanner item={news[0]}/> : null}
        <NewsList news={news}/>
      </main>
    )
}