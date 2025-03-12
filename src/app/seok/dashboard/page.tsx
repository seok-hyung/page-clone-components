'use client'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useUserHeight } from './hooks/useUserHeight'
import { getChartData, chartOptions } from './configs/chartConfig'

// Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Page() {
  const { heightData } = useUserHeight()
  const chartData = getChartData(heightData)

  return (
    <div className="w-full h-full">
      <div className="max-w-screen-xl mx-auto">
        <Bar options={chartOptions} data={chartData} className="w-full h-full mb-60" />
      </div>
    </div>
  )
}
