import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from './styles.module.css'
import { getCategories, getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"
import { Categories } from "../../components/Categories/Categories"

export const Main = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10
  const pageSize = 10

  const fetchNews = async (signal, currentPage) => {
    try{
      setIsLoading(true)
      const response = await getNews({signal, page_size: pageSize, page_number: currentPage, category: selectedCategory === 'All' ? null : selectedCategory})
      setNews(response.news)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchNews(controller.signal, currentPage)
    return () => {
      controller.abort()
    }
  }, [currentPage, selectedCategory])
  
  const fetchCategories = async (signal) => {
    try{
      setIsLoading(true)
      const response = await getCategories(signal)
      setCategories(['All', ...response.categories])
    }
    catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    const controller = new AbortController()
    fetchCategories(controller.signal)
    return () => {
      controller.abort()
    }
  }, [])
  
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
      <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
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