import Link from 'next/link'

interface NavCategoryListProps {
  categories: string[]
}

const NavCategoryList = ({ categories }: NavCategoryListProps) => {
  return (
    <ul className="flex">
      {categories.map((category, index) => (
        <li key={`category/${index}`} className="relative py-4 mr-4 last:mr-0 group">
          <Link href={`category/${index}`}>{category}</Link>
          <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-yellow-400 scale-x-0 group-hover:scale-x-100"></span>
        </li>
      ))}
    </ul>
  )
}

export default NavCategoryList
