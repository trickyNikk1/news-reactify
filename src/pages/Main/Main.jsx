import { NewsBannerSetContent as NewsBanner } from "../../components/NewsBanner/NewsBanner"
import styles from './styles.module.css'
import { getCategories, getNews } from "../../api/apiNews"
import { NewsListSetContent as NewsList } from "../../components/NewsList/NewsList"
import { Pagination } from "../../components/Pagination/Pagination"
import { Categories } from "../../components/Categories/Categories"
import { Search } from "../../components/Search/Search"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useFilters } from "../../helpers/hooks/useFilters"

export const Main = () => {
  const {filters, changeFilters} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, error, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  })
 
  const { data: dataCategories } = useFetch(getCategories)
  const categories = dataCategories?.categories

  const handleNextPage = () => {
    if(filters.page_number < TOTAL_PAGES) {
      changeFilters('page_number', filters.page_number + 1)
    }
  }
  
  const handlePreviousPage = () => {
    if(filters.page_number > 1) {
      changeFilters('page_number', filters.page_number - 1)
    }
  }
  
  const handlePageClick = (pageNumber) => {
      changeFilters('page_number', pageNumber)
  }

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories 
          categories={categories} 
          selectedCategory={filters.category} 
          setSelectedCategory={(category) => changeFilters('category', category)}
        />
      ) : null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilters('keywords', keywords)}/>

      <NewsBanner error={error} item={data && data.news && data.news[0]} isLoading={isLoading}/>
      
      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES} 
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />

      <NewsList error={error} news={data?.news} isLoading={isLoading}/>

      <Pagination
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES} 
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      />
    </main>
  )
}