import { IFilters } from '@/shared/interfaces'
import styles from './styles.module.css'
import { useAppDispatch } from '@/app/appStore'
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi'
import { setFilters } from '@/entities/news/model/newsSlice'
import { Slider } from '@/features/slider'
import { Categories } from '@/features/category/ui/Categories/Categories'
import { Search } from '@/features/search'

interface Props {
  filters: IFilters
}

export const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => dispatch(setFilters({ key: 'category', value: category }))}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters?.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
      />
    </div>
  )
}
