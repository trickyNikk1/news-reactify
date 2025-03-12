import { useAppSelector } from '@/app/appStore'
import { NewsFilters } from '@/widgets/news'

import styles from './styles.module.css'
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi'
import { NewsListWithPagination } from '../NewsListWithPagination/NewsListWithPagination'
import { useGetNewsQuery } from '@/entities/news/api/newsApi'
import { useDebounce } from '@/shared/hooks/useDebounce'

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters)

  const { data: dataCategories } = useGetCategoriesQuery(null)

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, error, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  })

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={dataCategories?.categories} />
      <NewsListWithPagination filters={filters} isLoading={isLoading} error={error} news={data ? data.news : []} />
    </section>
  )
}
