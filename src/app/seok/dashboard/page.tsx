'use client'
import { Bar } from 'react-chartjs-2'
import { useUserHeight } from './hooks/useUserHeight'
import { getChartData, chartOptions } from './configs/chartConfig'
import { ScrollSection } from './components/ScrollSection'

export default function Page() {
  const { heightData } = useUserHeight()
  const chartData = getChartData(heightData)

  return (
    <div className="w-full h-full">
      <div className="max-w-screen-xl mx-auto">
        <Bar options={chartOptions} data={chartData} className="w-full h-full mb-60" />
      </div>
      <ScrollSection />
    </div>
  )
}
