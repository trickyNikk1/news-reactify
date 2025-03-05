import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from './styles.module.css'
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"

export const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10

    useEffect(() => {
      const controller = new AbortController()
      const fetchNews = async () => {
        try{
          setIsLoading(true)
          const response = await getNews(controller.signal, pageSize, currentPage)
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
    }, [currentPage])

    const handleNextPage = () => {
      if(currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }
    
    const handlePreviousPage = () => {
      if(currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
    
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
      <main className={styles.main}>
        {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton type={'banner'} count={1} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages} 
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
        />
        {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages} 
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageClick={handlePageClick}
        />
      </main>
    )
}