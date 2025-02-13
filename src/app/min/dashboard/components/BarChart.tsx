'use client'

import { useEffect, useState } from 'react'
import { getTotalUsers, userTotal } from '../api'
import { User } from '../types'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

// Chart.js에서 필요한 모든 요소를 등록합니다.
Chart.register(...registerables)

export default function BarChart() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const total = await userTotal()
      const usersData = await getTotalUsers(total)
      setUsers(usersData)
      setLoading(false)
    }
    fetchData()
  }, [])

  // 남성과 여성의 키에 따른 사용자 수 분포 계산
  const calculateHeightDistributionByGender = (gender: string) => {
    const heightDistribution = [0, 0, 0, 0, 0] // 각 구역의 사용자 수

    users.forEach((user) => {
      if (user.gender === gender) {
        if (user.height >= 150) heightDistribution[0]++
        if (user.height >= 160) heightDistribution[1]++
        if (user.height >= 170) heightDistribution[2]++
        if (user.height >= 180) heightDistribution[3]++
        if (user.height >= 190) heightDistribution[4]++
      }
    })

    return heightDistribution
  }

  const maleDistribution = calculateHeightDistributionByGender('male')
  const femaleDistribution = calculateHeightDistributionByGender('female')

  const chartData = {
    labels: ['키 150 이상', '키 160 이상', '키 170 이상', '키 180 이상', '키 190 이상'],
    datasets: [
      {
        label: '남성',
        data: maleDistribution,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        barThickness: 40, // 막대 너비 조정
        categoryPercentage: 0.5, // 각 카테고리의 너비 조정
      },
      {
        label: '여성',
        data: femaleDistribution,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        barThickness: 40, // 막대 너비 조정
        categoryPercentage: 0.5, // 각 카테고리의 너비 조정
      },
    ],
  }

  const totalUsers = users.length // 전체 사용자 수

  const options = {
    //# 아무것도 안변함
    // plugins: {
    //   tooltip: {
    //     callbacks: {
    //       title: function (tooltipItems) {
    //         return tooltipItems[0].label // X축 레이블 표시
    //       },
    //       label: function (tooltipItem) {
    //         const label = tooltipItem.dataset.label || ''
    //         const value = tooltipItem.raw || 0
    //         return `${label}: ${value}명`
    //       },
    //     },
    //   },
    // },
  }

  if (loading) {
    return <div>로딩 중...</div>
  }

  return (
    <div className="w-1/2">
      <h1>성별에 따른 키 분포</h1>
      <Bar data={chartData} options={options} />
      <div>전체 사용자 수: {totalUsers}명</div>
    </div>
  )
}
