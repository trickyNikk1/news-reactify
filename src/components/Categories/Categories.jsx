import styles from './styles.module.css'

export const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
  return (
    <div className={styles.categories}>
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
}