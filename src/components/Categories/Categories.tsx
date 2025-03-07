import { ForwardedRef, forwardRef } from 'react'
import styles from './styles.module.css'
import { CategoriesType } from '../../interfaces'

interface Props {
  categories: CategoriesType[]
  selectedCategory: CategoriesType | null
  setSelectedCategory: (category: CategoriesType | null) => void
}

export const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.categories} ref={ref}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
          disabled={!selectedCategory}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={selectedCategory === category ? styles.active : styles.item}
              onClick={() => setSelectedCategory(category)}
              disabled={selectedCategory === category}
            >
              {category}
            </button>
          )
        })}
      </div>
    )
  }
)
