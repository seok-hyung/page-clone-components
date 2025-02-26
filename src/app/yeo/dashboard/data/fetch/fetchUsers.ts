'use server'

const BASE_URL = 'https://dummyjson.com'

export async function getUsers() {
  try {
    const res = await fetch(`${BASE_URL}/users?limit=0`)
    if (!res.ok) {
      throw new Error(`사용자 데이터를 가져오는 데 실패했습니다. ${res.status}`)
    }
    const resData = await res.json()
    return resData
  } catch (error) {
    console.error('사용자 데이터 요청 중 오류 발생', error)
    throw new Error(
      error instanceof Error
        ? `사용자 데이터를 가져오는 중 오류가 발생했습니다. ${error.message}`
        : '알 수 없는 오류로 데이터를 가져올 수 없습니다. 잠시 후 다시 시도해주세요.'
    )
  }
}
