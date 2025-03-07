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
import { LatestNews } from "../../components/LatestNews/LatestNews"
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters"

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
 

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news}/>
      <NewsByFilters news={data?.news} isLoading={isLoading} filters={filters} changeFilters={changeFilters}/>
    </main>
  )
}