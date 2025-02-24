import { UserResponse } from '../types/user'

const BASE_URL = 'https://dummyjson.com'

export const fetchUsers = async (): Promise<UserResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/users`)
    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}
