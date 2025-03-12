import { IFilters } from '@/shared/interfaces'
import styles from './styles.module.css'
import { useAppDispatch } from '@/app/appStore'
import { setFilters } from '@/entities/news/model/newsSlice'
import { Slider } from '@/features/slider'
import { Categories } from '@/features/category/ui/Categories/Categories'
import { Search } from '@/features/search'
import { CategoriesType } from '@/entities/category'

interface Props {
  filters: IFilters
  categories?: CategoriesType[]
}

export const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
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
