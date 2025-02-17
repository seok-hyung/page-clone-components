import { User } from '../types'

const USER_API = 'https://dummyjson.com/users'

// 유저 전체 수를 가져오는 함수
export async function userTotal(): Promise<number> {
  try {
    const response = await fetch(`${USER_API}`)
    const data = await response.json()

    return data.total
  } catch (error) {
    console.error('유저 데이터의 전체갯수를 불러오는데 실패했습니다.', error)
    return 0
  }
}

// 유저 리스트를 불러오는 함수
export async function getTotalUsers(total: number): Promise<User[]> {
  if (total > 0) {
    try {
      const response = await fetch(`${USER_API}?limit=${total}`)
      const data = await response.json()

      return data.users
    } catch (error) {
      console.error('유저 리스트를 불러오는데 실패했습니다.', error)
      return []
    }
  } else {
    console.warn('유효한 total 값이 아닙니다.')
    return []
  }
}
