import { SubCategoryData } from '../../types/types'

interface SubCategoryDropdownProps {
  subCategoryData: SubCategoryData | null
}

export const SubCategoryDropdown = ({ subCategoryData }: SubCategoryDropdownProps) => {
  if (!subCategoryData) return null

  return (
    <div className="p-3 bg-white shadow-lg rounded-e-md">
      <ul className="flex rounded-e-md">
        {Object.entries(subCategoryData).map(([key, items]) => (
          <li key={key} className="flex flex-col mr-8 font-bold cursor-default min-w-fit">
            {key}
            <ul>
              {items.map((item, idx) => (
                <li key={idx} className="py-[2px] font-normal cursor-pointer hover:bg-gray-100">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
