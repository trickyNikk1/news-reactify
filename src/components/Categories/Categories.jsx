import { forwardRef } from 'react'
import styles from './styles.module.css'

export const Categories = forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) => {
  return (
    <div className={styles.categories} ref={ref}>
      <button 
        className={!selectedCategory ? styles.active : styles.item} 
        onClick={() => setSelectedCategory(null)}
        disabled={!selectedCategory}
      >
        All
      </button>
      {categories.map(category => {
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
})