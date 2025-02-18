'use client'

import { User } from '../../types/user'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

interface UserProps {
  users: User[]
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'User Height Overview',
    },
  },
}

const labels = ['150cm 이상', '160cm 이상', '170cm 이상', '180cm 이상', '190cm 이상']

export default function UserHeightChart({ users }: UserProps) {
  const heightData = () => {
    return users.reduce(
      (acc, { height }) => {
        // user 객체에서 height 추출
        if (height >= 150 && height < 160) acc['150']++
        else if (height >= 160 && height < 170) acc['160']++
        else if (height >= 170 && height < 180) acc['170']++
        else if (height >= 180 && height < 190) acc['180']++
        else if (height >= 190) acc['190']++
        return acc
      },
      { '150': 0, '160': 0, '170': 0, '180': 0, '190': 0 } // 초기값
    )
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'User 수',
        data: Object.values(heightData()),
        backgroundColor: 'rgba(255, 241, 86, 0.3)',
        borderWidth: 1,
        borderColor: 'rgb(245, 216, 87)',
        hoverBackgroundColor: 'rgba(255, 241, 86, 0.6)',
      },
    ],
  }
  return (
    <div className="p-4 w-1/2 shadow border-t-4 border-orange-300">
      <h3 className="mb-4 text-[#666666]">사용자 키 분포 차트</h3>
      <Bar options={options} data={data} />
    </div>
  )
}
