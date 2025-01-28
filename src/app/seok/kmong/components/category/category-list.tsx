import Link from 'next/link'

interface CategoryListProps {
  title: string
  categories: { id: number; name: string }[]
  onMouseEnter: (id: number) => void
}

export const CategoryList = ({ title, categories, onMouseEnter }: CategoryListProps) => {
  return (
    <div className="p-2">
      <h3 className="font-bold cursor-default">{title}</h3>
      <ul className="flex flex-col">
        {categories.map((category) => (
          <li
            key={`${title}/${category.id}`}
            className="py-1 hover:bg-gray-100"
            onMouseEnter={() => onMouseEnter(category.id)}>
            <Link href={`category/${title.toLowerCase()}/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
