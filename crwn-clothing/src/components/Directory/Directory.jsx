import { CategoryItem } from '../CategoryItem'
import './Directory.scss'

export function Directory ({ categories }) {
  return (
    <div className="directory-container">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
