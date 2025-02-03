import { careerDetails, designDetails, fortuneDetails, programmingDetails } from '../components/category/categoryData'
import { SubCategoryData } from '../types/types'

// 서버로부터 데이터를 받아온다는 가정을 해봤습니다.

export const fetchSubCategoryData = async (id: number): Promise<SubCategoryData> => {
  switch (id) {
    case 1:
      return designDetails
    case 2:
      return programmingDetails
    case 3:
      return careerDetails
    case 4:
      return fortuneDetails
    default:
      return {}
  }
}
