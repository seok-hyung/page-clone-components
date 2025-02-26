import { useState, useEffect } from 'react'
import { User } from '../types/user'
import { fetchUsers } from '../api/userApi'

export const useUserHeight = () => {
  const [heightData, setHeightData] = useState<number[]>([0, 0, 0, 0, 0])

  const processHeightData = (users: User[]) => {
    const heightRanges = [150, 160, 170, 180, 190]
    const counts = [0, 0, 0, 0, 0]

    users.forEach((user) => {
      for (let i = heightRanges.length - 1; i >= 0; i--) {
        if (user.height >= heightRanges[i]) {
          counts[i]++
          break
        }
      }
    })
    setHeightData(counts)
  }

  const getUser = async () => {
    try {
      const data = await fetchUsers()
      processHeightData(data.users)
    } catch (error) {
      console.error('Failed to get users:', error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return { heightData }
}
